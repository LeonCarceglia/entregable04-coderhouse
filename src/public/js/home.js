const socket = io()

// let chatBox = document.getElementById("chatBox")

// chatBox.addEventListener("keyup", evt => { // Deberia tener un metodo similar a este para agregar y borrar objetos, pero no se cual
//   if(evt.key === "Enter"){
//       if(chatBox.value.trim().length > 0){
//           socket.emit("message", {user: user, message: chatBox.value})
//           chatBox.value =""
//       }
//   }
// })

socket.on("updatedProducts", (products) => {
    const productList = document.getElementById("products")
    productList.innerHTML = ""
    products.forEach((product) => {
      const listItem = document.createElement("li")
      listItem.textContent = product.title
      productList.appendChild(listItem)
    })
  })