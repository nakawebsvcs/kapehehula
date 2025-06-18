console.log("🔥 Login script starting to load...");

import { auth, db } from "../lib/firebase.js";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";

console.log("🔥 Firebase imports successful");
console.log("🔥 Auth object:", auth);
console.log("🔥 DB object:", db);

document.addEventListener("DOMContentLoaded", () => {
  console.log("🔥 Login script DOMContentLoaded fired");

  // Get DOM elements
  const authLink = document.getElementById("auth-link");
  const loginLightbox = document.getElementById("signin-lightbox");
  const loginForm = document.getElementById("signin-form");
  const closeButton = loginLightbox?.querySelector(".close-button");
  const forgotPasswordBtn = document.getElementById("forgot-password-btn");
  const signinError = document.getElementById("signin-error");

  // Password toggle elements
  const passwordInput = document.getElementById("password");
  const togglePasswordBtn = document.getElementById("toggle-password");
  const eyeHidden = document.getElementById("eye-hidden");
  const eyeVisible = document.getElementById("eye-visible");

  console.log("🔥 DOM elements found:");
  console.log("  - authLink:", authLink);
  console.log("  - loginLightbox:", loginLightbox);
  console.log("  - loginForm:", loginForm);
  console.log("  - passwordToggle:", togglePasswordBtn);

  // Password toggle functionality
  if (togglePasswordBtn && passwordInput && eyeHidden && eyeVisible) {
    togglePasswordBtn.addEventListener("click", () => {
      const isPassword = passwordInput.type === "password";

      // Toggle input type
      passwordInput.type = isPassword ? "text" : "password";

      // Toggle icons
      if (isPassword) {
        // Show password - show eye with slash
        eyeHidden.style.display = "none";
        eyeVisible.style.display = "block";
      } else {
        // Hide password - show regular eye
        eyeHidden.style.display = "block";
        eyeVisible.style.display = "none";
      }

      // Keep focus on password input
      passwordInput.focus();
    });
  }

  // Auth state listener
  onAuthStateChanged(auth, (user) => {
    console.log("🔥 Auth state changed:", user ? "logged in" : "logged out");

    if (authLink) {
      if (user) {
        // User is signed in
        authLink.textContent = "Sign Out";
        authLink.removeEventListener("click", handleLoginClick);
        authLink.addEventListener("click", handleSignOut);
      } else {
        // User is signed out
        authLink.textContent = "Member Login";
        authLink.removeEventListener("click", handleSignOut);
        authLink.addEventListener("click", handleLoginClick);
      }
    }
  });

  // Handle login link click
  function handleLoginClick(e) {
    e.preventDefault();
    console.log("🔥 Login link clicked");
    if (loginLightbox) {
      loginLightbox.classList.add("active");
      document.body.classList.add("no-scroll");
      console.log("🔥 Modal should be open now");
    } else {
      console.error("🔥 Login lightbox not found!");
    }
  }

  // Handle sign out
  async function handleSignOut(e) {
    e.preventDefault();
    console.log("🔥 Sign out clicked");

    try {
      await signOut(auth);
      // Clear the cookie
      document.cookie =
        "firebase-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      // Redirect to home
      window.location.href = "/";
    } catch (error) {
      console.error("🔥 Sign out error:", error);
    }
  }

  // Close modal handlers
  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }

  if (loginLightbox) {
    loginLightbox.addEventListener("click", (e) => {
      if (e.target === loginLightbox) {
        closeModal();
      }
    });
  }

  function closeModal() {
    if (loginLightbox) {
      loginLightbox.classList.remove("active");
      document.body.classList.remove("no-scroll");
      clearError();
    }
  }

  // Handle login form submission
  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const submitButton = loginForm.querySelector(".submit-button");

      if (!email || !password) {
        showError("Please fill in all fields");
        return;
      }

      try {
        submitButton.disabled = true;
        submitButton.textContent = "Signing in...";
        clearError();

         console.log("🔥 Setting auth persistence...");
         // Set persistence to LOCAL before signing in
         await setPersistence(auth, browserLocalPersistence);
         console.log("🔥 Attempting to sign in user:", email);

        // Sign in with Firebase Auth
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        console.log("🔥 User signed in successfully:", user.uid);

        // Get the ID token
        console.log("🔥 Getting ID token...");
        const idToken = await user.getIdToken();
        console.log("🔥 ID token received");

        // Store token in cookie for server-side auth checks
        console.log("🔥 Setting cookie...");
        document.cookie = `firebase-token=${idToken}; path=/; max-age=3600; secure; samesite=strict`;
        console.log("🔥 Cookie set");

        let userRole = "user"; // default role

        try {
          // Check if user exists in Firestore, create if not
          console.log("🔥 Checking Firestore for user...");
          const userDocRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userDocRef);
          console.log("🔥 Firestore query completed");

          if (!userDoc.exists()) {
            // Create user document in Firestore if it doesn't exist
            console.log("🔥 Creating user document in Firestore");
            await setDoc(userDocRef, {
              uid: user.uid,
              email: user.email,
              role: "user",
              createdAt: serverTimestamp(),
              lastLoginAt: serverTimestamp(),
            });
            console.log("🔥 User document created");
          } else {
            // Update last login time
            console.log("🔥 Updating existing user document");
            const userData = userDoc.data();
            userRole = userData.role || "user";

            await setDoc(
              userDocRef,
              {
                ...userData,
                lastLoginAt: serverTimestamp(),
              },
              { merge: true }
            );
            console.log("🔥 User document updated");
          }
        } catch (firestoreError) {
          console.error(
            "🔥 Firestore error (but login succeeded):",
            firestoreError
          );
          // Don't throw here - login was successful, just Firestore failed
          // We'll continue with default role
        }

        // Close modal
        console.log("🔥 Closing modal...");
        closeModal();

        // Redirect based on user role
        console.log("🔥 User role:", userRole);
        setTimeout(() => {
          if (userRole === "admin") {
            console.log("🔥 Redirecting to admin panel");
            window.location.href = "/admin";
          } else {
            console.log("🔥 Redirecting to members page");
            window.location.href = "/members-page";
          }
        }, 100);
      } catch (error) {
        console.error("🔥 Login error:", error);
        console.error("🔥 Error code:", error.code);
        console.error("🔥 Error message:", error.message);
        showError(getErrorMessage(error.code));
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Sign In";
      }
    });
  }

  // Handle forgot password
  if (forgotPasswordBtn) {
    forgotPasswordBtn.addEventListener("click", async () => {
      const email = document.getElementById("email").value;

      if (!email) {
        showError("Please enter your email address first");
        return;
      }

      try {
        await sendPasswordResetEmail(auth, email);
        showError("Password reset email sent! Check your inbox.", "success");
      } catch (error) {
        console.error("Password reset error:", error);
        showError(
          "Error sending password reset email. Please contact kapehehula@gmail.com"
        );
      }
    });
  }

  function showError(message, type = "error") {
    if (signinError) {
      signinError.textContent = message;
      signinError.style.color = type === "success" ? "#28a745" : "#e74c3c";
    }
  }

  function clearError() {
    if (signinError) {
      signinError.textContent = "";
    }
  }

  function getErrorMessage(errorCode) {
    switch (errorCode) {
      case "auth/user-not-found":
      case "auth/wrong-password":
      case "auth/invalid-credential":
        return "Invalid email or password";
      case "auth/too-many-requests":
        return "Too many failed attempts. Please try again later.";
      case "auth/user-disabled":
        return "This account has been disabled. Please contact support.";
      case "auth/invalid-email":
        return "Please enter a valid email address";
      default:
        return "Sign in failed. Please try again.";
    }
  }
});

// Handle Astro page transitions
document.addEventListener("astro:page-load", () => {
  console.log("🔥 Astro page load event");
  // Re-trigger DOMContentLoaded for Astro transitions
  const event = new Event("DOMContentLoaded");
  document.dispatchEvent(event);
});

console.log("🔥 Login script finished loading");
