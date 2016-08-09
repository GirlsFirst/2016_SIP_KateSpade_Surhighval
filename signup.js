// TODO: Replace with your project's config object. You can find this
// by navigating to your project's console overview page
// (https://console.firebase.google.com/project/your-project-id/overview)
// and clicking "Add Firebase to your web app"
var config = {
    apiKey: "AIzaSyCUUovEP7SCO5IlVT3srIcGVomGLpW0zGg",
    authDomain: "surhighval.firebaseapp.com",
    databaseURL: "https://surhighval.firebaseio.com",
    storageBucket: "surhighval.appspot.com",
  };

// Initialize your Firebase app
firebase.initializeApp(config);

// Reference to the recommendations object in your Firebase database
var user = firebase.database().ref("user");

// Save a new recommendation to the database, using the input in the form
var signup = function () {

  // Get input values from each of the form elements
  var username = $("#userName").val();
  var email = $("#userEmail").val();
  var password = $("#userPw").val();

  // Push a new recommendation to the database using those values
  user.push({
    "username": username,
    "email": email,
    "password": password
  });
};

// When the window is fully loaded, call this function.
// Note: because we are attaching an event listener to a particular HTML element
// in this function, we can't do that until the HTML element in question has
// been loaded. Otherwise, we're attaching our listener to nothing, and no code
// will run when the submit button is clicked.
$(window).load(function () {

  // Find the HTML element with the id recommendationForm, and when the submit
  // event is triggered on that element, call submitRecommendation.
  $("#accountForm").submit(signup);

});