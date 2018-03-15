function getEmail() {
  event.preventDefault()
  var emailForm = document.signUp.email.value
  document.signUp.email.value = ""
  console.log("Thank you " + emailForm + "." + " You will now receive email updates from Winter Wear Warehouse.")
  var feedText = document.getElementById("feedback")
  feedText.innerHTML = "Thank you " + emailForm + "." + " You will now receive email updates from Winter Wear Warehouse."
}

var cart = []
// Add/Remove items to cart on button toggle
function addCart(item,itemPrice) {
  var i = cart.indexOf(item)
  if (i == -1) {
      cart.push(item)
      console.log(item + " for $" + itemPrice + " has been added to cart.")
  } else {
    cart.splice(item, 1)
    console.log(item + " removed from cart.")
  }
}

// Display Items in Cart when clicking cart button on navbar
function viewCart() {
  console.log("====Items in Cart====")
  for (i = 0; i < cart.length; i++) {
    console.log(cart[i])
  }
  console.log("You have " + cart.length + " total items in your cart.")  
}

//initialize BS tooltip on add to cart button
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})