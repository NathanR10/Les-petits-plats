export default function IngredientsItems(recipes) {
  const allIngredientsName = [];

  recipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      if (!allIngredientsName.includes(ingredient.ingredient)) {
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
    const target = document.getElementById('ingrediantsList');
    target.innerHTML += ingrediantsFrame;
  });
}
