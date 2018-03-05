/* global moment */
// When the page loads, grab and display all of our users

// When user chirps (clicks addBtn)
$("#signup-btn-submit").on("click", function(event) {
    event.preventDefault();
    // Make a newUser object
    var newUser = {
        firstname: $("#firstName").val().trim(),
        lastname: $("#lastName").val().trim(),
        email: $("#email").val().trim(),
        password: $("#password").val().trim(),
        age: $("#age").val().trim(),
        interests: $("#interests").val().trim(),

    };
    console.log(newUser);
    // Send an AJAX POST-request with jQuery

    $.post("/api/users", newUser)


    // Empty each input box by replacing the value with an empty string
    $("#firstName").val("");
    $("#lastName").val("");
    $("#email").val("");
    $("#password").val("");
    $("#age").val("");
    $("#interests").val("");
});