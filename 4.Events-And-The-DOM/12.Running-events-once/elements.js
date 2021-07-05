// ========= SECTION HEADING =========
const sectionHeading = document.createElement('h3');
const headingText = document.createTextNode(
  'Helping the planet, one bite at a time...'
);
sectionHeading.appendChild(headingText);

// ========= IMAGE =========
const imageElement = document.createElement('img');
imageElement.setAttribute('src', 'burger.jpg');
imageElement.setAttribute('alt', 'burger image');

// ========= INFO TEXT =========
const infoSectionElement = document.createElement('p');
const infoSectionText = document.createTextNode(
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore aut unde sunt.'
);
infoSectionElement.appendChild(infoSectionText);

// ========= BUTTON =========
const buttonElement = document.createElement('button');
const buttonText = document.createTextNode('BUY ONLINE');
// add
// buttonElement.id = 'buy';
buttonElement.appendChild(buttonText);

// ========= WRAPPERS =========
const sectionWrapper = document.createElement('section');
const contentWrapper = document.createElement('div');
const imageDivElement = document.createElement('div');
const textDivElement = document.createElement('div');

// ========= PUTTING IT ALL TOGETHER =========
textDivElement.appendChild(infoSectionElement);
textDivElement.appendChild(buttonElement);

imageDivElement.appendChild(imageElement);

contentWrapper.appendChild(imageDivElement);
contentWrapper.appendChild(textDivElement);

sectionWrapper.appendChild(sectionHeading);
sectionWrapper.appendChild(contentWrapper);

// ========= ADDING CLASSES =========
sectionWrapper.setAttribute('class', 'planet_wrapper');
contentWrapper.setAttribute('class', 'content');
imageDivElement.setAttribute('class', 'image_section');
textDivElement.setAttribute('class', 'info_section');

// ADD TO PAGE
document.body.insertBefore(sectionWrapper, document.querySelector('.recipes'));

// ========= LOOPING =========
const listItems = document.querySelectorAll('li');
const links = ['our burgers', 'history'];
links.forEach(function (link) {
  const listElement = document.createElement('li');
  const listText = document.createTextNode(link);
  listElement.appendChild(listText);
  listElement.classList.add('nav-item');
  document.querySelector('ul').appendChild(listElement);
});
