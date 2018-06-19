$(".signUpBtn").click(function () {

    $("#modalForm").css("display", "block")

})



$(".loginBtn").click(function () {

    $("#loginForm").css("display", "block")

})



var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}

// $.ajax({
//     url: "https://maps.googleapis.com/maps/api/js?key=AIzaSyB-sqrgZQhEVzmza4QVPrgFp1nOd145WHU&callback=initMap",
//     method: "GET"
// })