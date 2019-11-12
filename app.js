
// Initialize Firebase(2)
var config = {
    apiKey: "AIzaSyDOipgg1ISy5kDN7RkWGxHLmzRjSRo3zCc",
    authDomain: "vamope-8cc98.firebaseapp.com",
    databaseURL: "https://vamope-8cc98.firebaseio.com",
    projectId: "vamope-8cc98",
    storageBucket: "vamope-8cc98.appspot.com",
    messagingSenderId: "523954666133",
    appId: "1:523954666133:web:5cf677ad5481fa4575399c",
    measurementId: "G-13F1D1316B"
};
firebase.initializeApp(config);  


//Reference for form collection(3)
let formMessage = firebase.database().ref('register');

//listen for submit event//
document.getElementById('registrationform').addEventListener('submit', formSubmit);




//Send Message to Firebase(4)
function sendMessage(email, feedback) {
    let newFormMessage = formMessage.push();
    newFormMessage.set({
      email: email,
      feedback: feedback
    });

}


//Submit form
function formSubmit(e) {
    e.preventDefault();
    // Get Values from the DOM
    let email = document.querySelector('#email').value;
    let feedback = document.querySelector('#feedback').value;

    sendMessage(email, feedback);

    //Show Alert Message
    document.querySelector('.alert').style.display = 'block';

    //Hide Alert Message After Seven Seconds
    setTimeout(function() {document.querySelector('.alert').style.display = 'none';
    }, 300);


    //Form Reset After Submission
    document.getElementById('registrationform').reset();
    

}

