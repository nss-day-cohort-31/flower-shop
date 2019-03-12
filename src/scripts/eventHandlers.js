// console.log("eventHandlers.js")

const handleAddFlower = () => {

  const speciesInput = document.querySelector("#flower-species")
  const quantityInput = document.querySelector("#flower-quantity")
  const colorInput = document.querySelector("#flower-color")
  const priceInput = document.querySelector("#flower-price")
  const seasonalInput = document.querySelector("input[name='flower-seasonal']:checked")
  const occasionInput = document.querySelector("#flower-occasion")

  let newFlower = {
    species: speciesInput.value,
    quantity: Number(quantityInput.value),
    color: colorInput.value,
    price: Number(priceInput.value),
    seasonal: (seasonalInput.value === "true"),
    occasion: occasionInput.value
  };

  console.log("new flower", newFlower)

  postFlower(newFlower)
  .then(() => getAllFlowers())
  .then(parsedResponse => appendAllFlowersToDom(parsedResponse))

  speciesInput.value = ""
  quantityInput.value = ""
  colorInput.value = ""
  priceInput.value = ""
  occasionInput.value = ""
  // document.querySelector("input[name='flower-seasonal']").checked = true
};
