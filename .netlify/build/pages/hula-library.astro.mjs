import { h as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_DQNUgh71.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_yM9ZZ0q_.mjs';
/* empty css                                        */
export { renderers } from '../renderers.mjs';

const auana = [
	{
		id: "song-of-old-hawaii",
		title: "A Song of Old Hawai'i & The One They Call Hawai'i",
		description: "A nostalgic song about changes to one's homeland",
		category: "Auana",
		vimeoId: "414114234/dbd2d9477c",
		lyrics: {
			"By Andy Williams": [
				"There's the perfume of a million flowers",
				"Clinging to the heart of old Hawai'i",
				"There's a rainbow following the showers",
				"Bringing me a part of old Hawai'i",
				"There's a silver moon",
				"A symphony of stars",
				"There's a hula tune",
				"And the hum of soft guitars",
				"There's the tradewind",
				"Sighing in the heavens",
				"Singing me",
				"A song of old Hawai'i"
			],
			"By Loeka Longakit": [
				"If I could be the ocean",
				"Embracing all the land",
				"If I could be the sunlight",
				"That dries up all the sand",
				"If I could be the lava",
				"That flows to the sea",
				"Then I would be the one they call Hawaii",
				"Hawaii, Hawaii",
				"If I could play the guitar",
				"I'd play Hawaiian songs",
				"If I could do the hula",
				"I'd do it all day long",
				"If I could be a koa canoe",
				"I would float myself to sea",
				"I guess I'd be the one they call Hawaii",
				"Hawaii, Hawaii",
				"If I could be the flowers",
				"I'd turn into a lei",
				"If I could be a rainbow",
				"I'd make a…"
			]
		}
	},
	{
		id: "blue-hawaii",
		title: "Blue Hawai'i",
		description: "A nostalgic song about changes to one's homeland",
		category: "Auana",
		vimeoId: "59962382/dbd2d9477c",
		authors: "Leo Robin and Ralph Rainger",
		lyrics: {
			english: [
				"Perfume in the air and rare flowers everywhere",
				"And white shadows we could share at Waikīkī",
				"A sky full of stars and soft far away guitars",
				"It seems to be only a reverie",
				"Night and you and blue Hawaiʻi",
				"The night is heavenly",
				"And you are heaven to me",
				"Lovely you and blue Hawaiʻi",
				"With all this loveliness",
				"There should be love",
				"Come with me while the moon is on the sea",
				"The night is young and so are we",
				"Dreams come true in blue Hawaiʻi",
				"And mine could all come true",
				"This magic night of nights with you"
			]
		}
	}
];

const fallbackImage = new Proxy({"src":"/_astro/coa1.B-eYx4wo.jpg","width":2048,"height":1536,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/assets/images/coa1.jpg";
							}
							
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://www.kapehehula.com");
const $$HulaLibrary = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HulaLibrary;
  const isLoggedIn = Astro2.cookies.has("sb-access-token");
  if (!isLoggedIn) {
    return Astro2.redirect("/");
  }
  const heroImage = { src: fallbackImage.src };
  const hulaVideos = auana;
  hulaVideos.sort((a, b) => a.title.localeCompare(b.title));
  const videosByLetter = hulaVideos.reduce((acc, video) => {
    const firstLetter = video.title.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(video);
    return acc;
  }, {});
  const letters = Object.keys(videosByLetter).sort();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Hula Library | H\u0101lau Hula Malani O Kapehe", "description": "Browse our collection of hula videos, lyrics, and translations for haum\u0101na of H\u0101lau Hula Malani O Kapehe.", "preloadedImage": heroImage, "data-astro-cid-i7j6aqgw": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<section id="library-hero" data-astro-cid-i7j6aqgw> <div class="hero-overlay" data-astro-cid-i7j6aqgw></div> <div class="hero-content" data-astro-cid-i7j6aqgw> <h1 class="cinzel" data-astro-cid-i7j6aqgw>Hula Library</h1> <div class="divider" data-astro-cid-i7j6aqgw></div> <p class="hero-description" data-astro-cid-i7j6aqgw>\nAccess our collection of hula videos, lyrics, and translations for practice and study.\n</p> </div> </section> <section id="library-content" data-astro-cid-i7j6aqgw> <div class="cs-container" data-astro-cid-i7j6aqgw> <!-- Left Column: Video Index --> <div class="library-index" data-astro-cid-i7j6aqgw> <div class="alphabet-index" data-astro-cid-i7j6aqgw> ', ' </div> <div class="search-container" data-astro-cid-i7j6aqgw> <input type="text" id="video-search" placeholder="Search by title or description..." class="search-input" data-astro-cid-i7j6aqgw> </div> <div class="filter-container" data-astro-cid-i7j6aqgw> <button class="filter-btn active" data-filter="all" data-astro-cid-i7j6aqgw>All</button> <button class="filter-btn" data-filter="Kahiko" data-astro-cid-i7j6aqgw>Kahiko</button> <button class="filter-btn" data-filter="Auana" data-astro-cid-i7j6aqgw>Auana</button> </div> <div class="videos-container" data-astro-cid-i7j6aqgw> ', ' </div> </div> <!-- Right Column: Video Display --> <div id="video-display" class="video-display" data-astro-cid-i7j6aqgw> <div class="video-placeholder" data-astro-cid-i7j6aqgw> <div class="placeholder-icon" data-astro-cid-i7j6aqgw>\u25B6</div> <p data-astro-cid-i7j6aqgw>Select a video from the library to view</p> </div> ', ` </div> </div> </section> <script>
    // Wait for DOM to be fully loaded and processed by Astro
    document.addEventListener('astro:page-load', () => {
      // Add a small timeout to ensure everything is rendered
      setTimeout(() => {
        // Get all video items and video content elements
        const videoItems = document.querySelectorAll('.video-item');
        const videoContents = document.querySelectorAll('.video-content');
        const videoPlaceholder = document.querySelector('.video-placeholder');
        
        console.log('Found video items:', videoItems.length);
        console.log('Found video contents:', videoContents.length);
        
        // Search functionality
        const searchInput = document.getElementById('video-search');
        
        if (searchInput) {
          searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            videoItems.forEach(item => {
              const title = item.querySelector('.video-title').textContent.toLowerCase();
              const description = item.querySelector('.video-description')?.textContent.toLowerCase() || '';
              
              if (title.includes(searchTerm) || description.includes(searchTerm)) {
                item.style.display = '';
              } else {
                item.style.display = 'none';
              }
            });
            
            // Show/hide letter sections based on visible items
            document.querySelectorAll('.letter-section').forEach(section => {
              const visibleItems = section.querySelectorAll('.video-item[style=""]').length;
              section.style.display = visibleItems > 0 ? '' : 'none';
            });
          });
        }
        
        // Filter functionality
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
          button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Show/hide videos based on filter
            videoItems.forEach(item => {
              if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = '';
              } else {
                item.style.display = 'none';
              }
            });
            
            // Show/hide letter sections based on visible items
            document.querySelectorAll('.letter-section').forEach(section => {
              const visibleItems = section.querySelectorAll('.video-item[style=""]').length;
              section.style.display = visibleItems > 0 ? '' : 'none';
            });
          });
        });
        
        // Video selection functionality
        videoItems.forEach(item => {
          item.addEventListener('click', function() {
            console.log('Video item clicked');
            
            // Remove active class from all items
            videoItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Get the video ID
            const videoId = this.getAttribute('data-video-id');
            console.log('Video ID:', videoId);
            
            // Hide placeholder
            if (videoPlaceholder) {
              videoPlaceholder.style.display = 'none';
            }
            
            // Hide all video contents
            videoContents.forEach(content => {
              content.style.display = 'none';
            });
            
            // Show the selected video content
            const selectedContent = document.getElementById(\`video-content-\${videoId}\`);
            console.log('Selected content element:', selectedContent);
            
            if (selectedContent) {
              selectedContent.style.display = 'block';
              
              // Scroll to video display on mobile
              if (window.innerWidth <= 1024) {
                document.getElementById('video-display').scrollIntoView({
                  behavior: 'smooth'
                });
              }
            } else {
              console.error('Could not find content element for video ID:', videoId);
              // For debugging, list all content IDs
              console.log('Available content IDs:');
              videoContents.forEach(content => {
                console.log(content.id);
              });
            }
          });
        });
        
        // Smooth scrolling for alphabet links
        document.querySelectorAll('.letter-link').forEach(link => {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: 'smooth'
              });
            }
          });
        });
      }, 100); // Small timeout to ensure DOM is ready
    });
  <\/script> `], [" ", '<section id="library-hero" data-astro-cid-i7j6aqgw> <div class="hero-overlay" data-astro-cid-i7j6aqgw></div> <div class="hero-content" data-astro-cid-i7j6aqgw> <h1 class="cinzel" data-astro-cid-i7j6aqgw>Hula Library</h1> <div class="divider" data-astro-cid-i7j6aqgw></div> <p class="hero-description" data-astro-cid-i7j6aqgw>\nAccess our collection of hula videos, lyrics, and translations for practice and study.\n</p> </div> </section> <section id="library-content" data-astro-cid-i7j6aqgw> <div class="cs-container" data-astro-cid-i7j6aqgw> <!-- Left Column: Video Index --> <div class="library-index" data-astro-cid-i7j6aqgw> <div class="alphabet-index" data-astro-cid-i7j6aqgw> ', ' </div> <div class="search-container" data-astro-cid-i7j6aqgw> <input type="text" id="video-search" placeholder="Search by title or description..." class="search-input" data-astro-cid-i7j6aqgw> </div> <div class="filter-container" data-astro-cid-i7j6aqgw> <button class="filter-btn active" data-filter="all" data-astro-cid-i7j6aqgw>All</button> <button class="filter-btn" data-filter="Kahiko" data-astro-cid-i7j6aqgw>Kahiko</button> <button class="filter-btn" data-filter="Auana" data-astro-cid-i7j6aqgw>Auana</button> </div> <div class="videos-container" data-astro-cid-i7j6aqgw> ', ' </div> </div> <!-- Right Column: Video Display --> <div id="video-display" class="video-display" data-astro-cid-i7j6aqgw> <div class="video-placeholder" data-astro-cid-i7j6aqgw> <div class="placeholder-icon" data-astro-cid-i7j6aqgw>\u25B6</div> <p data-astro-cid-i7j6aqgw>Select a video from the library to view</p> </div> ', ` </div> </div> </section> <script>
    // Wait for DOM to be fully loaded and processed by Astro
    document.addEventListener('astro:page-load', () => {
      // Add a small timeout to ensure everything is rendered
      setTimeout(() => {
        // Get all video items and video content elements
        const videoItems = document.querySelectorAll('.video-item');
        const videoContents = document.querySelectorAll('.video-content');
        const videoPlaceholder = document.querySelector('.video-placeholder');
        
        console.log('Found video items:', videoItems.length);
        console.log('Found video contents:', videoContents.length);
        
        // Search functionality
        const searchInput = document.getElementById('video-search');
        
        if (searchInput) {
          searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            
            videoItems.forEach(item => {
              const title = item.querySelector('.video-title').textContent.toLowerCase();
              const description = item.querySelector('.video-description')?.textContent.toLowerCase() || '';
              
              if (title.includes(searchTerm) || description.includes(searchTerm)) {
                item.style.display = '';
              } else {
                item.style.display = 'none';
              }
            });
            
            // Show/hide letter sections based on visible items
            document.querySelectorAll('.letter-section').forEach(section => {
              const visibleItems = section.querySelectorAll('.video-item[style=""]').length;
              section.style.display = visibleItems > 0 ? '' : 'none';
            });
          });
        }
        
        // Filter functionality
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
          button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Show/hide videos based on filter
            videoItems.forEach(item => {
              if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = '';
              } else {
                item.style.display = 'none';
              }
            });
            
            // Show/hide letter sections based on visible items
            document.querySelectorAll('.letter-section').forEach(section => {
              const visibleItems = section.querySelectorAll('.video-item[style=""]').length;
              section.style.display = visibleItems > 0 ? '' : 'none';
            });
          });
        });
        
        // Video selection functionality
        videoItems.forEach(item => {
          item.addEventListener('click', function() {
            console.log('Video item clicked');
            
            // Remove active class from all items
            videoItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Get the video ID
            const videoId = this.getAttribute('data-video-id');
            console.log('Video ID:', videoId);
            
            // Hide placeholder
            if (videoPlaceholder) {
              videoPlaceholder.style.display = 'none';
            }
            
            // Hide all video contents
            videoContents.forEach(content => {
              content.style.display = 'none';
            });
            
            // Show the selected video content
            const selectedContent = document.getElementById(\\\`video-content-\\\${videoId}\\\`);
            console.log('Selected content element:', selectedContent);
            
            if (selectedContent) {
              selectedContent.style.display = 'block';
              
              // Scroll to video display on mobile
              if (window.innerWidth <= 1024) {
                document.getElementById('video-display').scrollIntoView({
                  behavior: 'smooth'
                });
              }
            } else {
              console.error('Could not find content element for video ID:', videoId);
              // For debugging, list all content IDs
              console.log('Available content IDs:');
              videoContents.forEach(content => {
                console.log(content.id);
              });
            }
          });
        });
        
        // Smooth scrolling for alphabet links
        document.querySelectorAll('.letter-link').forEach(link => {
          link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
              targetElement.scrollIntoView({
                behavior: 'smooth'
              });
            }
          });
        });
      }, 100); // Small timeout to ensure DOM is ready
    });
  <\/script> `])), maybeRenderHead(), letters.map((letter) => renderTemplate`<a${addAttribute(`#letter-${letter}`, "href")} class="letter-link" data-astro-cid-i7j6aqgw>${letter}</a>`), letters.map((letter) => renderTemplate`<div${addAttribute(`letter-${letter}`, "id")} class="letter-section" data-astro-cid-i7j6aqgw> <h2 class="letter-heading" data-astro-cid-i7j6aqgw>${letter}</h2> <div class="video-list" data-astro-cid-i7j6aqgw> ${videosByLetter[letter].map((video) => renderTemplate`<div class="video-item"${addAttribute(video.category, "data-category")}${addAttribute(video.id, "data-video-id")} data-astro-cid-i7j6aqgw> <h3 class="video-title" data-astro-cid-i7j6aqgw>${video.title}</h3> <span class="video-category" data-astro-cid-i7j6aqgw>${video.category}</span> ${video.description && renderTemplate`<p class="video-description" data-astro-cid-i7j6aqgw>${video.description}</p>`} </div>`)} </div> </div>`), hulaVideos.map((video) => renderTemplate`<div${addAttribute(`video-content-${video.id}`, "id")} class="video-content" style="display: none;" data-astro-cid-i7j6aqgw> <h2 class="video-display-title" data-astro-cid-i7j6aqgw>${video.title}</h2> <div class="video-display-category" data-astro-cid-i7j6aqgw>${video.category}</div>  <div class="video-player-container" data-astro-cid-i7j6aqgw> ${(() => {
    `https://vimeo.com/${video.vimeoId}`;
    return renderTemplate`<iframe${addAttribute(`https://player.vimeo.com/video/${video.vimeoId.split("/")[0]}?h=${video.vimeoId.split("/")[1]}`, "src")} width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen${addAttribute(video.title, "title")} class="video-iframe" referrerpolicy="strict-origin-when-cross-origin" data-astro-cid-i7j6aqgw></iframe>`;
  })()} </div> <div class="video-details" data-astro-cid-i7j6aqgw>  ${video.notes && renderTemplate`<div class="video-notes" data-astro-cid-i7j6aqgw> <h3 data-astro-cid-i7j6aqgw>Notes</h3> <p data-astro-cid-i7j6aqgw>${video.notes}</p> </div>`}  ${video.lyrics && Object.keys(video.lyrics).length > 0 && renderTemplate`<div class="video-lyrics" data-astro-cid-i7j6aqgw> <h3 data-astro-cid-i7j6aqgw>Lyrics</h3> <div class="lyrics-columns" data-astro-cid-i7j6aqgw> ${Object.entries(video.lyrics).map(([section, lines]) => renderTemplate`<div class="lyrics-column" data-astro-cid-i7j6aqgw> <h4 data-astro-cid-i7j6aqgw>${section}</h4> ${Array.isArray(lines) ? lines.map((line) => renderTemplate`<p data-astro-cid-i7j6aqgw>${line}</p>`) : renderTemplate`<p data-astro-cid-i7j6aqgw>${lines}</p>`} </div>`)} </div> </div>`} </div> </div>`)) })} `;
}, "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/pages/hula-library.astro", void 0);

const $$file = "/Users/jessinaka/Desktop/Coding Projects/kapehe-hula/src/pages/hula-library.astro";
const $$url = "/hula-library";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$HulaLibrary,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
