const firebaseConfig = {
    apiKey: "AIzaSyBnLXCki8RHBZBIa_4V0qPidQVmcLSzbXE",
    authDomain: "mab-mandi.firebaseapp.com",
    databaseURL: "https://mab-mandi-default-rtdb.firebaseio.com",
    projectId: "mab-mandi",
    storageBucket: "mab-mandi.appspot.com",
    messagingSenderId: "698260343238",
    appId: "1:698260343238:web:525506d94761a6cc884ac7",
    measurementId: "G-G2DD2E88RV"
  };

  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference your database
  var contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var message = getElementVal('message');
    
    saveMessages(name, email, message);

    //enable alert
    document.querySelector(".alert").style.display = "block";

    setTimeout(()=> {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //reset the form
    document.getElementById("contactForm").reset()
}

const saveMessages = (name, email, message) =>{
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        email: email,
        message: message
    });
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
};