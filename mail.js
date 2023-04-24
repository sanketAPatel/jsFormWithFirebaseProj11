// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAtAP2SquTkozKwKQGGsMBwu5iNVQPL2yY",
    authDomain: "contactform-98302.firebaseapp.com",
    databaseURL: "https://contactform-98302-default-rtdb.firebaseio.com",
    projectId: "contactform-98302",
    storageBucket: "contactform-98302.appspot.com",
    messagingSenderId: "437547944102",
    appId: "1:437547944102:web:b05eea5bcaa155dcb5cc67"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};


//Form Validation

function validateForm() {
  let x = document.forms["myForm"]["fname"]["email"]["msg"].value;
  if (x == "") {
    alert("Name email and msg must be filled out");
    return false;
  }
}