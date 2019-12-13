
var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissor = document.querySelector("#scissors");
var tri = document.querySelector("#tri");
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

        paper.style.display = "none";
        scissor.style.display = "none";
        tri.style.display = "none";

        rock.style.bottom = 0;
        rock.style.left = 0;

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

        rock.style.display = "none";
        scissor.style.display = "none";
        tri.style.display = "none";

        paper.style.bottom = 0;
        paper.style.left = 0;

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

        rock.style.display = "none";
        paper.style.display = "none";
        tri.style.display = "none";

        scissor.style.bottom = 0;
        scissor.style.left = 0;

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