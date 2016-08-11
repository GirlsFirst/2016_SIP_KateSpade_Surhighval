var config = {
    apiKey: "AIzaSyCUUovEP7SCO5IlVT3srIcGVomGLpW0zGg",
    authDomain: "surhighval.firebaseapp.com",
    databaseURL: "https://surhighval.firebaseio.com",
    storageBucket: "surhighval.appspot.com",
  };

  firebase.initializeApp(config);
var myFirebase = firebase.database().ref("flower");


  
// Thanks to https://gist.github.com/hurjas/2660489#file-timestamp-js-L26
function timeStamp() {
  var now = new Date();
  var date = [now.getMonth() + 1, now.getDate(), now.getFullYear()];
  var time = [now.getHours(), now.getMinutes()];
  var suffix = (time[0] < 12) ? "AM" : "PM";
  time[0] = (time[0] < 12) ? time[0] : time[0] - 12;

  for (var i = 1; i < 3; i++) {
    if (time[i] < 10) {
      time[i] = "0" + time[i];
    }
  }

  return date.join("/") + ", " + time.join(":") + " " + suffix;
}

function postComment() {
  var name = document.getElementById("name").value,
      comment = document.getElementById("comment").value,
      time = timeStamp();

  if (name && comment) {
    myFirebase.push({
      name: name,
      comment: comment,
      time: time
    });
  }

  document.getElementById("name").value = '';
  document.getElementById("comment").value = '';
}

function myCallback(snapshot) {
  var comment = snapshot.val();
  addComment(comment.name, comment.comment, comment.time);
}


myFirebase.on("child_added", myCallback);

function addComment(name, comment, timeStamp) {
  var comments = document.getElementById("comments");
  comments.innerHTML = "<hr><h4>" + name + " says<span>" + timeStamp + "</span></h4><p>" + comment + "</p>" + comments.innerHTML;
}

