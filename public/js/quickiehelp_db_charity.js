/* global moment */
// When the page loads, grab and display all of our charities


// When user chirps (clicks addBtn)
$("#charity-btn-submit").on("click", function(event) {
    event.preventDefault();

    // Make a newCharity object

    var newCharity = {
        organization: $("#organizationo").val().trim(),
        orgwebsite: $("#orgwebsiteo").val().trim(),
        firstname: $("#firstnameo").val().trim(),
        lastname: $("#lastnameo").val().trim(),
        title: $("#titleo").val().trim(),
        email: $("#emailo").val().trim(),
        eventname: $("#eventnameo").val().trim(),
        description: $("#descriptiono").val().trim(),
        imageSelect: $("#imageSelecto").val().trim(),
        eventdate: $("#eventdateo").val().trim(),
        eventtime: $("#eventtimeo").val().trim(),
        eventlocation: $("#eventlocationo").val().trim(),
        userinterestdescription: $("#userinterestdescriptiono").val().trim()
    };
    console.log(newCharity);

    // Send an AJAX POST-request with jQuery
    $.post("/api/charities", newCharity);
    var home = function() {
        window.location.href = ('/');
        $.get("/");
    };
    home();

    // Empty each input box by replacing the value with an empty string
    // $("#firstName").val("");
    // $("#lastName").val("");
    // $("#email").val("");
    // $("#password").val("");
    // $("#age").val("");
    // $("#interests").val("");
});


