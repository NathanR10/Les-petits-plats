export default function nativeSorter(searchInputValue, recipes) {
    let sortedRecipes = []

    for (let i = 0; i < recipes.length; i++) {

        let ingredients = []
        for (let y = 0; y < recipes[i].ingredients.length; y++) {
            ingredients.push(recipes[i].ingredients[y].ingredient.toLowerCase())
        }

        // setup our targets
        const targetName = [recipes[i].name.toLowerCase(), ...ingredients, recipes[i].description.toLowerCase()]
        const searchString = searchInputValue.toLowerCase()

        // search for matches between search & targets
        const searchWords = searchString.split(' ')
        for (let y = 0; y < searchWords.length; y++) {
            searchWords[y] === '' && searchWords.splice(y, 1)
        }
        let matchsCount = 0
        for (let y = 0; y < searchWords.length; y++) {
            if (searchWords[y] === '') {
                return
            } else {
                for (let z = 0; z < targetName.length; z++) {
                    if (targetName[z].includes(searchWords[y])) {

                        // if there is a match, add 1 to count
                        matchsCount ++
        
                        // check if recipe already added & every tags are matching
                        if (!sortedRecipes.includes(recipes[i]) && matchsCount === searchWords.length) {
                            sortedRecipes.push(recipes[i])
                        }
                    }
                }
            }
        };
    }

    return sortedRecipes
}
