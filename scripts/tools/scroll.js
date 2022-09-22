export default function cardScroll() {
  const elementsArray = document.querySelectorAll('.recetteFrame');
  function fadeIn() {
    elementsArray.forEach((element) => {
      const distInView = element.getBoundingClientRect().top - window.innerHeight + 100;
      if (distInView < 0) {
        element.classList.add('recetteFrameIsInView');
      } else {
        element.classList.remove('recetteFrameIsInView');
      }
    });
  }
  window.addEventListener('scroll', fadeIn);
  fadeIn();
}
