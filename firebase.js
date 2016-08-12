
(function() {
  
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCUUovEP7SCO5IlVT3srIcGVomGLpW0zGg",
    authDomain: "surhighval.firebaseapp.com",
    databaseURL: "https://surhighval.firebaseio.com",
    storageBucket: "surhighval.appspot.com",
  };
  
  firebase.initializeApp(config);
  
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');
  
  btnLogin.addEventListener('click', function(e) {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    
    const promise = auth.signInWithEmailAndPassword(email, pass); 
    promise.catch(function(e){ console.log(e.message)});
  });
  
  btnSignUp.addEventListener('click', function(e) {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    
    const promise = auth.createUserWithEmailAndPassword(email, pass); 
    promise.catch(function(e){ console.log(e.message)});
  });
  
  btnLogout.addEventListener('click', function(e) {
    firebase.auth().signOut();
  });
  
  firebase.auth().onAuthStateChanged(function(firebaseUser) {
    if(firebaseUser) {
      console.log(firebaseUser);
      btnLogout.classList.remove('hide');
    } else {
      console.log('not logged in');
      btnLogout.classList.add('hide');
    }
  });
  
  
}());