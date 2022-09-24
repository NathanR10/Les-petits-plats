export default function AppliancesItems(recipes) {
  const target = document.getElementById('appliancesList');
  var activeTags = document.querySelectorAll('.tagFrame');
  activeTags = Array.from(activeTags);
  var activeTagsString = [];
  activeTags.forEach(activeTags => {
    activeTagsString.push(activeTags.childNodes[0].innerHTML.toLowerCase());
  });

  // Reset existing cards
  target.innerHTML = '';
  
  const allAppliancesName = [];

  recipes.forEach((recipe) => {
    if (!allAppliancesName.includes(recipe.appliance) && !activeTagsString.includes(recipe.appliance.toLowerCase())) {
      allAppliancesName.push(recipe.appliance);
    }
  });

  allAppliancesName.forEach((applianceName, index) => {
    let name = applianceName.toLowerCase();
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const appliancesFrame = `
            <span class="selectItem" id="appliance_${index}" active="false">${name}</span>
        `;
    target.innerHTML += appliancesFrame;
  });
}
