//new
let currentEvent;
var CLIENT_ID = "601954114317-c10280jjsdfouibgm5uerhdo59laoqi6.apps.googleusercontent.com";
var API_KEY = "AIzaSyBZJcuSuQ60EoER2xhWtbKj_8_-zwZkgWA";

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/calendar";

var authorizeButton = document.getElementById('authorize-button');
var signoutButton = document.getElementById('signout-button');
var addEventButton = document.getElementById('add-event');

/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
    gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
    }).then(function() {
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

        // Handle the initial sign-in state.
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        // authorizeButton.onclick = handleAuthClick;
        // signoutButton.onclick = handleSignoutClick;
    });
}
$(document).on('click', '#loginAccount', function(event) {
    event.preventDefault();
    console.log("working")
    var newUser = {
        email: $("#emailField").val().trim(),
        password: $("#passwordField").val().trim()
    };
    $.ajax({
        method: "POST",
        url: "/signin",
        data: newUser
    }).done(function(data) {
        console.log("working2")
    });
    // $.post("/signin", function(newUser) {
    //     console.log(newUser);
    //   })
    //   .then(function(data) {
    //     console.log(newUser)
    //     console.log(data);
    //     for (let i = 0; i < data.length; i++) {
    //       if (newUser.email === data[i].email && newUser.password === data[i].password) {
    //         console.log("woo")
    //         return;
    //       } else {
    //         console.log("boo");
    //       }
    //     }
    //   });
    // $("#emailField").val("");
    // $("#passwordField").val("")
});
/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        $(".authorizeButton").addClass("btn btn-primary btn-lg rounded-pill");
        $("signoutButton").addClass("btn btn-primary btn-lg rounded-pill");
        $("addEventButton").addClass("btn btn-primary btn-lg rounded-pill");
    } else {
        $(".authorizeButton").addClass("btn btn-primary btn-lg rounded-pill");
        $("signoutButton").addClass("btn btn-primary btn-lg rounded-pill");
    }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}


/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
    var pre = document.getElementsByClassName('content');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
}

/**
 * Print the summary and start datetime/date of the next ten events in
 * the authorized user's calendar. If no events are found an
 * appropriate message is printed.
 */



// var addEvent = document.getElementById('add-event');

//addEvent.onclick = eventFun;
function eventFun() {

    var request = gapi.client.calendar.events.insert({
        'calendarId': 'primary',
        'resource': currentEvent
    });

    request.execute(function(event) {
        appendPre('Event created: ' + event.summary);
    });
};

$("body").on("click", ".authorize-button", function() {
    gapi.auth2.getAuthInstance().signIn();
    initClient();
});

$("body").on("click", "#signout-button", function() {
    gapi.auth2.getAuthInstance().signOut();
});

$("#add-event").on("click", function() {
    currentEvent = Event;
    eventFun();
});

$("#add-event2").on("click", function() {
    currentEvent = Event2;
    eventFun();
});

$("#add-event3").on("click", function() {
    currentEvent = Event3;
    eventFun();
});

$("#add-event4").on("click", function() {
    currentEvent = Event4;
    eventFun();
});

$("#add-event5").on("click", function() {
    currentEvent = Event5;
    eventFun();
});

$("#add-event6").on("click", function() {
    currentEvent = Event6;
    eventFun();

});

$("#add-event7").on("click", function() {
    currentEvent = Event7;
    eventFun();

});


$(document).ready(function () {
    // Send an AJAX POST-request with jQuery
    $.get("/api/charities", function (data, status) {
        console.log(data);


    })

});