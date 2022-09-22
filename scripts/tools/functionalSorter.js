export default function functionalSorter(searchInputValue, recipes) {
    let sortedRecipes = []

    recipes.forEach(recipe => {

        let ingredients = []
        recipe.ingredients.forEach(ingredient => {
            ingredients.push(ingredient.ingredient.toLowerCase())
        });

        // setup our targets
        const targetName = [recipe.name.toLowerCase(), ...ingredients, recipe.description.toLowerCase()]
        const searchString = searchInputValue.toLowerCase()

        // search for matches between search & targets
        const searchWords = searchString.split(' ')
        searchWords.forEach((word, index) => {
            word === '' && searchWords.splice(index, 1)
        })
        let matchsCount = 0
        searchWords.forEach(word => {
            if (word === '') {
                return
            } else {
                const matches = targetName.filter(el => el.includes(word))

                // if there is a match, add 1 to count
                matches.length > 0 && matchsCount ++

                // check if recipe already added & every tags are matching
                if (matches.length > 0 && !sortedRecipes.includes(recipe) && matchsCount === searchWords.length) {
                    sortedRecipes.push(recipe)
                }
            }
        });
    })

    return sortedRecipes
}
