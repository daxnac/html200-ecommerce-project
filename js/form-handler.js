function getEmail() {
  event.preventDefault()
  var emailForm = document.signUp.email.value
  document.signUp.email.value = ""
  console.log("Thank you " + emailForm + "." + " You will now receive email updates from Winter Wear Warehouse.")
  var feedText = document.getElementById("feedback")
  feedText.innerHTML = "Thank you " + emailForm + "." + " You will now receive email updates from Winter Wear Warehouse."
}

