$(".signUpBtn").click(function () {


	$("#modalForm").css("display", "block")

})



$(".loginBtn").click(function(){

	$("#loginForm").css("display", "block")

})



$(".createParty").click(function(){

	$("#PartyCreationForm").css("display", "block")

})


var config = {
  apiKey: "AIzaSyBd2AVAZK2E9x8cNQe4QRMJ_kOphSwWM5I",
  authDomain: "partyfinder-60af5.firebaseapp.com",
  databaseURL: "https://partyfinder-60af5.firebaseio.com",
  projectId: "partyfinder-60af5",
  storageBucket: "partyfinder-60af5.appspot.com",
  messagingSenderId: "630607357209"
};
firebase.initializeApp(config);

var dataBaseRef = firebase.database().ref();

function initMap() {
  // The location of Uluru
  var charlotte = { lat: 35.227085, lng: -80.843124 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: charlotte
  });

  dataBaseRef.on("child_added", function(snap) {
    var queryURL =
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
      snap.val().userAddress +
      "," +
      snap.val().city +
      "," +
      snap.val().state +
      "&key=AIzaSyB-sqrgZQhEVzmza4QVPrgFp1nOd145WHU";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var position = {
        lat: response.results[0].geometry.location.lat,
        lng: response.results[0].geometry.location.lng
      };
      new google.maps.Marker({ position: position, map: map });
    });
  });
}




  $("#submitBtnParty").on("click", function(){
    dataBaseRef.push({
    userAddress: $("#userAddress").val(),
    maxCapacity: $("#userCapacity").val(),
    city: $("#city").val(),
    state: $("#state").val(),
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  })
  alert("Party-Created")
  $("#PartyCreationForm").css("display", "none");
  return false;
  })

  //   $("#submitBtn").on("click", function(){
  //    dataBaseRef.push({
  //      userName: $("#userName").val(),
  //      userAge: $("#userAge").val(),
  //      userGender: $("#userGender").val(),
  //      userPays: $("#userPays").val(),
  //      dateAdded: firebase.database.ServerValue.TIMESTAMP
  //     });
  //   alert("close the form")
  //   $("#modalForm").css("display", "none")
  //   return false;
  //   });

  //Here we start our child added function, which saves the value 

  dataBaseRef.on("child_added", function(snap) {
      // Log everything that's coming out of snapshot
      console.log(snap.val());

      var tableRow = $("<tr>")

      var tableData = [$("<td>"), $("<td>"), $("<td>"), $("<td>"), $("<td>") ]
//table data creates an array of 5 TD's which are not yet filled, we do that here.
      tableData[0].html(snap.child("dateAdded").val())
      tableData[1].html(snap.child("maxCapacity").val())
      tableData[2].html(snap.child("state").val())
      tableData[3].html(snap.child("userAddress").val())
      tableData[4].html(snap.child("city").val())

//Here we are appending the now filled table datas to the table row, and to the table body
      $("#tableRowAppend").append(tableRow).append(tableData);
      console.log(snap.val())


  });



