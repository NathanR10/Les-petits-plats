/* eslint-disable no-unused-expressions */
export default function functionalSorter(searchInputValue, recipes) {
    let sortedRecipes = [];

    recipes.forEach((recipe) => {
        // regroup all ingredients for one recipe
        let ingredients = [];
        recipe.ingredients.forEach((ingredient) => {
          ingredients.push(ingredient.ingredient.toLowerCase());
        });

        // regroup all ustensils for one recipe
        let ustensils = [];
        recipe.ustensils.forEach((ustensil) => {
          ustensils.push(ustensil.toLowerCase());
        });

        // setup our targets
        const targetName = [
          recipe.name.toLowerCase(),
          ...ingredients,
          ...ustensils,
          recipe.description.toLowerCase(),
          recipe.appliance.toLowerCase(),
        ];
        const searchString = searchInputValue.toLowerCase();

        // search for matches between search & targets
        const searchWords = searchString.split(' ');
        searchWords.forEach((word, index) => {
          word === '' && searchWords.splice(index, 1);
        });
        let matchsCount = 0;
        searchWords.forEach((word) => {
            if (word === '') {
              return
            } else {
              const matches = targetName.filter((el) => el.includes(word));

              // if there is a match, add 1 to count
              matches.length > 0 && (matchsCount += 1);

              // check if recipe already added & every tags are matching
              if (matches.length > 0
                  && !sortedRecipes.includes(recipe) && matchsCount === searchWords.length) {
                sortedRecipes.push(recipe);
              }
            }
        });
    })

    return sortedRecipes
  }
