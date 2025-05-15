import { c as createComponent, m as maybeRenderHead, l as renderScript, a as renderTemplate, h as createAstro, b as addAttribute, r as renderComponent, n as renderSlot, o as renderHead } from './astro/server_DQNUgh71.mjs';
import 'kleur/colors';
/* empty css                           */
import 'clsx';

const name = "Kapehe Hula";
const email = "kapehehula@mgmail.com";
const phoneForTel = "808-281-4741";
const phoneFormatted = "(808) 281-4741";
const address = {"lineOne":"P.O. Box 977","city":"Kihei","state":"HI","zip":"96753","mapLink":"https://maps.app.goo.gl/nKdXSJ84Dg6FGqyL7"};
const domain = "www.kapehehula.com";
const client = {
  name,
  email,
  phoneForTel,
  phoneFormatted,
  address,
  domain,
};

const landingImage = new Proxy({"src":"/_astro/header-logo.DC_nBe7m.png","width":2162,"height":1048,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/assets/images/header-logo.png";
							}
							
							return target[name];
						}
					});

const headerLogoMobile = new Proxy({"src":"/_astro/header-logo-mobile.BFaSlnH8.png","width":1657,"height":875,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/assets/images/header-logo-mobile.png";
							}
							
							return target[name];
						}
					});

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="signin-lightbox" class="lightbox" data-astro-cid-b2fdlob7> <div class="lightbox-content" data-astro-cid-b2fdlob7> <button class="close-button" aria-label="Close sign in form" type="button" data-astro-cid-b2fdlob7>×</button> <h2 data-astro-cid-b2fdlob7>Sign In</h2> <form id="signin-form" method="POST" action="/api/auth/TS%20signin" enctype="application/x-www-form-urlencoded" data-astro-cid-b2fdlob7> <div class="form-group" data-astro-cid-b2fdlob7> <label for="email" data-astro-cid-b2fdlob7>Email</label> <input type="email" id="email" name="email" required data-astro-cid-b2fdlob7> </div> <div class="form-group" data-astro-cid-b2fdlob7> <label for="password" data-astro-cid-b2fdlob7>Password</label> <input type="password" id="password" name="password" required data-astro-cid-b2fdlob7> </div> <div class="form-error" id="signin-error" data-astro-cid-b2fdlob7></div> <button type="submit" class="submit-button" data-astro-cid-b2fdlob7>Sign In</button> <div class="form-note" data-astro-cid-b2fdlob7> <p data-astro-cid-b2fdlob7>Site login is for halau haumana only. If you are a haumana and need to request a login, email <a href="mailto:kapehehula@gmail.com" data-astro-cid-b2fdlob7>kapehehula@gmail.com</a></p> </div> <div class="forgot-password" data-astro-cid-b2fdlob7> <button type="button" id="forgot-password-btn" data-astro-cid-b2fdlob7>Forgot Password?</button> </div> </form> </div> </div>  ${renderScript($$result, "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/components/Login.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/components/Login.astro", void 0);

const $$Astro$1 = createAstro("https://www.kapehehula.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const isLoggedIn = Astro2.cookies.has("sb-access-token");
  console.log("Authentication status:", isLoggedIn);
  return renderTemplate`<!-- ============================================ --><!--                  Header Wrapper              --><!-- ============================================ -->${maybeRenderHead()}<div id="header-wrapper" data-astro-cid-3ef6ksr2> <!-- ============================================ --> <!--                     Quote                    --> <!-- ============================================ --> <section id="quote-2141" data-astro-cid-3ef6ksr2> <div class="cs-container" data-astro-cid-3ef6ksr2> <div class="cs-content" data-astro-cid-3ef6ksr2> <img class="cs-quote-icon cs-quote-icon-desktop" loading="lazy" decoding="async"${addAttribute(landingImage.src, "src")} alt="quote" width="100%" height="100%" aria-hidden="true" data-astro-cid-3ef6ksr2> <img class="cs-quote-icon cs-quote-icon-mobile" loading="lazy" decoding="async"${addAttribute(headerLogoMobile.src, "src")} alt="quote" width="100%" height="100%" aria-hidden="true" data-astro-cid-3ef6ksr2> </div> </div> </section> <!-- ============================================ --> <!--                 Navigation                   --> <!-- ============================================ --> <header id="cs-navigation" data-astro-cid-3ef6ksr2> <!--Navigation List--> <nav class="cs-nav" data-astro-cid-3ef6ksr2> <!--Mobile Nav Toggle--> <button class="cs-toggle" id="mobile-menu-toggle" aria-expanded="false" aria-controls="cs-expanded" aria-label="mobile menu toggle" data-astro-cid-3ef6ksr2> <div class="cs-box" aria-hidden="true" data-astro-cid-3ef6ksr2> <span class="cs-line cs-line1" aria-hidden="true" data-astro-cid-3ef6ksr2></span> <span class="cs-line cs-line2" aria-hidden="true" data-astro-cid-3ef6ksr2></span> <span class="cs-line cs-line3" aria-hidden="true" data-astro-cid-3ef6ksr2></span> </div> </button> <!-- We need a wrapper div so we can set a fixed height on the cs-ul in case the nav list gets too long from too many dropdowns being opened and needs to have an overflow scroll. This wrapper acts as the background so it can go the full height of the screen and not cut off any overflowing nav items while the cs-ul stops short of the bottom of the screen, which keeps all nav items in view no matter how mnay there are--> <div class="cs-ul-wrapper" data-astro-cid-3ef6ksr2> <ul id="cs-expanded" class="cs-ul" data-astro-cid-3ef6ksr2> <li class="cs-li" data-astro-cid-3ef6ksr2> <a href="/" class="cs-li-link cs-active" aria-current="page" data-astro-cid-3ef6ksr2>
Home
</a> </li> <li class="cs-li" data-astro-cid-3ef6ksr2> <a href="#classes" class="cs-li-link" data-astro-cid-3ef6ksr2>
Classes
</a> </li> <li class="cs-li" data-astro-cid-3ef6ksr2> <a href="#sbsr-2273" class="cs-li-link" data-astro-cid-3ef6ksr2>
Events
</a> </li> <li class="cs-li" data-astro-cid-3ef6ksr2> <a href="#about" class="cs-li-link" data-astro-cid-3ef6ksr2>
About
</a> </li> <li class="cs-li" data-astro-cid-3ef6ksr2> <a href="#alakai" class="cs-li-link" data-astro-cid-3ef6ksr2>
Alaka'i
</a> </li> <li class="cs-li" data-astro-cid-3ef6ksr2> <a href="#contact" class="cs-li-link" data-astro-cid-3ef6ksr2>
Contact
</a> </li> <li class="cs-li cs-social" data-astro-cid-3ef6ksr2> <a href="https://www.facebook.com/groups/329283045609515" class="cs-li-link" target="_blank" data-astro-cid-3ef6ksr2> <i class="bi bi-facebook" data-astro-cid-3ef6ksr2></i> </a> </li> <li class="cs-li cs-login" data-astro-cid-3ef6ksr2> <a href="/api/auth/TS%20signout" class="cs-li-link" id="auth-link" data-astro-cid-3ef6ksr2> ${isLoggedIn ? "Sign Out" : "Member Login"} </a> </li> </ul> </div> </nav> </header> </div> ${!isLoggedIn && renderTemplate`${renderComponent($$result, "Login", $$Login, { "data-astro-cid-3ef6ksr2": true })}`} ${renderScript($$result, "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/components/Header.astro?astro&type=script&index=0&lang.ts")} ${renderScript($$result, "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/components/Header.astro?astro&type=script&index=1&lang.ts")} `;
}, "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- ============================================ --><!--                   Footer                     --><!-- ============================================ -->${maybeRenderHead()}<footer id="cs-footer-108" data-astro-cid-sz7xmlte> <div class="cs-container" data-astro-cid-sz7xmlte> <span class="cs-copyright" data-astro-cid-sz7xmlte>Copyright © 2025 Kumu Hula Mapuana Samonte-Nowak
<span class="cs-copyright" data-astro-cid-sz7xmlte>Website by <a href="https://nakamurawebservices.com" target="_blank" data-astro-cid-sz7xmlte>Nakamura Web Services</a></span> </span></div> </footer> `;
}, "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.kapehehula.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { description, title, preloadedImage } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<!-- A fully fleshed-out <head>, dynamically changing based on client.json and the page front matter --><html lang="en" data-astro-cid-37fxchfa> <head><!-- Standard meta tags --><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><meta name="keywords" content=""><link rel="canonical"', '><link rel="sitemap" href="/sitemap-index.xml"><!-- Preloads the image passed as a prop --><link rel="preload"', ' as="image"><!--Social Media Display--><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:image" content="/assets/images/logo-small.png"><meta property="og:image:secure_url" content="/assets/images/logo-small.png"><!--Favicons--><link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/favicon.ico"><link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon.ico"><link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon.ico"><link rel="manifest" href="/assets/favicons/site.webmanifest"><meta name="msapplication-TileColor" content="#da532c"><meta name="theme-color" content="#ffffff"><!--Google Fonts--><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Allura&family=Cinzel:wght@400..900&display=swap" rel="stylesheet"><!--For home page, use service keywords for the title, including location for SEO.\n    Other pages should just include the page name.\n    \n    EXAMPLE:\n    Home page - House Painting Contractors | Painters and Co. | TestCity, WA\n    About Page - About us | Painters and Co.\n    --><title>\n      ', "\n    </title><!-- Sitewide Scripts -->", "", '</head> <body data-astro-cid-37fxchfa> <!--Screen reader skip main nav--> <a class="skip" aria-label="skip to main content" href="#main" data-astro-cid-37fxchfa>Click To Skip To Main Content</a> ', ' <main id="main" data-astro-cid-37fxchfa> ', " </main> ", ` <!-- Back to top button --> <button id="backToTop" class="back-to-top" data-astro-cid-37fxchfa> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-37fxchfa> <path d="M12 19V5M5 12l7-7 7 7" data-astro-cid-37fxchfa></path> </svg> </button> <script>
  // Function to initialize back to top button
  function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');
    if (!backToTopButton) return;
    
    function toggleBackToTopButton() {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    }
    
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    window.addEventListener('scroll', toggleBackToTopButton);
    
    // Initial check
    toggleBackToTopButton();
  }
  
  // Run on initial page load
  document.addEventListener('DOMContentLoaded', initBackToTop);
  
  // Run after Astro page transitions
  document.addEventListener('astro:page-load', initBackToTop);
  
  // Cleanup event listeners when navigating away (important for Astro View Transitions)
  document.addEventListener('astro:before-swap', () => {
    window.removeEventListener('scroll', toggleBackToTopButton);
  });
<\/script>  </body> </html>`])), addAttribute(description, "content"), addAttribute(`https://${client.domain}${Astro2.url.pathname}`, "href"), addAttribute(preloadedImage.src, "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(`https://${client.domain}${Astro2.url.pathname}`, "content"), Astro2.url.pathname === "/" ? `${title}
                |
                ${client.name}
                |
                ${client.address.city},
                ${client.address.state}` : `${title}
                    |
                    ${client.name}`, renderScript($$result, "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-37fxchfa": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-37fxchfa": true }));
}, "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, client as c, landingImage as l };
