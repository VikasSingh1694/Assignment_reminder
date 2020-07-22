// Initialize Firebase (ADD YOUR OWN DATA)
  var firebaseConfig = {
    apiKey: "AIzaSyAJA6dIaL27LSIVefonRMVAyLcYflKuyqU",
    authDomain: "contact-form-ed40f.firebaseapp.com",
    databaseURL: "https://contact-form-ed40f.firebaseio.com",
    projectId: "contact-form-ed40f",
    storageBucket: "contact-form-ed40f.appspot.com",
    messagingSenderId: "934233120067",
    appId: "1:934233120067:web:41047e43170ac66f6723f6",
    measurementId: "G-5PDY2TL447"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  

  // Save message
  saveMessage(name, email, phone );

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    
  });
}