import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DQNUgh71.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, l as landingImage, c as client } from '../chunks/BaseLayout_yM9ZZ0q_.mjs';
import { a as getImage } from '../chunks/_astro_assets_nyIWucjJ.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

async function getOptimizedImage(image) {
  const optimizedImage = await getImage({
    src: image,
    format: "webp",
  });

  return optimizedImage
}

// Learn more agout the getImage() function here
// https://docs.astro.build/en/guides/images/#generating-images-with-getimage

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const optimizedImage = await getOptimizedImage(landingImage);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About", "description": "Meta description for the page", "preloadedImage": optimizedImage, "data-astro-cid-uw5kdbxl": true }, { "default": async ($$result2) => renderTemplate`        ${maybeRenderHead()}<section id="cs-contact" data-astro-cid-uw5kdbxl> <div class="cs-container" data-astro-cid-uw5kdbxl> <form id="cs-form" name="Contact Form" method="post" data-astro-cid-uw5kdbxl> <div class="cs-content" data-astro-cid-uw5kdbxl> <span class="cs-topper" data-astro-cid-uw5kdbxl>Contact</span> <h2 class="cs-title" data-astro-cid-uw5kdbxl>Get in Touch</h2> <p class="cs-text" data-astro-cid-uw5kdbxl>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ridiculus
            elementum ullamcorper ipsum porttitor aliquam. Id magna urna
            ultrices odio pulvinar. Sed ut.
</p> </div> <label data-astro-cid-uw5kdbxl>
Name
<input required type="text" id="name" name="name" placeholder="Name" data-astro-cid-uw5kdbxl> </label> <label data-astro-cid-uw5kdbxl>
Email
<input required type="text" id="email" name="email" placeholder="Email" data-astro-cid-uw5kdbxl> </label> <label data-astro-cid-uw5kdbxl>
Phone
<input required type="text" id="phone" name="phone" placeholder="Phone" data-astro-cid-uw5kdbxl> </label> <label data-astro-cid-uw5kdbxl>
How Did You Find Us
<input type="text" id="find" name="find-us" placeholder="How did you find us?" data-astro-cid-uw5kdbxl> </label> <label class="cs-label-message" data-astro-cid-uw5kdbxl>
Message
<textarea required name="Message" id="message" placeholder="Write message..." data-astro-cid-uw5kdbxl></textarea> </label> <button class="cs-button-solid" type="submit" data-astro-cid-uw5kdbxl>Submit Message</button> </form> <div class="cs-right-section" data-astro-cid-uw5kdbxl> <!--Email--> <span class="cs-header" data-astro-cid-uw5kdbxl>Email</span> <a class="cs-link"${addAttribute(`mailto:${client.email}`, "href")} data-astro-cid-uw5kdbxl>${client.email}</a> <!--Phone--> <span class="cs-header" data-astro-cid-uw5kdbxl>Phone</span> <a class="cs-link"${addAttribute(`tel:${client.phoneForTel}`, "href")} data-astro-cid-uw5kdbxl>${client.phoneFormatted}</a> <!--Address--> <span class="cs-header" data-astro-cid-uw5kdbxl>Address</span> <a class="cs-link"${addAttribute(client.address.mapLink, "href")} data-astro-cid-uw5kdbxl> ${client.address.lineOne},
<br data-astro-cid-uw5kdbxl> ${client.address.lineTwo},
<br data-astro-cid-uw5kdbxl> <span class="cs-block" data-astro-cid-uw5kdbxl> ${client.address.city} ${client.address.state} ${client.address.zip} </span> </a> <!-- Background Image--> <picture class="cs-bg-picture" data-astro-cid-uw5kdbxl> <source media="(min-width: 601px)" srcset="/assets/images/coa1.jpg" data-astro-cid-uw5kdbxl> <img aria-hidden="true" decoding="async" src="/assets/images/coa1.jpg" alt="building" loading="lazy" width="2500" height="1667" data-astro-cid-uw5kdbxl> </picture> </div> </div> </section> ` })} `;
}, "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/pages/contact.astro", void 0);

const $$file = "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
