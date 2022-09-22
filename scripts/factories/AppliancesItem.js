export default function AppliancesItems(recipes) {
  const allAppliancesName = [];

  recipes.forEach((recipe) => {
    if (!allAppliancesName.includes(recipe.appliance)) {
      allAppliancesName.push(recipe.appliance);
    }
  });

  allAppliancesName.forEach((applianceName, index) => {
    let name = applianceName.toLowerCase();
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const appliancesFrame = `
            <span class="selectItem" id="appliance_${index}" active="false">${name}</span>
        `;
    const target = document.getElementById('appliancesList');
    target.innerHTML += appliancesFrame;
  });
}
