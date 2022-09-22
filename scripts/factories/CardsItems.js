export default function CardsItem(filteredRecipes) {
  const target = document.getElementById('recettesList');

  // Reset existing cards
  target.innerHTML = '';

  filteredRecipes?.forEach((recipe) => {
    // Get all ingredients needed for the recipe
    const ingredients = [];
    recipe.ingredients.forEach((ingredient) => {
      const { unit } = ingredient;
      ingredients.push(`
                <li class="recetteDetailsListItem"><b>${ingredient.ingredient}</b> ${ingredient.quantity}${unit || ''}</li>
            `);
    });

    // Setup recipe frame
    const recipeFrame = `
            <article class="recetteFrame recetteFrameIsInView">
                <img class="recetteImg" src="./assets/temp_img.png" alt="">
                <div class="recetteText">
                    <div class="recetteTitleFrame">
                        <h2 class="recetteTitle">${recipe.name}</h2>
                        <div>
                            <i class="far fa-clock recetteDurationLogo"></i>
                            <span class="recetteDuration">${recipe.time} min</span>
                        </div>
                    </div>
                    <div class="recetteDetailsFrame">
                        <ul class="recetteDetailsList">
                            ${ingredients.join('')}
                        </ul>
                        <p class="recetteDetailsDesc">
                            ${recipe.description}
                        </p>
                    </div>
                </div>
            </article>
        `;

    if (!filteredRecipes) { target.innerHTML = ''; }

    // Add recipeFrame item to the recipesFrame list
    target.innerHTML += recipeFrame;
  });

  // If no there is no recipes
  if (filteredRecipes.length === 0) {
    target.innerHTML += `
            <p class='emptyRecipes'>
                Aucune recette ne correspond à votre critère… vous pouvez
                chercher « tarte aux pommes », « poisson », etc.
            </p>
        `;
  }
}
