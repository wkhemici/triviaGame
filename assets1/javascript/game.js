$(document).ready(function () {

    console.log("is loaded!");
    //this uses jQuery to select the name selected in a radio button and see if it's been checked, the saves its value
    // $('input[name="genderS"]:checked').val();



    $("#submit").click(function (event) {
        event.preventDefault();
        var points = document.getElementById("#true");
        points++;
        console.log("song", $('input[name="song"]:checked').val());
        alert("Game over! You scored" + points + "points out of 3.");

        })
    

    //then reset form after the alert 
    //right now, the alert shows if there is 1 win.. but won't count it up to 2 or 3. 
  
   


    })
