/* global moment */
// When the page loads, grab and display all of our users
$.get("/api/all", function(data) {
    if (data.length !== 0) {
        for (var i = 0; i < data.length; i++) {
            var row = $("<div>");
            row.addClass("chirp");
            row.append("<p>" + data[i].firstname + " chirped.. </p>");
            row.append("<p>" + data[i].lastname + "</p>");
            row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
            $("#chirp-area").prepend(row);
        }
    }
});
// When user chirps (clicks addBtn)
$("#signup-btn-submit").on("click", function(event) {
    event.preventDefault();
    // Make a newUser object
    var newUser = {
        firstname: $("#firstName").val().trim(),
        lastname: $("#lastName").val().trim(),
        email: $("#email").val().trim(),
        password: $("#password").val().trim(),
        // age: $("#age").val().trim(),
        // interests: $("#interests").val().trim(),
        created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
    console.log(newUser);
    // Send an AJAX POST-request with jQuery

    $.post("/api/new", newUser)


    // Empty each input box by replacing the value with an empty string
    $("#firstName").val("");
    $("#lastName").val("");
    $("#email").val("");
    $("#password").val("");
    // $("#age").val("");
    // $("#interests").val("");
});