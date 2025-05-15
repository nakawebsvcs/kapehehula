import { h as createAstro, c as createComponent, r as renderComponent, l as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DQNUgh71.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_yM9ZZ0q_.mjs';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const oldHalauPhoto = new Proxy({"src":"/_astro/old-halau-photo.ChvT2RW8.jpg","width":2955,"height":1835,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/assets/images/old-halau-photo.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://www.kapehehula.com");
const $$MembersPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MembersPage;
  const isLoggedIn = Astro2.cookies.has("sb-access-token");
  if (!isLoggedIn) {
    return Astro2.redirect("/");
  }
  const optimizedImage = { src: oldHalauPhoto.src };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Members Area | H\u0101lau Hula Malani O Kapehe", "description": "Members area for H\u0101lau Hula Malani O Kapehe. Access announcements, schedules, and resources for haum\u0101na.", "preloadedImage": optimizedImage, "data-astro-cid-auosfytr": true }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<section id="members-hero" data-astro-cid-auosfytr> <div class="hero-overlay" data-astro-cid-auosfytr></div> <div class="announcement-container" data-astro-cid-auosfytr> <div class="announcement-box" data-astro-cid-auosfytr> <h1 class="cinzel" data-astro-cid-auosfytr>Members Area</h1> <div class="divider" data-astro-cid-auosfytr></div> <div class="announcement-content" data-astro-cid-auosfytr> <h2 data-astro-cid-auosfytr>Latest Announcements</h2> <!-- This section can be replaced with Decap CMS content --> <div class="announcement" data-astro-cid-auosfytr> <h3 data-astro-cid-auosfytr>Upcoming Practice Schedule</h3> <p class="date" data-astro-cid-auosfytr>Posted: June 15, 2023</p> <p data-astro-cid-auosfytr>Halau classes are held on Sundays in Kahului. Please arrive 15 minutes early to prepare. Bring your pā'ū and water bottle.</p> </div> <div class="announcement" data-astro-cid-auosfytr> <h3 data-astro-cid-auosfytr>Ho'ike Performance Preparation</h3> <p class="date" data-astro-cid-auosfytr>Posted: June 10, 2023</p> <p data-astro-cid-auosfytr>Our annual Ho'ike is approaching. All haumāna should be practicing their assigned dances daily. Additional weekend rehearsals will be scheduled.</p> </div> </div> </div> </div> </section>    <section id="members-resources" data-astro-cid-auosfytr> <div class="cs-container" data-astro-cid-auosfytr> <h2 class="cs-title cinzel" data-astro-cid-auosfytr>Haumāna Resources</h2> <div class="divider" data-astro-cid-auosfytr></div> <div class="resources-grid" data-astro-cid-auosfytr> <div class="resource-card" data-astro-cid-auosfytr> <div class="resource-icon" data-astro-cid-auosfytr> <img src="/assets/images/lehua-removebg-preview.png" alt="Dues" data-astro-cid-auosfytr> </div> <h3 data-astro-cid-auosfytr>Dues Schedule</h3> <p data-astro-cid-auosfytr>View current dues schedule and make payments</p> <a href="#" class="resource-link" data-astro-cid-auosfytr>View Dues</a> </div> <div class="resource-card" data-astro-cid-auosfytr> <div class="resource-icon" data-astro-cid-auosfytr> <img src="/assets/images/lehua-removebg-preview.png" alt="Hula" data-astro-cid-auosfytr> </div> <h3 data-astro-cid-auosfytr>Hula Library</h3> <p data-astro-cid-auosfytr>Auana and Kahiko coreography videos</p> <a href="#" class="resource-link" data-astro-cid-auosfytr>Browse Library</a> </div> <div class="resource-card" data-astro-cid-auosfytr> <div class="resource-icon" data-astro-cid-auosfytr> <img src="/assets/images/lehua-removebg-preview.png" alt="Oli" data-astro-cid-auosfytr> </div> <h3 data-astro-cid-auosfytr>Oli</h3> <p data-astro-cid-auosfytr>Oli resources to learn and practice</p> <a href="#" class="resource-link" data-astro-cid-auosfytr>View Oli</a> </div> <div class="resource-card" data-astro-cid-auosfytr> <div class="resource-icon" data-astro-cid-auosfytr> <img src="/assets/images/lehua-removebg-preview.png" alt="Video" data-astro-cid-auosfytr> </div> <h3 data-astro-cid-auosfytr>Practice Videos</h3> <p data-astro-cid-auosfytr>Review class videos and practice at home</p> <a href="#" class="resource-link" data-astro-cid-auosfytr>Watch Videos</a> </div> </div> </div> </section> ` })}  ${renderScript($$result, "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/pages/members-page.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/pages/members-page.astro", void 0);

const $$file = "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/pages/members-page.astro";
const $$url = "/members-page";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$MembersPage,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
