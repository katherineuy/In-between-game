var count = -1;
var score = 0;

var card1 = document.getElementById("card1").innerHTML =  Math.floor(Math.random()*20)+1;
var card2 = document.getElementById("card2").innerHTML =  Math.floor(Math.random()*20)+1;
var card3 = document.getElementById("card3").innerHTML = "?";
    document.getElementById("round").innerHTML = "Round "+ (count+1);
    
    document.getElementById("btn1").onclick = function () {
        document.getElementById("card1").innerHTML =  Math.floor(Math.random()*20)+1;
        document.getElementById("card2").innerHTML =  Math.floor(Math.random()*20)+1;
        document.getElementById("round").innerHTML = "Round "+ (count+1);
        document.getElementById("deck").innerHTML =  "Card 3: ";
        var card3 = document.getElementById("card3").innerHTML =  Math.floor(Math.random()*20)+1;

        if(card3 < card1 && card3 > card2 ){
            document.getElementById("status").innerHTML = "Nice! You won.";
            score++;
        }
        
        else if( card3 < card2 && card3 > card1  ){
            document.getElementById("status").innerHTML = "Nice! You won.";
            score++;
        }
        
        else{
            document.getElementById("status").innerHTML = "Oh no! You lost.";
            score -= 1;   
        }

        count++;
        if (count ==5){
        document.getElementById("score").innerHTML = "SCORE: " + score;
        document.getElementById("btn1").style.display = "none";
        document.getElementById("btn2").style.display = "none";

        if (score <0){
                document.getElementById("score").innerHTML = "SCORE: "+ score;
            }

        }
        
    };

    document.getElementById("btn2").onclick = function () {
        document.getElementById("card1").innerHTML =  Math.floor(Math.random()*20)+1;
        document.getElementById("card2").innerHTML =  Math.floor(Math.random()*20)+1;
        document.getElementById("round").innerHTML = "Round "+ (count+1);
        document.getElementById("deck").innerHTML =  "Card 3: ";

        var card3 = document.getElementById("card3").innerHTML =  Math.floor(Math.random()*20)+1;

        document.getElementById("status").innerHTML = "No Deal!";
        count++;

        if (count ==5){
        document.getElementById("score").innerHTML = "SCORE: " + score;
        document.getElementById("btn1").style.display = "none";
        document.getElementById("btn2").style.display = "none";

        if (score <0){
                document.getElementById("score").innerHTML = "SCORE: "+ score;
            }
        }
        
        score-=(1/2);   
    };

    //When two cards are identical
    if( card1 == card2){  

        document.getElementById("btn1").innerHTML = "Higher";
        document.getElementById("btn2").innerHTML = "Lower";


        document.getElementById("btn1").onclick = function () {
            document.getElementById("card1").innerHTML =  Math.floor(Math.random()*20)+1;
            document.getElementById("card2").innerHTML =  Math.floor(Math.random()*20)+1;
            document.getElementById("round").innerHTML = "Round "+ (count+1);
            document.getElementById("c3").innerHTML =  "Card 3: ";
            var card3 = document.getElementById("card3").innerHTML =  Math.floor(Math.random()*20)+1;

            if(card3 > card1 && card3 > card2){
                document.getElementById("status").innerHTML = "Nice! You won.";
                score++;
            }

            else if(card3 == card1 && card3 == card2){
                document.getElementById("status").innerHTML = "Oh no! You lost.";
                score--;
            }
            
            else{
                document.getElementById("status").innerHTML = "Oh no! You lost.";
                score--;}
            
            count++;
            
            if (count ==5){
            document.getElementById("score").innerHTML = "SCORE: " + score;
            document.getElementById("btn1").style.display = "none";
            document.getElementById("btn2").style.display = "none";

            if (score <0){
                document.getElementById("score").innerHTML = "SCORE: "+ score;
            }

            }
        };    


        document.getElementById("btn2").onclick = function () {
            document.getElementById("card1").innerHTML =  Math.floor(Math.random()*20)+1;
            document.getElementById("card2").innerHTML =  Math.floor(Math.random()*20)+1;
            document.getElementById("round").innerHTML = "Round "+ (count+1);
            document.getElementById("deck").innerHTML =  "Card 3: ";
            var card3 = document.getElementById("card3").innerHTML =  Math.floor(Math.random()*20)+1;

            if(card3 < card1 && card3 < card2){
                document.getElementById("status").innerHTML = "Nice! You won.";
                score++;
            }
            else if(card3 == card1 && card3 == card2){
                document.getElementById("status").innerHTML = "Oh no! You lost.";
                score--;
            }
            
            else{
                document.getElementById("status").innerHTML = "Oh no! You lost.";
                score--;
            };


            count++;
            if (count ==5){
            document.getElementById("score").innerHTML = "SCORE: " + score;
            document.getElementById("btn1").style.display = "none";
            document.getElementById("btn2").style.display = "none";
            if (score <0){
                document.getElementById("score").innerHTML = "SCORE: "+ score;
            }

        }
 
    };    
}
    
      
    