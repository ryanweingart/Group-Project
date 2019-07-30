//Firebase start////////////////////////////////////////////////////////////////////////////////////////////

//Initializes global variables
let userId = "";
let username = "NewUser" + Math.floor(Math.random() * 100);
let currentSchool=""; 
let schoolCity=""; 
let chatMessage="";

//Console.logs global variables
console.log (username);
console.log (currentSchool);
console.log (chatMessage);

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
let usersRef = firebase.database().ref("/users/");
let currentSchoolRef = firebase.database().ref("/currentSchool/");
let schoolCityRef = firebase.database().ref("/schoolCity/"); 
let chatMessageRef = firebase.database().ref("/messages/");

$(document).ready(function() { //Start of document ready

    $("#allQuestions").hide();
    $("#submit").hide();


    //Collects the user information in a form on submit
    $("#startBtn").on("click", function(event){
        event.preventDefault();//Prevents page reload before form submit

        //References values using IDs
        username=$("#username").val().trim();
        currentSchool=$("#currentSchool").val().trim();
        schoolCity=$("#schoolCity").val().trim();
        cityIn = schoolCity;

        //Pushes a user data object for each new user
        database.ref("/users/" + userId).push({
            username: username,
            currentSchool: currentSchool,
            schoolCity: schoolCity,
        });

        $("#startJumbotron").hide();
        $("#allQuestions").show();
        $("#submit").show();

    });

});
//Firebase end/////////////////////////////////////////////////////////////////////////////////////////
