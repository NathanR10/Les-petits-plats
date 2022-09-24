export default function IngredientsItems(recipes) {
  const target = document.getElementById('ingrediantsList');
  let activeTags = document.querySelectorAll('.tagFrame');
  activeTags = Array.from(activeTags);
  const activeTagsString = [];
  activeTags.forEach((activeTag) => {
    activeTagsString.push(activeTag.childNodes[0].innerHTML.toLowerCase());
  });

  // Reset existing cards
  target.innerHTML = '';

  const allIngredientsName = [];

  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      if (!allIngredientsName.includes(ingredient.ingredient)
      && !activeTagsString.includes(ingredient.ingredient.toLowerCase())) {
        allIngredientsName.push(ingredient.ingredient);
      }
    });
  });

  allIngredientsName.forEach((ingredientName, index) => {
    let name = ingredientName.toLowerCase();
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const ingrediantsFrame = `
            <span class="selectItem" id="ingredient_${index}" active="false">${name}</span>
        `;
    target.innerHTML += ingrediantsFrame;
  });
}
