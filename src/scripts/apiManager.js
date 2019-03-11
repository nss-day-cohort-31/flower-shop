// console.log("apiManager.js")

const getAllFlowers = () => {
  // return fetch("http://localhost:8088/flowers").then(response => response.json())
  return fetch("http://localhost:8088/flowers")
  .then(response => response.json())
}
