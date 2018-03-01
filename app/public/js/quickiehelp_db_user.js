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
$("#chirp-submit").on("click", function(event) {
    event.preventDefault();
    // Make a newChirp object
    var newChirp = {
        firstname: $("#author").val().trim(),
        lastname: $("#chirp-box").val().trim(),
        created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
    console.log(newChirp);
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newChirp)
    // On success, run the following code
        .then(function() {
            var row = $("<div>");
            row.addClass("chirp");
            row.append("<p>" + newChirp.firstname + " chirped: </p>");
            row.append("<p>" + newChirp.lastname + "</p>");
            row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");
            $("#chirp-area").prepend(row);
        });
    // Empty each input box by replacing the value with an empty string
    $("#author").val("");
    $("#chirp-box").val("");
});