export default function cardScroll() {
    let elementsArray = document.querySelectorAll(".recetteFrame")
    window.addEventListener('scroll', fadeIn)
    function fadeIn() {
        elementsArray.forEach(element => {
            var distInView = element.getBoundingClientRect().top - window.innerHeight + 100
            if (distInView < 0) {
                element.classList.add("recetteFrameIsInView")
            } else {
                element.classList.remove("recetteFrameIsInView")
            }
        })
    }
    fadeIn()
}