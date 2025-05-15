import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { p as NOOP_MIDDLEWARE_HEADER, q as decodeKey } from './chunks/astro/server_DQNUgh71.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/jessinaka/Desktop/Coding%20Projects/kapehe-hula/","cacheDir":"file:///Users/jessinaka/Desktop/Coding%20Projects/kapehe-hula/node_modules/.astro/","outDir":"file:///Users/jessinaka/Desktop/Coding%20Projects/kapehe-hula/dist/","srcDir":"file:///Users/jessinaka/Desktop/Coding%20Projects/kapehe-hula/src/","publicDir":"file:///Users/jessinaka/Desktop/Coding%20Projects/kapehe-hula/public/","buildClientDir":"file:///Users/jessinaka/Desktop/Coding%20Projects/kapehe-hula/dist/","buildServerDir":"file:///Users/jessinaka/Desktop/Coding%20Projects/kapehe-hula/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/ts signin","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/TS signin\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"TS signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/TS signin.ts","pathname":"/api/auth/TS signin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/auth/ts signout","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/TS signout\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"TS signout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/TS signout.ts","pathname":"/api/auth/TS signout","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.Ch2nMrjN.css"},{"type":"external","src":"/_astro/contact.Bs1jPiaO.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.Ch2nMrjN.css"},{"type":"external","src":"/_astro/hula-library.BTK4Xfcx.css"}],"routeData":{"route":"/hula-library","isIndex":false,"type":"page","pattern":"^\\/hula-library\\/?$","segments":[[{"content":"hula-library","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hula-library.astro","pathname":"/hula-library","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/members-page.Ba19_1iS.css"},{"type":"external","src":"/_astro/contact.Ch2nMrjN.css"}],"routeData":{"route":"/members-page","isIndex":false,"type":"page","pattern":"^\\/members-page\\/?$","segments":[[{"content":"members-page","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/members-page.astro","pathname":"/members-page","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BxpSJVwd.css"},{"type":"external","src":"/_astro/contact.Ch2nMrjN.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.kapehehula.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/pages/hula-library.astro",{"propagation":"none","containsHead":true}],["/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/pages/members-page.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/auth/TS signin@_@ts":"pages/api/auth/ts signin.astro.mjs","\u0000@astro-page:src/pages/api/auth/TS signout@_@ts":"pages/api/auth/ts signout.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/hula-library@_@astro":"pages/hula-library.astro.mjs","\u0000@astro-page:src/pages/members-page@_@astro":"pages/members-page.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CfDLiyYi.mjs","/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_WvByoCcb.mjs","/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/pages/members-page.astro?astro&type=script&index=0&lang.ts":"_astro/members-page.astro_astro_type_script_index_0_lang.DSpwrKRm.js","/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.CmZ81PPv.js","/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts":"_astro/BaseLayout.astro_astro_type_script_index_0_lang.DHeUG0-v.js","/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/components/Carousel.astro?astro&type=script&index=0&lang.ts":"_astro/Carousel.astro_astro_type_script_index_0_lang.BQSinTWG.js","/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/components/About.astro?astro&type=script&index=0&lang.ts":"_astro/About.astro_astro_type_script_index_0_lang.B5zsgGst.js","/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.c9bIFZV9.js","/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/components/Header.astro?astro&type=script&index=1&lang.ts":"_astro/Header.astro_astro_type_script_index_1_lang.CBec0w5h.js","/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/components/Login.astro?astro&type=script&index=0&lang.ts":"_astro/Login.astro_astro_type_script_index_0_lang.D0bYYjFx.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/pages/members-page.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{document.querySelectorAll('a[href^=\"#\"]').forEach(t=>{t.addEventListener(\"click\",function(o){o.preventDefault();const r=this.getAttribute(\"href\"),e=document.querySelector(r);e&&e.scrollIntoView({behavior:\"smooth\"})})})});"],["/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/pages/index.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{const r=document.querySelectorAll(\".animate-on-scroll\");if(r.length===0)return;const n=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add(\"animated\"),n.unobserve(t.target))})},{threshold:.1,rootMargin:\"0px 0px -50px 0px\"});r.forEach(e=>{n.observe(e)})});"],["/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts","var c=document.querySelector(\"body\");const n=document.querySelector(\"#cs-navigation\"),o=document.querySelector(\"#cs-navigation .cs-toggle\");o.addEventListener(\"click\",function(){o.classList.toggle(\"cs-active\"),n.classList.toggle(\"cs-active\"),c.classList.toggle(\"cs-open\"),s()});function s(){const e=document.querySelector(\"#cs-expanded\");e.getAttribute(\"aria-expanded\")===\"false\"?e.setAttribute(\"aria-expanded\",\"true\"):e.setAttribute(\"aria-expanded\",\"false\")}document.addEventListener(\"scroll\",e=>{document.documentElement.scrollTop>=100?document.querySelector(\"body\").classList.add(\"scroll\"):document.querySelector(\"body\").classList.remove(\"scroll\")});const d=Array.from(document.querySelectorAll(\"#cs-navigation .cs-dropdown\"));for(const e of d){const t=()=>{e.classList.toggle(\"cs-active\")};e.addEventListener(\"click\",t)}document.addEventListener(\"astro:page-load\",()=>{document.querySelector(\"#cs-navigation\");const e=document.querySelector(\"#quote-2141\");function t(){e.getBoundingClientRect().bottom<=0?document.body.classList.add(\"scroll\"):document.body.classList.remove(\"scroll\")}window.addEventListener(\"scroll\",t),t()});"],["/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/components/Carousel.astro?astro&type=script&index=0&lang.ts","if(typeof window<\"u\"&&!window.bootstrap){const e=document.createElement(\"script\");e.src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js\",e.integrity=\"sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz\",e.crossOrigin=\"anonymous\",document.head.appendChild(e)}function o(){const e=document.getElementById(\"imageCarousel\");if(e)if(typeof bootstrap<\"u\"){const t=bootstrap.Carousel.getInstance(e);t&&t.dispose();const n=new bootstrap.Carousel(e,{interval:4500,ride:!0,wrap:!0});setTimeout(()=>{n.cycle()},100)}else setTimeout(o,200)}document.addEventListener(\"DOMContentLoaded\",o);document.addEventListener(\"astro:page-load\",o);document.addEventListener(\"astro:before-swap\",()=>{const e=document.getElementById(\"imageCarousel\");if(e&&typeof bootstrap<\"u\"){const t=bootstrap.Carousel.getInstance(e);t&&t.dispose()}});"],["/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/components/About.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const r=document.querySelectorAll(\".animate-on-scroll\");if(r.length===0)return;const n=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add(\"animated\"),n.unobserve(t.target))})},{threshold:.1,rootMargin:\"0px 0px -50px 0px\"});r.forEach(e=>{n.observe(e)})});document.addEventListener(\"astro:page-load\",()=>{const r=document.querySelectorAll(\".animate-on-scroll\");if(r.length===0)return;const n=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&(t.target.classList.add(\"animated\"),n.unobserve(t.target))})},{threshold:.1,rootMargin:\"0px 0px -50px 0px\"});r.forEach(e=>{n.observe(e)})});"],["/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/components/Header.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const i=document.cookie.split(\";\").some(e=>e.trim().startsWith(\"sb-access-token=\")),t=document.getElementById(\"auth-link\");i&&t?(t.textContent=\"Sign Out\",t.href=\"/api/auth/TS%20signout\"):t&&(t.textContent=\"Member Login\",t.href=\"#\",t.addEventListener(\"click\",function(e){e.preventDefault();const n=document.getElementById(\"signin-lightbox\");n&&(n.classList.add(\"active\"),document.body.classList.add(\"no-scroll\"))}))});"],["/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/components/Header.astro?astro&type=script&index=1&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const c=document.getElementById(\"quote-2141\"),e=document.getElementById(\"cs-navigation\");function d(){return c.offsetHeight+32}function o(){const t=d();window.scrollY>=t+20?e.classList.add(\"sticky\"):e.classList.remove(\"sticky\")}o(),window.addEventListener(\"scroll\",o),window.addEventListener(\"resize\",o),document.addEventListener(\"click\",function(t){if(t.target.tagName===\"A\"&&e.contains(t.target)&&t.target.classList.contains(\"cs-li-link\")){e.classList.remove(\"cs-active\"),document.body.classList.remove(\"cs-open\");const n=document.getElementById(\"mobile-menu-toggle\");n&&n.setAttribute(\"aria-expanded\",\"false\")}},!0);const i=document.getElementById(\"login-link\"),s=document.getElementById(\"signin-lightbox\");i&&s&&i.addEventListener(\"click\",function(t){t.preventDefault(),s.classList.add(\"active\"),document.body.classList.add(\"no-scroll\")})});"],["/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/components/Login.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.getElementById(\"signin-lightbox\"),o=e.querySelector(\".close-button\"),t=document.getElementById(\"forgot-password-btn\");o.addEventListener(\"click\",()=>{e.classList.remove(\"active\"),document.body.classList.remove(\"no-scroll\")}),e.addEventListener(\"click\",s=>{s.target===e&&(e.classList.remove(\"active\"),document.body.classList.remove(\"no-scroll\"))}),t&&t.addEventListener(\"click\",()=>{alert(\"Please contact kapehehula@gmail.com to reset your password.\")})});"]],"assets":["/_astro/header-logo.DC_nBe7m.png","/_astro/coa1.B-eYx4wo.jpg","/_astro/old-halau-photo.ChvT2RW8.jpg","/_astro/home-photo.COg3Ij0L.jpg","/_astro/bootstrap-icons.BtvjY1KL.woff2","/_astro/header-logo-mobile.BFaSlnH8.png","/_astro/bootstrap-icons.BOrJxbIo.woff","/_astro/contact.Bs1jPiaO.css","/_astro/contact.Ch2nMrjN.css","/_astro/hula-library.BTK4Xfcx.css","/_astro/index.BxpSJVwd.css","/_astro/members-page.Ba19_1iS.css","/_redirects","/favicon.svg","/robots.txt","/assets/fonts/roboto-v29-latin-700.woff","/assets/fonts/roboto-v29-latin-700.woff2","/assets/fonts/roboto-v29-latin-900.woff","/assets/fonts/roboto-v29-latin-900.woff2","/assets/fonts/roboto-v29-latin-regular.woff","/assets/fonts/roboto-v29-latin-regular.woff2","/assets/images/IMG_2431.JPG","/assets/images/IMG_3410.JPG","/assets/images/buttonbg.png","/assets/images/cheryl.png","/assets/images/coa1.jpg","/assets/images/header-logo-mobile.png","/assets/images/header-logo.png","/assets/images/home-photo.jpg","/assets/images/kaimana.png","/assets/images/kukuipuka-1.jpg","/assets/images/kukuipuka-2.jpg","/assets/images/kumu-drum2.jpg","/assets/images/lehua-removebg-preview.png","/assets/images/westin2.jpg","/assets/favicons/browserconfig.xml","/assets/favicons/favicon.ico","/assets/favicons/site.webmanifest","/assets/lighthouse/100-score.png","/assets/svgs/check.svg","/assets/svgs/content-circles.svg","/assets/svgs/cta-squares.svg","/assets/svgs/logo-black.svg","/assets/svgs/logo-white.svg","/assets/svgs/moon.svg","/assets/svgs/profile-woman.svg","/assets/svgs/profile.svg","/assets/svgs/service1.svg","/assets/svgs/service2.svg","/assets/svgs/service3.svg","/assets/svgs/stars.svg","/assets/svgs/sun-icon.svg","/assets/svgs/sun.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Zy6Dx76UKArkohU1kjiS7XHWU1zknnWkJAAip+yqC8E=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
