// console.log("domManager.js")

const displayContainer = document.querySelector("#display-container");
const formSection = document.createElement("section");
formSection.id = "form-container";
displayContainer.appendChild(formSection);

const allFlowersSection = document.createElement("section");
allFlowersSection.id = "all-flowers";
displayContainer.appendChild(allFlowersSection);

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

const appendAllFlowersToDom = flowersArray => {
  let flowersDocFragment = document.createDocumentFragment();

  flowersArray.forEach(flower => {
    flowersDocFragment.appendChild(buildHtmlForFlower(flower));
    // console.log(flowersDocFragment);
  });

  while (allFlowersSection.firstChild) {
    allFlowersSection.removeChild(allFlowersSection.firstChild);
  }
  // debugger

  allFlowersSection.appendChild(flowersDocFragment);
};

const buildAndAppendForm = () => {
  let formDocumentFragment = document.createDocumentFragment();

  formDocumentFragment.appendChild(buildElementWithText("label", "Species: "));
  formDocumentFragment.appendChild(buildInputElement("text", "flower-species"));

  formDocumentFragment.appendChild(buildElementWithText("label", "Occasion: "));
  formDocumentFragment.appendChild(
    buildInputElement("text", "flower-occasion")
  );

  formDocumentFragment.appendChild(buildElementWithText("label", "Price: "));
  formDocumentFragment.appendChild(buildInputElement("text", "flower-price"));

  formDocumentFragment.appendChild(buildElementWithText("label", "Quantity: "));
  formDocumentFragment.appendChild(
    buildInputElement("text", "flower-quantity")
  );

  formDocumentFragment.appendChild(buildElementWithText("label", "Color: "));
  formDocumentFragment.appendChild(buildInputElement("text", "flower-color"));

  let radioButtonsDiv = document.createElement("div");

  formDocumentFragment.appendChild(buildElementWithText("label", "Seasonal: "));
  let seasonalTrueRadioBtn = document.createElement("input");
  seasonalTrueRadioBtn.type = "radio";
  seasonalTrueRadioBtn.name = "flower-seasonal";
  seasonalTrueRadioBtn.value = true;
  seasonalTrueRadioBtn.checked = true;
  radioButtonsDiv.appendChild(seasonalTrueRadioBtn);

  radioButtonsDiv.appendChild(buildElementWithText("span", "In season"));

  let seasonalFalseRadioBtn = document.createElement("input");
  seasonalFalseRadioBtn.type = "radio";
  seasonalFalseRadioBtn.name = "flower-seasonal";
  seasonalFalseRadioBtn.value = false;
  radioButtonsDiv.appendChild(seasonalFalseRadioBtn);

  radioButtonsDiv.appendChild(buildElementWithText("span", "Not available"));

  formDocumentFragment.appendChild(radioButtonsDiv);

  let addFlowerButton = buildElementWithText("button", "Add Flower");
  addFlowerButton.addEventListener("click", handleAddFlower);
  formDocumentFragment.appendChild(addFlowerButton);

  console.log(formDocumentFragment);

  formSection.appendChild(formDocumentFragment);
};
