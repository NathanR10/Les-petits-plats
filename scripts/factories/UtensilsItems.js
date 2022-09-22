export default function UtensilsItems(recipes) {
    const allUtensilsName = []

    recipes.forEach(recipe => {
        recipe.ustensils.forEach(utensil => {
            if (!allUtensilsName.includes(utensil)) {
                allUtensilsName.push(utensil)
            }
        })
    })

    allUtensilsName.forEach((utensilName, index) => {
        var name = utensilName.toLowerCase()
        name = name.charAt(0).toUpperCase() + name.slice(1)
        const ingrediantsFrame = `
            <span class="selectItem" id="ustensil_${index}" active="false">${name}</span>
        `
        const target = document.getElementById('utensilsList')
        target.innerHTML += ingrediantsFrame
    });
}
