function getEmail() {
  event.preventDefault()
  var emailForm = document.signUp.email.value
  document.signUp.email.value = ""
  console.log("Thank you " + emailForm + "." + " You will now receive email updates from Winter Wear Warehouse.")
  var feedText = document.getElementById("feedback")
  feedText.innerHTML = "Thank you " + emailForm + "." + " You will now receive email updates from Winter Wear Warehouse."
}

var cart = []
// var price = []
function addCart(item,itemPrice) {
    var i = cart.indexOf(item)
//  var p = price.indexOf(itemPrice)
    if (i == -1) {
        cart.push(item)
//      price.push(itemPrice)
        console.log(item + " for $" + itemPrice + " has been added to cart.")
    } else {
      cart.splice(item)
//    price.splice(itemPrice)
      console.log(item + " removed from cart.")
    }
}

function viewCart() {
  for (i = 0; i < cart.length; i++) {
    console.log(cart[i])
  }
  console.log("You have " + cart.length + " total items in your cart.")  
}
