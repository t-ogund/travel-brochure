AOS.init();

const hamburger = document.querySelector("#hamburger");
const dropdown = document.querySelector("#dropdown-container");
const dropdownNavContainer = document.querySelector("#dropdown-nav-container");

hamburger.addEventListener("click", () => {
  dropdown.classList.toggle("hide");
  dropdown.style.textAlign = "center";
  dropdownNavContainer.addEventListener("click", (e) => {
    console.log("IT WORKS!", e);
    dropdown.classList.add("hide");
  });
});
