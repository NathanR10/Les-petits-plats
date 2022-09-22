export default function tagsSorter(recipes) {
    var sortedRecipes = []

    // get all active tags
    const tags = document.querySelectorAll('.tagFrame')

    // extract tags names
    const tagsName = []
    tags.forEach(tag => {
        tagsName.push(tag.innerText)
    });

    // check for each tag, for each recipe, if it's matching
    recipes.forEach(recipe => {

        // regroup all ingredients for one recipe
        const ingredients = []
        recipe.ingredients.forEach(ingredient => {
            ingredients.push(ingredient.ingredient.toLowerCase())
        });

        // setup our targets
        const targetName = [recipe.name.toLowerCase(), ...ingredients, recipe.description.toLowerCase()]

        // test all tag for the recipe
        var matchingTagsCount = 0
        tagsName.forEach(tag => {

            // search for matches between tag & targets
            const matches = targetName.find(el => el.includes(tag.toLowerCase()))
            matches && (matchingTagsCount++)
        });

        // check if all tags matches
        matchingTagsCount === tagsName.length && sortedRecipes.push(recipe)
        
    });

    if (sortedRecipes.length > 0) {
        return sortedRecipes
    } else if (sortedRecipes.length === 0 && tagsName.length > 0) {
        return []
    } else {
        recipes
    }
}
