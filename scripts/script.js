import { recipes } from "./data/recipes.js";
import AppliancesItems from "./factories/AppliancesItem.js";
import CardsItems from "./factories/CardsItems.js";
import IngredientsItems from "./factories/IngredientsItem.js";
import TagsItems from "./tools/TagsItems.js";
import UtensilsItems from "./factories/UtensilsItems.js";
import functionalSorter from "./tools/functionalSorter.js";
import nativeSorter from "./tools/nativeSorter.js";
import cardScroll from "./tools/scroll.js";
import showTagsMenu from "./tools/showTagsMenus.js";
import tagsSorter from "./tools/tagsSorter.js";

// open|close tags menus
showTagsMenu(recipes)

// gen all Ingredients tags
IngredientsItems(recipes)

// gen all Appliances tags
AppliancesItems(recipes)

// gen all Utensils tags
UtensilsItems(recipes)

// add tags event
TagsItems()

// sort recipe -> true: native, false: functional
const native = false
var sortedRecipes = recipes

// filter recipes with tags
var matchingRecipes = tagsSorter(recipes)

export function filter(action) {
    const input = document.getElementById('searchBar')
    const inputValue = input.value

    // check if tag as been added | removed
    action === 'click' && 
    // refresh tags
    (matchingRecipes = tagsSorter(recipes))


    if (inputValue.length > 2) {

        native
        ? sortedRecipes = nativeSorter(inputValue, matchingRecipes)
        : sortedRecipes = functionalSorter(inputValue, matchingRecipes)

        // gen all recipe cards
        CardsItems(sortedRecipes)
    
        // add scroll effect to cards
        cardScroll()
    } else {

        // test if it's a tag edit, to light the input filter gear
        if (action === 'click') {
        
            // reset recipes
            sortedRecipes = recipes
            
            // gen all recipe cards
            CardsItems(matchingRecipes)
        
            // add scroll effect to cards
            cardScroll()
        } else {
            if (sortedRecipes !== recipes) {

                // reset recipes
                sortedRecipes = recipes
                
                // gen all recipe cards
                CardsItems(matchingRecipes)
            
                // add scroll effect to cards
                cardScroll()
            }
        }
    }
}

const searchInput = document.getElementById('searchBar')
searchInput.addEventListener('input', () => {
    filter()
})

// gen all recipe cards
CardsItems(sortedRecipes)

// add scroll effect to cards
cardScroll()
