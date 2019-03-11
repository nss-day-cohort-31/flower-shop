// console.log("main.js")

buildAndAppendForm()

getAllFlowers().then(parsedResponse => appendAllFlowersToDom(parsedResponse))
