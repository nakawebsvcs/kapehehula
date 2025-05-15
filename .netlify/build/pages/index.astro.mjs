import { h as createAstro, c as createComponent, m as maybeRenderHead, l as renderScript, a as renderTemplate, r as renderComponent, b as addAttribute } from '../chunks/astro/server_DQNUgh71.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_yM9ZZ0q_.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://www.kapehehula.com");
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Carousel;
  return renderTemplate`<!-- Bootstrap Carousel Component -->${maybeRenderHead()}<section class="carousel-section" id="classes" data-astro-cid-wfe7xcno> <div class="text-center py-3 mt-5 mb-5" data-astro-cid-wfe7xcno> <h2 class="cs-title cinzel" data-astro-cid-wfe7xcno>Want to learn Hula?</h2> </div> <div id="imageCarousel" class="carousel slide" data-bs-ride="carousel" data-astro-cid-wfe7xcno> <!-- Indicators/dots --> <div class="carousel-indicators" data-astro-cid-wfe7xcno> <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" data-astro-cid-wfe7xcno></button> <button type="button" data-bs-target="#imageCarousel" data-bs-slide-to="1" aria-label="Slide 2" data-astro-cid-wfe7xcno></button> </div> <!-- The slideshow/carousel with your specified images --> <div class="carousel-inner" data-astro-cid-wfe7xcno> <div class="carousel-item active" data-astro-cid-wfe7xcno> <img src="/assets/images/kukuipuka-1.jpg" class="d-block w-100" alt="First slide" data-astro-cid-wfe7xcno> </div> <div class="carousel-item" data-astro-cid-wfe7xcno> <img src="/assets/images/kukuipuka-2.jpg" class="d-block w-100" alt="Second slide" data-astro-cid-wfe7xcno> </div> </div> <!-- Left and right controls/icons --> <button class="carousel-control-prev" type="button" data-bs-target="#imageCarousel" data-bs-slide="prev" data-astro-cid-wfe7xcno> <span class="carousel-control-prev-icon" aria-hidden="true" data-astro-cid-wfe7xcno></span> <span class="visually-hidden" data-astro-cid-wfe7xcno>Previous</span> </button> <button class="carousel-control-next" type="button" data-bs-target="#imageCarousel" data-bs-slide="next" data-astro-cid-wfe7xcno> <span class="carousel-control-next-icon" aria-hidden="true" data-astro-cid-wfe7xcno></span> <span class="visually-hidden" data-astro-cid-wfe7xcno>Next</span> </button> </div> <div class="col-sm-8 text-center" style="width: 100%; padding: 20px 40px;" data-astro-cid-wfe7xcno> <p style="max-width: 960px; margin: 3rem auto;" data-astro-cid-wfe7xcno>Classes are available from beginner to experienced. Located in Kahului, our Halau offers weekly classes in the styles of Kahiko and Auana. We hope you will join us!</p> </div> <div class="container text-center" data-astro-cid-wfe7xcno> <img class="lehua-div" src="/assets/images/lehua-removebg-preview.png" data-astro-cid-wfe7xcno> <h1 class="cinzel mt-4" data-astro-cid-wfe7xcno>"I mohala no ke lehua i ke ke\`ekehi \`ia e ka ua."</h1> <p class="mt-3" data-astro-cid-wfe7xcno><em data-astro-cid-wfe7xcno>Translation: The Lehua blossom unfolds when the rains tread it.<br data-astro-cid-wfe7xcno>
Explanation: People respond better to gentle words than to scoldings.</em></p></div> <div class="text-center mt-4 register" data-astro-cid-wfe7xcno> <a class="cs-button-image mt-4" href="https://docs.google.com/forms/d/e/1FAIpQLSfCd_hBIUYni5AiFq9AGUvtzn0Y79q0854gDARJYW-NvXXGgA/viewform" target="_blank" data-astro-cid-wfe7xcno>
Register for Classes
</a> </div> </section> <!-- Add Bootstrap CSS and JS via CDN in the component --> <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"> ${renderScript($$result, "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/components/Carousel.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/components/Carousel.astro", void 0);

const $$Astro = createAstro("https://www.kapehehula.com");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${maybeRenderHead()}<section id="about" style="padding: var(--sectionPadding);" data-astro-cid-v2cbyr3p> <div class="container" data-astro-cid-v2cbyr3p> <!-- About Section Heading--> <h2 class="cs-title text-center cinzel animate-on-scroll fade-in" data-astro-cid-v2cbyr3p>About</h2> <!-- About Section Images--> <div class="about-images animate-on-scroll fade-in" style="--delay: 0.2s;" data-astro-cid-v2cbyr3p> <div class="about-image-container" data-astro-cid-v2cbyr3p> <img src="/assets/images/IMG_3410.JPG" class="about-image" alt="Hula image" data-astro-cid-v2cbyr3p> </div> <div class="about-image-container" data-astro-cid-v2cbyr3p> <img src="/assets/images/kumu-drum2.jpg" class="about-image" alt="Kumu with drum" data-astro-cid-v2cbyr3p> </div> <div class="about-image-container" data-astro-cid-v2cbyr3p> <img src="/assets/images/IMG_2431.JPG" class="about-image" alt="Hula performance" data-astro-cid-v2cbyr3p> </div> </div> <!-- About Section Content--> <div class="about-content" data-astro-cid-v2cbyr3p> <div class="about-text-container animate-on-scroll fade-in" style="--delay: 0.4s;" data-astro-cid-v2cbyr3p> <p class="cs-text" data-astro-cid-v2cbyr3p><span class="allura" style="color:var(--primary)" data-astro-cid-v2cbyr3p>Kumu Hula Mapuana Samonte-Nowak</span> was born and raised in Lahaina, Maui, Hawaii. She was formally trained by Kumu Hula Emma Farden-Sharpe of Lahaina, Maui from the tender age of 3.
                As a child, she spent much time with her grandmother, Helen Kapehe Kuʻuleialoha Ching, who inspired her to perpetuate Hawaiian culture and hula. In her honor and memory she named Halau Hula Malani O Kapehe.<br data-astro-cid-v2cbyr3p><br data-astro-cid-v2cbyr3p>
Kumu believes that preserving Hawaiian culture of the past and integrating modern methods of dance, ensures a living tradition of Hula.
                Kumu and her family are committed to keep the Hawaiian culture alive. Her extensive Hula genealogy bring extensive tradition and knowledge for future generations to preserve and perpetuate Hawaiian Culture through halau.</p> <div class="text-center" data-astro-cid-v2cbyr3p> <img class="lehua-div" src="/assets/images/lehua-removebg-preview.png" alt="Lehua flower divider" data-astro-cid-v2cbyr3p> </div>  <!-- At the end of your About.astro file --> ${renderScript($$result, "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/components/About.astro?astro&type=script&index=0&lang.ts")}</div></div></div></section>`;
}, "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/components/About.astro", void 0);

const $$Alakai = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="alakai" style="padding: var(--sectionPadding);" data-astro-cid-6ijn35ch> <div class="container" data-astro-cid-6ijn35ch> <!-- Alaka'i Section Heading --> <h2 class="cs-title text-center cinzel" data-astro-cid-6ijn35ch>Alakaʻi</h2> <div class="alakai-profiles" data-astro-cid-6ijn35ch> <div class="alakai-profile" data-astro-cid-6ijn35ch> <div class="profile-card" data-astro-cid-6ijn35ch> <img src="/assets/images/cheryl.png" class="profile-image" alt="Cheryl Dang" data-astro-cid-6ijn35ch> <h2 class="profile-name cinzel" data-astro-cid-6ijn35ch>Cheryl Dang</h2> <p class="cs-text" data-astro-cid-6ijn35ch>
As Alakaʻi for Halau Hula Malani O Kapehe, my passion for hula is able to grow. I began dancing hula in 2002 with Kumu Mapuana Samonte and also briefly with Kumu Keli\`i Taua. Through every challenge and inspiration that comes with growth, I aspire to share my love of hula, oli, Hawaiian culture and values in the same manner that was taught to me... with compassion and aloha.
</p> </div> </div> <div class="alakai-profile" data-astro-cid-6ijn35ch> <div class="profile-card" data-astro-cid-6ijn35ch> <img src="/assets/images/kaimana.png" class="profile-image" alt="Kaimana Nakamura" data-astro-cid-6ijn35ch> <h2 class="profile-name cinzel" data-astro-cid-6ijn35ch>Kaimana Nakamura</h2> <p class="cs-text" data-astro-cid-6ijn35ch>
I have been with Halau Hula Malani O Kapehe for over 20 years along with my daughter Kira. I assist Kumu with registration of new students and Halau communications. Kumu gives so much more than the steps to a dance, she shares and teaches us to explore the deeper meaning of mele allowing an exploration of its history and deeper meaning. Halau enriches our lives and guides us to seek the values and teachings of Hawaiian Culture. Hula is a way of life, a way of celebrating a culture, rich in wisdom, humbleness, and appreciation of the land and the sacred breath of Life ~ Aloha.
</p> </div> </div> </div> </div> </section> `;
}, "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/components/Alakai.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="contact-section" data-astro-cid-xmivup5a> <div class="contact-wrapper" data-astro-cid-xmivup5a> <div class="contact-content" data-astro-cid-xmivup5a> <h2 class="cinzel" data-astro-cid-xmivup5a>Contact Us</h2> <p style="color: var(--primary); font-size: 1.8rem;" data-astro-cid-xmivup5a>Halau Hula Malani O Kapehe</p> <address data-astro-cid-xmivup5a>
PO Box 977<br data-astro-cid-xmivup5a>
Kihei, HI 96753
</address> <a href="tel:+18082814741" data-astro-cid-xmivup5a>Tel: 808-281-4741</a> </div> </div> </section> <section class="info-section" data-astro-cid-xmivup5a> <div class="info-wrapper" data-astro-cid-xmivup5a> <div class="info-column" data-astro-cid-xmivup5a> <div class="column-content" data-astro-cid-xmivup5a> <h3 class="cinzel" data-astro-cid-xmivup5a>Halau History</h3> <p data-astro-cid-xmivup5a>
Hālau Hula Malani O Kapehe was formed in 2001 and operated as a Maui County Community class for 9 years as Manutea. 
          In 2010 Kumu renamed the Halau in honor of her Kupuna and moved from a Maui County Community class to a private, 
          traditional Halau in order to advance the teaching of Hula and Hawaiian culture to a growing number of advanced 
          students and alakaʻi.
</p> </div> </div> <div class="info-column" data-astro-cid-xmivup5a> <div class="column-content" data-astro-cid-xmivup5a> <h3 class="cinzel" data-astro-cid-xmivup5a>Current Class Schedule</h3> <p data-astro-cid-xmivup5a>Classes are held at the Hale Mahaolu Elima<br data-astro-cid-xmivup5a>community hall:</p> <address data-astro-cid-xmivup5a>11 Mahaolu St., Kahului, Maui, Hawaii</address> <p data-astro-cid-xmivup5a>Classes take place on Sunday afternoons<br data-astro-cid-xmivup5a> <span class="class-time" data-astro-cid-xmivup5a>3:30pm - 4:30pm</span> </p> </div> </div> </div> </section> `;
}, "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/components/Contact.astro", void 0);

const homePhoto = new Proxy({"src":"/_astro/home-photo.COg3Ij0L.jpg","width":2042,"height":880,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/assets/images/home-photo.jpg";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const optimizedImage = { src: homePhoto.src };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "H\u0101lau Hula Malani O Kapehe", "description": "Under the direction of Kumu Hula Mapuana Samonte-Nowak, H\u0101lau Hula Malani O Kapehe strives to share the love of Hula and Hawaiian traditions as inspired and preserved by our Kupuna.", "preloadedImage": optimizedImage, "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate`    ${maybeRenderHead()}<section id="hero" data-astro-cid-j7pv25f6> <div class="cs-container" data-astro-cid-j7pv25f6></div> <!-- Background Image --> <picture class="cs-picture" data-astro-cid-j7pv25f6> <source media="(max-width: 600px)" srcset="/assets/images/home-photo.jpg" data-astro-cid-j7pv25f6> <source media="(min-width: 601px)" srcset="/assets/images/home-photo.jpg" data-astro-cid-j7pv25f6> <img aria-hidden="true" decoding="async"${addAttribute(optimizedImage.src, "src")} alt="kapehe hula haumana" width="2500" height="1667" loading="eager" data-astro-cid-j7pv25f6> </picture> </section>    <section id="content-1450" data-astro-cid-j7pv25f6> <div class="cs-container" data-astro-cid-j7pv25f6> <div class="cs-content" data-astro-cid-j7pv25f6> <p class="cs-text" data-astro-cid-j7pv25f6>
Under the direction of <span class="allura" data-astro-cid-j7pv25f6>Kumu Hula Mapuana Samonte-Nowak,</span> Hālau Hula Malani O Kapehe strives to share the love of Hula and Hawaiian traditions as inspired and preserved by our Kupuna. We do so by teaching from the heart, ensuring this knowledge carries forward to future generations.
</p> <div class="divider" data-astro-cid-j7pv25f6></div> <h2 class="cs-title cinzel" data-astro-cid-j7pv25f6>"I ulu no ka lala i ke kumu"</h2> </div> </div> </section>    <section id="announcement" data-astro-cid-j7pv25f6> <div class="cs-container" data-astro-cid-j7pv25f6> <div class="cs-content" data-astro-cid-j7pv25f6> <p class="cs-text" data-astro-cid-j7pv25f6>
Halau classes are held on Sundays in Kahului. We are currently not accepting new students. If you are interested in classes, you may submit an online registration form below to be added to our waitlist.
</p> </div> </div> </section> ${renderComponent($$result2, "Carousel", $$Carousel, { "data-astro-cid-j7pv25f6": true })}    <section id="sbsr-2273" data-astro-cid-j7pv25f6> <div class="cs-container" data-astro-cid-j7pv25f6> <div class="cs-image-group animate-on-scroll slide-in-left" data-astro-cid-j7pv25f6> <picture class="cs-picture" data-astro-cid-j7pv25f6> <!--Mobile Image--> <source media="(max-width: 600px)" srcset="/assets/images/westin2.jpg" data-astro-cid-j7pv25f6> <!--Tablet and above Image--> <source media="(min-width: 601px)" srcset="/assets/images/westin2.jpg" data-astro-cid-j7pv25f6> <img loading="lazy" decoding="async" src="/assets/images/westin2.jpg" alt="westin event" width="243" height="367" data-astro-cid-j7pv25f6> </picture> </div> <div class="cs-content animate-on-scroll slide-in-right" data-astro-cid-j7pv25f6> <h2 class="cs-title cinzel" data-astro-cid-j7pv25f6>Event Requests</h2> <p class="cs-text" data-astro-cid-j7pv25f6>Halau Hula Malani O Kapehe is available for weddings, conventions, and other special events.<br data-astro-cid-j7pv25f6><br data-astro-cid-j7pv25f6>Inquire about special occasion performances below.</p> <!-- <ul class="cs-card-group">
                <li class="cs-item">
                    <picture class="cs-icon-wrapper">
                        <img class="cs-icon" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/wedding-thumb.svg" alt="icon" width="32" height="32">
                    </picture>
                    <div class="cs-flex">
                        <h3 class="cs-h3">Experience & Expertise</h3>
                        <p class="cs-item-text">We have courses on-demand and live instructors for workshops and support.</p>
                    </div>
                </li>
                <li class="cs-item">
                    <picture class="cs-icon-wrapper">
                        <img class="cs-icon" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/wedding-lightbulb.svg" alt="icon" width="72" height="72">
                    </picture>
                    <div class="cs-flex">
                        <h3 class="cs-h3">Creative Approach</h3>
                        <p class="cs-item-text">We have courses on-demand and live instructors for workshops and support.</p>
                    </div>
                </li>
                <li class="cs-item">
                    <picture class="cs-icon-wrapper">
                        <img class="cs-icon" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/wedding-sun.svg" alt="icon" width="72" height="72">
                    </picture>
                    <div class="cs-flex">
                        <h3 class="cs-h3">Flexibility & Customisation</h3>
                        <p class="cs-item-text">We have courses on-demand and live instructors for workshops and support.</p>
                    </div>
                </li>
                <li class="cs-item">
                    <picture class="cs-icon-wrapper">
                        <img class="cs-icon" loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/MISC/wedding-headphone.svg" alt="icon" width="72" height="72">
                    </picture>
                    <div class="cs-flex">
                        <h3 class="cs-h3">24/7 Premium Support</h3>
                        <p class="cs-item-text">We have courses on-demand and live instructors for workshops and support.</p>
                    </div>
                </li>
            </ul> --> <a href="mailto:mapuanas@gmail.com" class="cs-button-image" data-astro-cid-j7pv25f6>Contact</a> </div> </div> </section> ${renderComponent($$result2, "About", $$About, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Alakai", $$Alakai, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Contact", $$Contact, { "data-astro-cid-j7pv25f6": true })} ` })}  ${renderScript($$result, "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/pages/index.astro", void 0);

const $$file = "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
