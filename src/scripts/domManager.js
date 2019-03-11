// console.log("domManager.js")

const buildElementWithText = (elementType, elementTextContent) => {
  let htmlElement = document.createElement(elementType);
  htmlElement.textContent = elementTextContent;
  return htmlElement;
};

const buildHtmlForFlower = (flowerObject) => {
  let flowerSection = document.createElement("section");
  flowerSection.appendChild(buildElementWithText("h3", flowerObject.species));
  flowerSection.appendChild(buildElementWithText("p", flowerObject.color));
  flowerSection.appendChild(buildElementWithText("p", flowerObject.quantity));
  flowerSection.appendChild(buildElementWithText("p", flowerObject.seasonal));
  flowerSection.appendChild(buildElementWithText("p", flowerObject.occasion));
  flowerSection.appendChild(buildElementWithText("p", flowerObject.price));
  // console.log(flowerSection);
  return flowerSection;
};

const appendAllFlowersToDom = taco => {
  const displayContainer = document.querySelector("#display-container");

  let flowersDocFragment = document.createDocumentFragment();

  taco.forEach(flower => {
    flowersDocFragment.appendChild(buildHtmlForFlower(flower));
    // console.log(flowersDocFragment);
  });

  displayContainer.appendChild(flowersDocFragment);
};
