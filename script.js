AOS.init();

const hamburger = document.querySelector("#hamburger");
const dropdown = document.querySelector("#dropdown-container");
const dropdownNavContainer = document.querySelector("#dropdown-nav-container");

const attractions = document.querySelector("#attractions");
const latestPosts = document.querySelector("#latest-posts");

// attractions.scrollIntoView({
//   behavior: 'smooth', // smooth scroll
//   block: 'start' // the upper border of the element will be aligned at the top of the visible part of the window of the scrollable area.
// })

// latestPosts.scrollIntoView({
//   behavior: 'smooth', // smooth scroll
//   block: 'start' // the upper border of the element will be aligned at the top of the visible part of the window of the scrollable area.
// })


hamburger.addEventListener("click", () => {
  dropdown.classList.toggle("hide");
  dropdown.style.textAlign = "center";
  dropdownNavContainer.addEventListener("click", (e) => {
    dropdown.classList.add("hide");
  });
});
