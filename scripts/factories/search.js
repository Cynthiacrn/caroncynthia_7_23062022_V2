import { recipes } from "../recipes.js";
import { showRecipes } from "./showRecipes.js";
import { ingredientsDrawer } from "./ingredientsDrawer.js";

const searchBar = document.getElementById("search");
console.log(recipes);

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  if (searchString.length > 2) {
    let filteredRecipes = recipes.filter((recipe) => {
      return (
        recipe.name.toLowerCase().includes(searchString) ||
        recipe.description.toLowerCase().includes(searchString) ||
        recipe.ingredients
          .flatMap((ingredient) => ingredient.ingredient.toLowerCase())
          .includes(searchString)
      );
    });
    if (filteredRecipes.length < 1) {
      let container = document.getElementById("recipes");
      container.innerHTML = "";

      const noMatch = document.createElement("p");
      noMatch.className = "no-match";
      noMatch.textContent =
        'Aucune recette ne correspond à vos critères, veuillez modifier votre recherche svp. Vous pouvez chercher "tarte aux pommes", "poisson", etc...';

      container.appendChild(noMatch);
    } else {
      showRecipes(filteredRecipes);
    }
  }
});

const searchIngredient = document.getElementById("ingredients-drawer-search");

searchIngredient.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  if (searchString.length > 2) {
    let ingredients = recipes.flatMap((recipe) =>
      recipe.ingredients.map(({ ingredient }) => ingredient.toLowerCase())
    );

    let uniqueIngredients = Array.from(new Set(ingredients));
    let filteredIngredients = uniqueIngredients.filter((ingredient) =>
      ingredient.includes(searchString)
    );
    console.log(filteredIngredients);
    if (filteredIngredients.length < 1) {
      console.log("pas de recette correspondante");
      let container = document.getElementById("drawer-ingredient-wrapper");
      container.innerHTML = "";

      const noMatch = document.createElement("p");
      noMatch.className = "no-match";
      noMatch.textContent =
        'Aucune recette ne correspond à vos critères, veuillez modifier votre recherche svp. Vous pouvez chercher "tarte aux pommes", "poisson", etc...';

      container.appendChild(noMatch);
    } else {
      console.log("les recettes", filteredIngredients);
      ingredientsDrawer(filteredIngredients);
    }
  }
});
// recipe.appliance.toLowerCase().includes(searchString) ||
//       recipe.ustensils
//         .map((ustensil) => ustensil.toLowerCase)
//         .includes(searchString) ||
