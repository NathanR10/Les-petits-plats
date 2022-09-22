/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
export default function nativeSorter(searchInputValue, recipes) {
  const sortedRecipes = [];

  for (let i = 0; i < recipes.length; i += 1) {
    // regroup all ingredients for one recipe
    const ingredients = [];
    for (let y = 0; y < recipes[i].ingredients.length; y += 1) {
      ingredients.push(recipes[i].ingredients[y].ingredient.toLowerCase());
    }

    // regroup all ingredients for one recipe
    const ustensils = [];
    for (let y = 0; y < recipes[i].ustensils.length; y += 1) {
      ustensils.push(recipes[i].ustensils[y].toLowerCase());
    }

    // setup our targets
    const targetName = [
      recipes[i].name.toLowerCase(),
      ...ingredients, ...ustensils,
      recipes[i].description.toLowerCase(),
      recipes[i].appliance.toLowerCase(),
    ];
    const searchString = searchInputValue.toLowerCase();

    // search for matches between search & targets
    const searchWords = searchString.split(' ');
    for (let y = 0; y < searchWords.length; y += 1) {
      searchWords[y] === '' && searchWords.splice(y, 1);
    }
    let matchsCount = 0;
    for (let y = 0; y < searchWords.length; y += 1) {
      if (searchWords[y] === '') {
        return;
      }
      let tempMatch = 0;
      for (let z = 0; z < targetName.length; z += 1) {
        // if there is a match, add 1 to count
        if (targetName[z].includes(searchWords[y])) {
          tempMatch += 1;
        }
      }

      // check if recipe already added & every tags are matching
      tempMatch > 0 && (matchsCount += 1);
      if (!sortedRecipes.includes(recipes[i]) && matchsCount === searchWords.length) {
        sortedRecipes.push(recipes[i]);
      }
    }
  }

  return sortedRecipes;
}
