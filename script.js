AOS.init();

// AOS.init({
//     easing: 'ease-out-back',
//     duration: 800,
//     delay: 300,
//     once: false,
//     disable: 'mobile'
//  });
const hamburger = document.querySelector("#hamburger");
const dropdown = document.querySelector("#dropdown-container");
const homeLinkMobile = document.querySelector("#home");
const aboutLinkMobile = document.querySelector("#about-us-container");
const attractionsMobile = document.querySelector("#attractions");
const latestPostsMobile = document.querySelector("#latest-posts");
const contactSectionMobile = document.querySelectorAll("#contact-section");
const dropdownNavContainer = document.querySelector("#dropdown-nav-container");

const screenWidth = window.innerWidth;
// if (screenWidth > 970) {
//     dropdown.style.display = "none";
// }

hamburger.addEventListener("click", () => {
    dropdown.classList.toggle("hide");
    // dropdown.style.display = "flex";
    // dropdown.classList.add("transition");
    dropdown.style.textAlign = "center";

    dropdownNavContainer.addEventListener("click", (e) => {
        console.log("IT WORKS!", e);
        dropdown.classList.add("hide");
    })
    
})

// dropdownNavContainer.addEventListener("click", (e) => {
//     if (e.target.tagName === "A") {
//         if (dropdownNavContainer.classList.contains("hide") === false) {
//             dropdownNavContainer.classList.add("hide");
//         }
//     }
// })
// if (screenWidth > 970) {
//     dropdown.style.backgroundColor = "red";
// }