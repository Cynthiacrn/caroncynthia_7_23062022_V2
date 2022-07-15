import { recipes } from "../recipes.js";

document.querySelector("body").addEventListener("click", (e) => {
  openIngredientsDrawer(e);
});

let visibleappliance = false;
let visibleUstensil = false;
let visibleIngredient = false;
const ingredientDrawer = document.querySelector("#ingredients-drawer");
const ingredientButton = document.querySelector(".select-ingredients-btn");
const applianceDrawer = document.querySelector("#appliances-drawer");
const applianceButton = document.querySelector(".select-appliance-btn");
const ustensilDrawer = document.querySelector("#ustensils-drawer");
const ustensilButton = document.querySelector(".select-ustensil-btn");

function openIngredientsDrawer(e) {
  ingredientDrawer.style.display = "none";
  applianceDrawer.style.display = "none";
  ustensilDrawer.style.display = "none";
  if (
    e.target.parentNode.id === "ingredients" ||
    e.target.parentNode.id === "arrow-ingredients"
  ) {
    if (visibleIngredient === false) {
      ingredientDrawer.style.display = "block";
      ingredientButton.style.display = "none";
      visibleIngredient = true;
    } else {
      ingredientDrawer.style.display = "none";
      ingredientButton.style.display = "block";
      visibleIngredient = false;
    }
  }
  if (
    e.target.parentNode.id === "ingredients" ||
    e.target.parentNode.id === "arrow-ingredients"
  ) {
    if (visibleIngredient === false) {
      ingredientDrawer.style.display = "block";
      ingredientButton.style.display = "none";
      visibleIngredient = true;
    } else {
      ingredientDrawer.style.display = "none";
      ingredientButton.style.display = "block";
      visibleIngredient = false;
    }
  }
  if (
    e.target.parentNode.id === "ingredients" ||
    e.target.parentNode.id === "arrow-ingredients"
  ) {
    if (visibleIngredient === false) {
      ingredientDrawer.style.display = "block";
      ingredientButton.style.display = "none";
      visibleIngredient = true;
    } else {
      ingredientDrawer.style.display = "none";
      ingredientButton.style.display = "block";
      visibleIngredient = false;
    }
  }
}

function displayData() {
  ingredientsDrawer(recipes);
}
displayData();

function ingredientsDrawer(recipes) {
  let ingredients = recipes.flatMap((recipe) =>
    recipe.ingredients.map(({ ingredient }) => ingredient)
  );

  let uniqueIngredients = Array.from(new Set(ingredients)).slice(0, 30);
  let ingredientsDrawer = document.querySelector("#ingredients-drawer");
  ingredientsDrawer.style.display = "none";

  let container = document.createElement("div");
  container.className = "ingredients-drawer-container";

  let searchContainer = document.createElement("div");
  searchContainer.className = "search-container";
  let searchInput = document.createElement("input");
  searchInput.placeholder = "Rechercher un ingrédient";
  searchInput.className = "ingredients-drawer-search";
  let arrowSearchContainer = document.createElement("div");
  arrowSearchContainer.className = "arrow-search-container";
  arrowSearchContainer.id = "arrow-ingredients";

  let arrowSearch = document.createElement("i");
  arrowSearch.className = "fa-solid fa-chevron-up";
  arrowSearchContainer.appendChild(arrowSearch);

  searchContainer.appendChild(searchInput);
  searchContainer.appendChild(arrowSearchContainer);

  let ingredientWrapper = document.createElement("div");
  ingredientWrapper.className = "drawer-ingredient-wrapper";

  container.appendChild(searchContainer);
  container.appendChild(ingredientWrapper);

  for (let ingredient of uniqueIngredients) {
    let ingredientContainer = document.createElement("div");
    ingredientContainer.className = "drawer-ingredient-container";
    let ingredientContent = document.createElement("p");
    ingredientContent.className = "drawer-ingredient-content";
    ingredientContent.textContent = ingredient;

    ingredientWrapper.appendChild(ingredientContainer);
    ingredientContainer.appendChild(ingredientContent);
  }

  ingredientsDrawer.appendChild(container);
}
