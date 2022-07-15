import { recipes } from "../recipes.js";

function displayData() {
  showRecipes(recipes);
}
displayData();

function showRecipes(recipes) {
  for (let recipe of recipes) {
    let recipesWrapper = document.querySelector(".recipes");

    // création d'un container afin d'afficher chaque recette //
    let container = document.createElement("article");
    container.className = "recipe-container";

    // // création du bloc image //
    let imgContainer = document.createElement("div");
    imgContainer.className = "img-container";

    // création du bloc body//
    let bodyContainer = document.createElement("div");
    bodyContainer.className = "body-container";

    // bloc titre + ingrédients //
    let ingredientsContent = document.createElement("div");
    ingredientsContent.className = "ingredients-content";

    let title = document.createElement("h1");
    title.className = "recipe-title";
    title.textContent = recipe.name;
    ingredientsContent.appendChild(title);

    let ingredientsContainer = document.createElement("ul");
    ingredientsContainer.className = "ingredient-container";

    for (let ingredients of recipe.ingredients) {
      let ingredient = document.createElement("li");
      ingredient.className = "ingredient-content";
      let ingredientName = document.createElement("h4");
      ingredientName.className = "ingredient-name";
      ingredients.quantity
        ? (ingredientName.textContent = `${ingredients.ingredient}:`)
        : (ingredientName.textContent = ingredients.ingredient);
      let ingredientQuantity = document.createElement("span");
      ingredientQuantity.className = "ingredient-quantity";
      ingredients.quantity
        ? (ingredientQuantity.textContent = ingredients.quantity)
        : "";
      let ingredientUnit = document.createElement("span");
      ingredientUnit.className = "ingredient-unit";
      ingredients.unit
        ? (ingredientUnit.textContent = `${ingredients.unit}`)
        : "";

      ingredient.appendChild(ingredientName);
      ingredient.appendChild(ingredientQuantity);
      ingredient.appendChild(ingredientUnit);
      ingredientsContainer.appendChild(ingredient);
      ingredientsContent.appendChild(ingredientsContainer);
    }

    // bloc temps + description //
    let descriptionContent = document.createElement("div");
    descriptionContent.className = "description-content";

    let time = document.createElement("p");
    time.className = "time";
    time.textContent = `${recipe.time} min`;
    let timeIcon = document.createElement("i");
    timeIcon.className = "fa-regular fa-clock";
    time.appendChild(timeIcon);
    descriptionContent.appendChild(time);

    let description = document.createElement("div");
    description.className = "description";
    description.textContent = recipe.description;
    descriptionContent.appendChild(description);

    recipesWrapper.appendChild(container);
    container.appendChild(imgContainer);
    container.appendChild(bodyContainer);
    bodyContainer.appendChild(ingredientsContent);
    bodyContainer.appendChild(descriptionContent);
  }
}

showRecipes();
