// console.log("apiManager.js")

const getAllFlowers = () => {
  // return fetch("http://localhost:8088/flowers").then(response => response.json())
  return fetch("http://localhost:8088/flowers")
  .then(response => response.json())
}

const postFlower = (newFlowerObject) => {
  return fetch("http://localhost:8088/flowers", {
    method: "POST",
    body: JSON.stringify(newFlowerObject),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
}
