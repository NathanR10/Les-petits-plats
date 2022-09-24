export default function UtensilsItems(recipes) {
  const target = document.getElementById('utensilsList');
  var activeTags = document.querySelectorAll('.tagFrame');
  activeTags = Array.from(activeTags);
  var activeTagsString = [];
  activeTags.forEach(activeTags => {
    activeTagsString.push(activeTags.childNodes[0].innerHTML.toLowerCase());
  });

  // Reset existing cards
  target.innerHTML = '';
  
  const allUtensilsName = [];

  recipes.forEach((recipe) => {
    recipe.ustensils.forEach((utensil) => {
      if (!allUtensilsName.includes(utensil) && !activeTagsString.includes(utensil)) {
        allUtensilsName.push(utensil);
      }
    });
  });

  allUtensilsName.forEach((utensilName, index) => {
    let name = utensilName.toLowerCase();
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const ingrediantsFrame = `
            <span class="selectItem" id="ustensil_${index}" active="false">${name}</span>
        `;
    target.innerHTML += ingrediantsFrame;
  });
}
