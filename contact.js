document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); //Prevent page reload
    //Get name and use for alert
    var _name = document.getElementById("name").value;
    alert(
      "Thank you for your message " +
        _name +
        ", we will respond as soon as possible",
    );
    this.reset(); //Reset the form
  });