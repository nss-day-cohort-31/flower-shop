// console.log("domManager.js")

const displayContainer = document.querySelector("#display-container");

const buildElementWithText = (elementType, elementTextContent) => {
  let htmlElement = document.createElement(elementType);
  htmlElement.textContent = elementTextContent;
  return htmlElement;
};

const buildInputElement = (elementType, elementId) => {
  let htmlElement = document.createElement("input");
  htmlElement.type = elementType;
  htmlElement.id = elementId;
  return htmlElement;
};

const buildHtmlForFlower = flowerObject => {
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
  let flowersDocFragment = document.createDocumentFragment();

  taco.forEach(flower => {
    flowersDocFragment.appendChild(buildHtmlForFlower(flower));
    // console.log(flowersDocFragment);
  });

  displayContainer.appendChild(flowersDocFragment);
};

const buildAndAppendForm = () => {
  let formSection = document.createElement("section");
  formSection.id = "form-container";

  formSection.appendChild(buildElementWithText("label", "Species: "));
  formSection.appendChild(buildInputElement("text", "flower-species"));

  formSection.appendChild(buildElementWithText("label", "Occasion: "));
  formSection.appendChild(buildInputElement("text", "flower-occasion"));

  formSection.appendChild(buildElementWithText("label", "Price: "));
  formSection.appendChild(buildInputElement("text", "flower-price"));

  formSection.appendChild(buildElementWithText("label", "Quantity: "));
  formSection.appendChild(buildInputElement("text", "flower-quantity"));

  formSection.appendChild(buildElementWithText("label", "Color: "));
  formSection.appendChild(buildInputElement("text", "flower-color"));

  let radioButtonsDiv = document.createElement("div");

  formSection.appendChild(buildElementWithText("label", "Seasonal: "));
  let seasonalTrueRadioBtn = document.createElement("input");
  seasonalTrueRadioBtn.type = "radio";
  seasonalTrueRadioBtn.name = "flower-seasonal";
  seasonalTrueRadioBtn.value = true;
  radioButtonsDiv.appendChild(seasonalTrueRadioBtn);

  radioButtonsDiv.appendChild(buildElementWithText("span", "In season"));

  let seasonalFalseRadioBtn = document.createElement("input");
  seasonalFalseRadioBtn.type = "radio";
  seasonalFalseRadioBtn.name = "flower-seasonal";
  seasonalFalseRadioBtn.value = false;
  radioButtonsDiv.appendChild(seasonalFalseRadioBtn);

  radioButtonsDiv.appendChild(buildElementWithText("span", "Not available"));

  formSection.appendChild(radioButtonsDiv);

  formSection.appendChild(buildElementWithText("button", "Add Flower"))

  console.log(formSection);

  displayContainer.appendChild(formSection);
};
