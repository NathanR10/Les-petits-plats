/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-cycle, import/extensions
import { filter } from '../script.js';

export default function TagsItems() {
  const menuTags = document.querySelectorAll('.selectItem');

  function listenTag(tagItem) {
    tagItem.addEventListener('click', () => {
      if (tagItem.attributes.active.value === 'true') {
        tagItem.attributes.active.value = 'false';
        callbackTag(tagItem);
      } else {
        tagItem.attributes.active.value = 'true';
        pushTag(tagItem);
      }
      // refresh tags
      filter('click');
    });
  }

  function pushTag(tagItem) {
    // set tag color
    let tagColor = '#aaaaaa';
    tagItem.id.split('_')[0] === 'ingredient'
      ? tagColor = '#3282F7'
      : tagItem.id.split('_')[0] === 'appliance'
        ? tagColor = '#68D9A4'
        : tagColor = '#ED6454';

    // setup structure
    const elmFrame = document.createElement('div');
    const elmText = document.createElement('span');
    const elmIcon = document.createElement('img');
    elmFrame.setAttribute('class', 'tagFrame');
    elmFrame.setAttribute('id', tagItem.id);
    elmFrame.setAttribute('active', true);
    elmFrame.setAttribute('style', `background-color: ${tagColor}`);
    elmText.setAttribute('class', 'tagName');
    elmText.textContent = tagItem.outerText;
    elmIcon.setAttribute('class', 'tagClose');
    elmIcon.setAttribute('src', './assets/close.png');
    elmIcon.setAttribute('alt', "Supprimer l'étiquette");
    elmFrame.appendChild(elmText);
    elmFrame.appendChild(elmIcon);

    // remove used tag from menu list
    tagItem.remove();

    // add used tag to bar list
    const target = document.getElementById('tagsList');
    target.appendChild(elmFrame);

    // reset the eventListener
    listenTag(elmFrame);
  }

  function callbackTag(tagItem) {
    // set where tag should come back
    let target = null;
    tagItem.id.split('_')[0] === 'ingredient'
      ? target = document.getElementById('ingrediantsList')
      : tagItem.id.split('_')[0] === 'appliance'
        ? target = document.getElementById('appliancesList')
        : target = document.getElementById('utensilsList');

    // setup structure
    const elmText = document.createElement('span');
    elmText.setAttribute('class', 'selectItem');
    elmText.setAttribute('id', tagItem.id);
    elmText.setAttribute('active', 'false');
    elmText.textContent = tagItem.innerText;

    // remove used tag from bar list
    tagItem.remove();

    // add used tag to menu list
    target.prepend(elmText);

    // reset the eventListener
    listenTag(tagItem);
  }

  menuTags.forEach((tag) => {
    listenTag(tag);
  });
}
