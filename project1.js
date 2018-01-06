for (let i = 0; i < 100; i++) {
  $('#age').append(`
    <option value="${[i]}">${[i]}</option>
`)
};

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCSVExCfvP9TwDQacXgj1lwu1E1uXcq7KI",
    authDomain: "quickiehelp-b8fb4.firebaseapp.com",
    databaseURL: "https://quickiehelp-b8fb4.firebaseio.com",
    projectId: "quickiehelp-b8fb4",
    storageBucket: "quickiehelp-b8fb4.appspot.com",
    messagingSenderId: "1008999421520"
  };
  firebase.initializeApp(config);


var database = firebase.database();

    var firstName = "";
    var lastName = "";
    var email = "";
    var password = "";
    var age = 0;
    var gender = "";

    
    
    // Capture Button Click
    $("#submitButton").on("click", function() {

      event.preventDefault();
      
      firstName = $("#firstName").val().trim();
      lastName = $("#lastName").val().trim();
      email = $("#email").val().trim();
      password = $("#password").val().trim();
      age = $("#age").val().trim();
      gender = $("#gender").val().trim();

      
      database.ref().set({
      	firstName: firstName,
      	lastName: lastName,
        email: email,
        password: password,
        age: age,
        gender: gender

        
      });
    });

 database.ref().on("value", function(snapshot) {
     
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });
