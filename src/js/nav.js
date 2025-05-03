// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener("click", function () {
  CShamburgerMenu.classList.toggle("cs-active");
  CSnavbarMenu.classList.toggle("cs-active");
  CSbody.classList.toggle("cs-open");
  // run the function to check the aria-expanded value
  ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
  const csUL = document.querySelector("#cs-expanded");
  const csExpanded = csUL.getAttribute("aria-expanded");

  if (csExpanded === "false") {
    csUL.setAttribute("aria-expanded", "true");
  } else {
    csUL.setAttribute("aria-expanded", "false");
  }
}

// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll
// animations with the navbar

document.addEventListener("scroll", (e) => {
  const scroll = document.documentElement.scrollTop;
  if (scroll >= 100) {
    document.querySelector("body").classList.add("scroll");
  } else {
    document.querySelector("body").classList.remove("scroll");
  }
});

// mobile nav toggle code
const dropDowns = Array.from(
  document.querySelectorAll("#cs-navigation .cs-dropdown")
);
for (const item of dropDowns) {
  const onClick = () => {
    item.classList.toggle("cs-active");
  };
  item.addEventListener("click", onClick);
}

// Add this to your existing nav.js file
document.addEventListener('astro:page-load', () => {
  const CSnavbarMenu = document.querySelector("#cs-navigation");
  const quoteSection = document.querySelector("#quote-2141");
  
  // Function to handle scroll
  function handleScroll() {
    const quoteSectionBottom = quoteSection.getBoundingClientRect().bottom;
    
    // If the bottom of the quote section is at or above the top of the viewport
    if (quoteSectionBottom <= 0) {
      document.body.classList.add('scroll');
    } else {
      document.body.classList.remove('scroll');
    }
  }
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
  
  // Initial check
  handleScroll();
});

