import AppliancesItems from "../factories/AppliancesItem.js";

export default function showTagsMenu(recipes) {
    const targets = document.querySelectorAll('.selectInputFrame')

    // Listen for a click for open|close targeted menu
    window.addEventListener('click', function(e){  
        targets.forEach(target => {
            const genPlaceholder = () => {
                if (target.id === 'ingredientsSelect') {
                    return 'Rechercher un ingrédient'
                } else if (target.id === 'appareilsSelect') {
                    return 'Rechercher un appareil'
                } else {
                    return 'Rechercher un ustensile'
                }
            }
            const placeholder = genPlaceholder()
            if (target.contains(e.target)){

                // Change title
                const input = document.createElement("input");
                input.setAttribute('type', 'text')
                input.setAttribute('placeholder', placeholder)
                input.setAttribute('class', 'selectInput')
                input.setAttribute('id', target.firstElementChild.id)
                target.firstElementChild.replaceWith(input)
                this.document.getElementById(target.firstElementChild.id).focus()

                // add style
                const targetDOM = document.getElementById(target.id)
                targetDOM.style.width = 'fit-content'
                targetDOM.style.flexGrow = 1
                targetDOM.style.height = 'fit-content'
                targetDOM.style.paddingTop = '27px'
                targetDOM.style.maxHeight = '300px'
                target.lastElementChild.style.overflowY = 'scroll'
                target.lastElementChild.style.display = 'flex'

                // setup search to the input
                const inputTarget = this.document.getElementById(target.firstElementChild.id)
                inputTarget.addEventListener('input', () => {
                    let search = inputTarget.value.toLowerCase()
                    search = search.charAt(0).toUpperCase() + search.slice(1)
                    let childs = Array.from(target.lastElementChild.children);
                    childs.forEach(child => {
                        if (!child.innerText.includes(search) && search) {
                            child.style.display = 'none'
                        } else {
                            child.style.display = 'flex'
                        }
                    });
                })
            } else {

                // Change input to title
                const span = document.createElement("span");
                span.setAttribute('class', 'selectTitle')
                span.setAttribute('id', target.firstElementChild.id)
                let title = target.firstElementChild.id
                title = title.charAt(0).toUpperCase() + title.slice(1)
                span.innerHTML = title
                target.firstElementChild.replaceWith(span)

                // Reset style to default
                const targetDOM = document.getElementById(target.id)
                targetDOM.style.width = '170px'
                targetDOM.style.flexGrow = 0
                targetDOM.style.height = '22px'
                targetDOM.style.paddingTop = '23px'
                targetDOM.style.maxHeight = 'unset'
                target.lastElementChild.style.overflowY = 'hidden'
                target.lastElementChild.style.display = 'none'
            }
        }); 
    });
}
