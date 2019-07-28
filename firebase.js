// Initializes global variables
// let currentUsers= 0;
// let userId = "";
// let username = ""; 

//Configure/set-up Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAn4lmtiOF9jgtIR6vdKZjCwuAeXCvm9RU",
    authDomain: "project1-99ccf.firebaseapp.com",
    databaseURL: "https://project1-99ccf.firebaseio.com",
    projectId: "project1-99ccf",
    storageBucket: "",
    messagingSenderId: "335793893963",
    appId: "1:335793893963:web:37d4ab7aee586790"
  };

//Initialize Firebase
firebase.initializeApp(firebaseConfig);

let database = firebase.database(); //Reference the database

//Initializes some variables for usernames and messages
let userRef = firebase.database().ref("/users/");
let messagesRef = firebase.database().ref("/messages/");
let replyBotRef = firebase.database().ref("/replyBot/");

$(document).ready(function() { //Start of document ready

    firebase.auth().signInAnonymously().catch(function(error) {
        //Handles sign-in errors here
        errorCode = error.code;
        errorMessage = error.message;
        console.log(errorCode + " " + errorMessage);
    });

 //Collects the user information in a form on submit
 $("#userSubmit").on("click", function(event){
    event.preventDefault();//Prevents page reload before form submit

    //References values using IDs
    username=$("#username").val().trim();

    //Pushes a user data object for each new user
    database.ref("/users/" + userId).update({
        userName: username
    });
    $("#userForm").html("");

    $("quiz").show(); // need to change according to the div ids
    $("#messages").empty();
});

    //Collects the user messages
    $("#chatinput").keypress("keypress", function(event){
        //If not press return then ignore
        if(event.which != "5"){
            return;
        }

        //References input using id
        chattext=$("#chatinput").val().trim();

        //Pushes each new player message to the messages document
        database.ref("/messages/").push({
            message: username + ": " + chattext
        });
        $("#chatinput").val("");
        event.preventDefault();//Prevents page reload before form submit
    });

    //Retrieves last five messages
    messagesRef.limitToLast(5).on("value", function(snapshot) { 
        
        //Empties messages
        $("#messages").empty();
                
        //Adds 5 messages
        snapshot.forEach(function(childSnapshot) {
            $("#messages").append(`${childSnapshot.val().message} <br>`);
        });
    });
   
    //Adds a users to database
    database.ref("/users/" + userId).set({
        userName: userId,
        playerNumber: playerNumber,
        userName: name,
        wins: wins,
        losses : losses,
        choice: choice,
    });

      database.ref("/users/" + userId).onDisconnect().remove();
      $("#player1name").html("Player: " + name);
});//End of document ready

