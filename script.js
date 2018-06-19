
$(".signUpBtn").click(function(){

$("#modalForm").css("display", "block")

})



$(".loginBtn").click(function(){

$("#loginForm").css("display", "block")

})

// Connect our project to FireBase


 var config = {
    apiKey: "AIzaSyBd2AVAZK2E9x8cNQe4QRMJ_kOphSwWM5I",
    authDomain: "partyfinder-60af5.firebaseapp.com",
    databaseURL: "https://partyfinder-60af5.firebaseio.com",
    projectId: "partyfinder-60af5",
    storageBucket: "partyfinder-60af5.appspot.com",
    messagingSenderId: "630607357209"
  };
  firebase.initializeApp(config);




var userName = $("#userName")
var userAge = $("#userAge")
var userGender = $("#userGender")
var userPays = $("#userPays")



// Next we are going to push the input into our backend Database



$(".submitBtn").on("click", function(snap){


var dataBaseRef = firebase.database().ref();

dataBaseRef.child("userName").set(userName.val());
dataBaseRef.child("userAge").set(userAge.val());
dataBaseRef.child("userGender").set(userGender.val());
dataBaseRef.child("userPays").set(userPays.val());

alert("close the form")

$("#modalForm").css("display", "none")


return false;


})



// API








