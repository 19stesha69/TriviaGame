$(document).ready(function() {

    //variables
    var rightAnswers = 0; //Number of questions answered correctly
    var wrongAnswers = 0; //Number of questions answered incorrectly
    var time= 35;         //Number of seconds to be counted down during quiz
    var stopTime;         //Timer variable

    //$(".titleContainer").hide();
    $(".playGround").hide();
    $(".finished").hide();
    $(".oops").hide();

    
    //Function that opens the game
    var playGame = function() {
        $(".titleContainer").hide();
        $(".oops").hide();
        $(".playGround").show();
        timer();
    }

    //Function that runs the timer
    var timer = function() {
        stopTime = setTimeout(timer, 1000);
        $("#countDown").html(time);

        if (time == -1) {
            $(".playGround").hide();
            $(".oops").show();
            clearTimeout(stopTime);
            time=36;
        }

        time--;
    }

    //Function that tallies up the right and wrong answers
    var whatAreTheAnswers = function() {
        console.log ("is working", 4);
        $('input[id="quest"]').click(function(){
        if($(this).val() === "correct") {
            rightAnswers++;
            console.log("rightAnswers", rightAnswers);
            return rightAnswers;
        } else {
            wrongAnswers++;
            console.log("wrongAnswers", wrongAnswers);
            return wrongAnswers;
        }
        })
    }

    //function that finsihes the game
    var gameDone = function () {
        $(".playGround").hide();
        $(".finished").show();
        $("#rightNum").html(rightAnswers);
        $("#wrongNum").html(wrongAnswers);
        wellPlayed();
    }

    var wellPlayed = function() {
        if (rightAnswers > 5) {
            $('#gameWellPlayed').html("<h2>WELCOME TO RIVENDELL!</h2>");
            $('#endGameImage').append("<img id='elrondImage' src='assets/images/elrond.jpg'>"); 
        } else {
            $('#gameWellPlayed').html("<h2>BEGONE! SERVANT OF THE DARK LORD!</h2>");
            $('#endGameImage').append("<img id='ringwraithsImage' src='assets/images/ringwraiths.png'>");
        }
    }



    //Starts the game
    $('#start').click(playGame); 

    //Adds up the wrong and right answers
    whatAreTheAnswers();

    //Finish the game and see the score
    $('#done').click(function() {
        clearTimeout(stopTime);
        gameDone();
    });

   //Restarts the game after the time runs out

   $("#reStart").click(function() {
        rightAnswers = 0;
        wrongAnswers = 0;
        playGame();
    });

    //Restarts game from .finished div
    
    $("#tryAgain").click(function() {
        rightAnswers = 0;
        wrongAnswers = 0;
        time = 35;
        $("#ringwraithsImage").detach();
        $("#elrondImage").detach();
        $(".finished").hide();
        playGame();
    });



   

    
    
   
})