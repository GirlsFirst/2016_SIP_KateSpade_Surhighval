  //GetElements from HTML page
  // You shouldn't need to edit this ******************** //
  const txtEmail = document.getElementById('txtEmail');// this allows you to reference these different variables in the javascript file
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');
  const signUpForm = document.getElementById('sign_up_form');
  const btnInfo = document.getElementById('more_info');
  // **************************************************** // 
  // You can edit the two lines below/add more fields, to fit your web app //
  const txtStudentName = document.getElementById('my_name');
  // **************************************************** //

  // You shouldn't need to edit this ****************************
  // Login Function
  btnLogin.addEventListener('click', function(e){ // this line of code means that you are always going to be listening for a click
  	const email = txtEmail.value;
 	const pass = txtPassword.value; 
  	const auth = firebase.auth(); 
  	const promise = auth.signInWithEmailAndPassword(email,pass).then(function() {//this function runs if sign in is successful
  	    // the next two lines clear the input boxes
  	    txtEmail.value = "";
 	    txtPassword.value = "";
  	    }, function(e){
  	    //this function runs if there is a problem with sign-in
  	    console.log(e.message)}
  	    );    
  });
  // **************************************************** //

  // You shouldn't need to edit this *********************//
  // Sign Up Function
  btnSignUp.addEventListener('click', function(e){// this line of code means that you are always going to be listening for a click
  	const email = txtEmail.value;
 	const pass = txtPassword.value; 
  	const auth = firebase.auth(); 
  	const promise = auth.createUserWithEmailAndPassword(email,pass).then(function() {
  	    //this function runs if sign in is successful    
  	    txtEmail.value = "";
 	    txtPassword.value = "";
 	    signUpForm.style.display = "block"; // this line shows the sign-up form
  	    }, function(e){
  	    window.alert(e.message);//this function runs if there is a problem with sign-in
  	    console.log(e.message)}
  	    );
  });
  // **************************************************** //

  //Sign-Up part two
  // This function pushes info from the form to the database
  btnInfo.addEventListener('click', function(e){
    // You shouldn't need to edit this *********************//
    signUpForm.style.display = "none"; // hides the extra info form once you've submitted it
    const uid = firebase.auth().currentUser.uid;
    const user_path = firebase.database().ref('users/' + uid); 
    // **************************************************** //
    // You can edit the lines below as needed
    // This is where you'd include any extra fields your web app needs for sign-up
    const studentName = txtStudentName.value; //e.g. extract text from input element
    /* The key names, here student_name and GWC_classroom are what you'll use
       to get info out of the database in my_profile.js. Feel free to add more that 
       correspond to any extra fields you added to the login page. Note: These field names
       cannot be strings, e.g. "student_name", they must be plaintext, e.g. student_name */
    user_path.push(
        {student_name: studentName,
        GWC_classroom: classroom}
        );
    // **************************************************** //
  });
  
  // You shouldn't need to edit this *********************//
  //Logout Function
  btnLogout.addEventListener('click', function(e){
  	firebase.auth().signOut().then(function() {
  	    //this function runs if sign out is successful	    
  	    txtEmail.value = "";
 	    txtPassword.value = "";
  	    }, function(e){
  	    //this function runs if there is a problem with sign-out
  	    console.log(e.message)}
  	    ); 
  });
  // **************************************************** //
  
// You shouldn't need to edit this *********************//
// code to hide or show logout button depending on auth state
 firebase.auth().onAuthStateChanged(function(firebaseUser){ // this function checks the status of if you are logged in or not 
  	if(firebaseUser){
  	    btnLogout.style.display = "block";
  	    console.log("logged in") }
  	else  {
  	    btnLogout.style.display = "none";
  	    console.log("not logged in")}
  	});
// **************************************************** //