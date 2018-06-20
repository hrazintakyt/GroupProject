$(".signUpBtn").click(function () {


	$("#modalForm").css("display", "block")

})



$(".loginBtn").click(function(){

	$("#loginForm").css("display", "block")

})



$(".createParty").click(function(){

	$("#PartyCreationForm").css("display", "block")

})




// FireBase


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


$("#submitBtnParty").on("click", function(){
	dataBaseRef.push({
		userAddress: $("#userAddress").val(),
		maxCapacity: $("#userCapacity").val(),
		userCost: $("#userCost").val(),
		theme: $("#userTheme").val(),
		dateAdded: firebase.database.ServerValue.TIMESTAMP
	})
	alert("Party-Created")
	$("#PartyCreationForm").css("display", "none");
	return false;

})




	$("#submitBtn").on("click", function(){
		dataBaseRef.push({
			userName: $("#userName").val(),
			userAge: $("#userAge").val(),
			userGender: $("#userGender").val(),
			userPays: $("#userPays").val(),
			dateAdded: firebase.database.ServerValue.TIMESTAMP

		});
	alert("close the form")
	$("#modalForm").css("display", "none")
	return false;
	});

	dataBaseRef.on("child_added", function(snap) {
      // Log everything that's coming out of snapshot
      console.log(snap.val());

      var tableRow = $("<tr>")

      var tableData = [$("<td>"), $("<td>"), $("<td>"), $("<td>"), $("<td>") ]

      var json = JSON.stringify(snap.val())


      	tableData[0].html(snap.child("dateAdded").val())
      	tableData[1].html(snap.child("maxCapacity").val())
      	tableData[2].html(snap.child("theme").val())
      	tableData[3].html(snap.child("userAddress").val())
      	tableData[4].html(snap.child("userCost").val())






      	$("#tableRowAppend").append(tableRow).append(tableData);

		


  	});


