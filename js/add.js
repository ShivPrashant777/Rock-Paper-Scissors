
var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissor = document.querySelector("#scissors");
var game = [rock , paper , scissor];
var score = 0;
var scoreDisplay = document.querySelector("#score-count");

var main = document.querySelector(".game");

var img = ["icon-rock.svg","icon-scissors.svg", "icon-paper.svg"];

game.forEach(function(uP,uPick){
     game[uPick].addEventListener("click", function(){
        cPick = Number(Math.floor(Math.random()*3));
        console.log(uPick,cPick);
        gameController(uPick,cPick);
        });
});

function gameController(uPick,cPick){
  
    if(uPick === 0){
        if(cPick === 1){
            console.log("You Lost");
            score--;
            
        }
        else if(cPick === 2){
            console.log("You Win");
            score++;
           
        }else if(cPick === 0){
            console.log("Tie");
           
        }
    }
    if(uPick === 1){
        if(cPick === 2){
            console.log("You Lost");
            score--;
            
        }
        else if(cPick === 0){
            console.log("You Win");
            score++;
           
        }else if(cPick === 1){
            console.log("Tie");
            
        }
    }
    if(uPick === 2){
        if(cPick === 0){
            console.log("You Lost");
            score--;
            
        }
        else if(cPick === 1){
            console.log("You Win");
            score++;
            
        }else if(cPick === 2){
            console.log("Tie");
            
        }
    }
    tDisplay(uPick,cPick,score);
}

function tDisplay(uPick,cPick,score){
    scoreDisplay.textContent = score;

}