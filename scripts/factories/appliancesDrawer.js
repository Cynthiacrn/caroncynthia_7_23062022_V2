import { recipes } from "../recipes.js";

function displayData() {
  appliancesDrawer(recipes);
}
displayData();

function appliancesDrawer(recipes) {
  let appliances = recipes.map((recipe) => recipe.appliance);

  let uniqueAppliances = Array.from(new Set(appliances)).sort();
  let appliancesDrawer = document.querySelector("#appliances-drawer");
  // appliancesDrawer.style.display = "none";

  let appliancesContainer = document.createElement("div");
  appliancesContainer.className = "appliances-drawer-container";

  let searchAppliancesContainer = document.createElement("div");
  searchAppliancesContainer.className = "search-appliances-container";
  let searchAppliancesInput = document.createElement("input");
  searchAppliancesInput.placeholder = "Rechercher un appareil";
  searchAppliancesInput.className = "appliances-drawer-search";
  let arrowSearchContainer = document.createElement("div");
  arrowSearchContainer.className = "arrow-search-container";
  arrowSearchContainer.id = "arrow-appliances";

  let arrowSearch = document.createElement("i");
  arrowSearch.className = "fa-solid fa-chevron-up";
  searchAppliancesContainer.appendChild(searchAppliancesInput);
  searchAppliancesContainer.appendChild(arrowSearchContainer);
  arrowSearchContainer.appendChild(arrowSearch);

  let appliancesWrapper = document.createElement("div");
  appliancesWrapper.className = "drawer-appliances-wrapper";

  appliancesContainer.appendChild(searchAppliancesContainer);
  appliancesContainer.appendChild(appliancesWrapper);

  for (let appliance of uniqueAppliances) {
    let applianceContainer = document.createElement("div");
    applianceContainer.className = "drawer-appliance-container";
    let applianceContent = document.createElement("p");
    applianceContent.className = "drawer-appliance-content";
    applianceContent.textContent = appliance;

    appliancesWrapper.appendChild(applianceContainer);
    applianceContainer.appendChild(applianceContent);
  }

  appliancesDrawer.appendChild(appliancesContainer);
}

appliancesDrawer();
