import { recipes } from "../recipes.js";
document.querySelector(".select-utensils-btn").addEventListener("click", () => {
  openUstensilsDrawer();
});

// function openUstensilsDrawer() {
//   const ingredientsDrawer = document.querySelector("#ingredients-drawer");
//   const appliancesDrawer = document.querySelector("#appliances-drawer");
//   const ustensilsDrawer = document.querySelector("#ustensils-drawer");
//   const ingredientsButton = document.querySelector(".select-ingredients-btn");
//   const appliancesButton = document.querySelector(".select-appliance-btn");
//   const ustensilsButton = document.querySelector(".select-utensils-btn");
//   ustensilsDrawer.style.display = "block";
//   ustensilsButton.style.display = "none";
//   ingredientsDrawer.style.display = "none";
//   appliancesDrawer.style.display = "none";
//   ingredientsButton.style.display = "block";
//   appliancesButton.style.display = "block";
// }

function displayData() {
  ustensilsDrawer(recipes);
}
displayData();

function ustensilsDrawer(recipes) {
  let ustensils = recipes.flatMap((recipe) => recipe.ustensils);
  let uniqueUstensils = Array.from(new Set(ustensils));

  let ustensilsDrawer = document.querySelector("#ustensils-drawer");
  // ustensilsDrawer.style.display = "none";

  let ustensilsContainer = document.createElement("div");
  ustensilsContainer.className = "ustensils-drawer-container";

  let searchUstensilsContainer = document.createElement("div");
  searchUstensilsContainer.className = "search-ustensils-container";
  let searchUstensilsInput = document.createElement("input");
  searchUstensilsInput.placeholder = "Rechercher un ustensile";
  searchUstensilsInput.className = "ustensils-drawer-search";
  let arrowSearch = document.createElement("span");
  arrowSearch.className = "fa-solid fa-chevron-up";

  searchUstensilsContainer.appendChild(searchUstensilsInput);
  searchUstensilsContainer.appendChild(arrowSearch);

  let ustensilWrapper = document.createElement("div");
  ustensilWrapper.className = "drawer-ustensil-wrapper";

  ustensilsContainer.appendChild(searchUstensilsContainer);
  ustensilsContainer.appendChild(ustensilWrapper);

  for (let ustensil of uniqueUstensils) {
    let ustensilContainer = document.createElement("div");
    ustensilContainer.className = "drawer-ustensil-container";
    let ustensilContent = document.createElement("p");
    ustensilContent.className = "drawer-ustensil-content";
    ustensilContent.textContent = ustensil;

    ustensilWrapper.appendChild(ustensilContainer);
    ustensilContainer.appendChild(ustensilContent);
  }

  ustensilsDrawer.appendChild(ustensilsContainer);
}

ustensilsDrawer();
