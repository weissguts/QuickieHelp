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

    $.post("/api/users", newUser);


    // Empty each input box by replacing the value with an empty string
    $("#firstName").val("");
    $("#lastName").val("");
    $("#email").val("");
    $("#password").val("");
    $("#age").val("");
    $("#interests").val("");
});


$("#allUsers").on("click", function(event) {
    event.preventDefault();



$.get("/api/users", function(data) {
  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {
      var row = $("<div>");
      row.addClass("chirp");
      row.append("<p>" + data[i].firstname + "</p>");
      row.append("<p>" + data[i].lastname + "</p>");

     
      $("#eventArea").prepend(row);
    }
  }
});








console.log("SMH");

});

$("#allEvents").on("click", function(event) {
    event.preventDefault();

    $.get("/api/charities", function(data) {
  if (data.length !== 0) {
    for (var i = 0; i < data.length; i++) {
      var row = $("<div>");
      row.addClass("charity");
      row.append("<p>" + data[i].organization + "</p>");
      row.append("<p>" + data[i].orgwebsite + "</p>");
       row.append("<p>" + data[i].firstname + "</p>");
      row.append("<p>" + data[i].lastName + "</p>");
       row.append("<p>" + data[i].title + "</p>");
      row.append("<p>" + data[i].email + "</p>");
       row.append("<p>" + data[i].eventname + "</p>");
      row.append("<p>" + data[i].description + "</p>");
       row.append("<p>" + data[i].eventdate + "</p>");
      row.append("<p>" + data[i].eventtime + "</p>");
       row.append("<p>" + data[i].eventlocation + "</p>");
      row.append("<p>" + data[i].userinterestdescription + "</p>");
       row.append("<p>" + data[i].created_at + "</p>");


     
      $("#userArea").prepend(row);
    }
  }
});



})