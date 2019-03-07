$(document).ready(function () {

    // var myVar = setInterval(myTimer, 1000);
    // function myTimer() {
    //     var d = new Date();
    //     var t = d.toLocaleTimeString();
    //     document.getElementById("#time").innerHTML = t;

        var x = setInterval(function() {
        var seconds = Math.floor((1000 * 60) / 1000);
        document.getElementById("time").innerHTML = seconds + "s ";
        x; 


        console.log("is loaded!");
        //this uses jQuery to select the name selected in a radio button and see if it's been checked, the saves its value
        // $('input[name="genderS"]:checked').val();

        $("#submit").click(function (event) {
            event.preventDefault();
            var points = document.getElementById("#true");
            points++;
            console.log("song", $('input[name="song"]:checked').val());
            alert("Game over! You scored" + points + "points out of 3.");
        });

    });

});