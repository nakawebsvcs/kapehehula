// This is a server endpoint
export const prerender = false;

import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  try {
    // Log to help with debugging
    console.log("Auth endpoint called");

    const formData = await request.formData();
    const email = formData.get("email")?.toString();
    const password = formData.get("password")?.toString();

    if (!email || !password) {
      console.log("Missing email or password");
      return new Response("Email and password are required", { status: 400 });
    }

    // Check if supabase is properly initialized
    if (!supabase) {
      console.error("Supabase client not initialized");
      return new Response("Server configuration error", { status: 500 });
    }

    console.log("Attempting to sign in with Supabase");
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error("Supabase auth error:", error.message);
      return new Response(error.message, { status: 500 });
    }

    console.log("Authentication successful, setting cookies");
    const { access_token, refresh_token } = data.session;

    cookies.set("sb-access-token", access_token, {
      path: "/",
      secure: true,
      httpOnly: true,
      sameSite: "lax",
    });

    cookies.set("sb-refresh-token", refresh_token, {
      path: "/",
      secure: true,
      httpOnly: true,
      sameSite: "lax",
    });

    console.log("Redirecting to members page");
    return redirect("/members-page");
  } catch (err) {
    console.error("Unexpected error in auth endpoint:", err);
    return new Response("Internal server error", { status: 500 });
  }
};