$(document).ready(function() {

    //variables
    var rightAnswers = 0; //Number of questions answered correctly
    var wrongAnswers = 0; //Number of questions answered incorrectly

    $("#playGround").hide();
    $("#finished").hide();

    
    //Function that opens the game
    var playGame = function() {
        console.log(1 + 2);
        $("#start").hide();
        $("#playGround").show();
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
        $("#playGround").hide();
        $("#finished").show();
        $("#rightNum").html(rightAnswers);
        $("#wrongNum").html(wrongAnswers);
        wellPlayed();
    }

    var wellPlayed = function() {
        if (rightAnswers >= 5) {
            $('#gameWellPlayed').html("<h2>WELCOME TO RIVENDELL, MR. BAGGINS!</h2>");
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
    $('#done').click(gameDone);

   

    
    
   
})