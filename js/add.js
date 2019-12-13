
var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissor = document.querySelector("#scissors");
var tri = document.querySelector("#tri");
var c_rock = document.querySelector(".c-rock"); 
var c_paper = document.querySelector(".c-paper"); 
var c_scissor = document.querySelector(".c-scisscors"); 
var game = [rock , paper , scissor];
var score = 0;
var scoreDisplay = document.querySelector("#score-count");
var replay = document.querySelector('#replay');

var main = document.querySelector(".game");

var img = ["icon-rock.svg","icon-scissors.svg", "icon-paper.svg"];

game.forEach(function(uP,uPick){
     game[uPick].addEventListener("click", function(){
        cPick = Number(Math.floor(Math.random()*3));
        console.log(uPick,cPick);
        gameController(uPick,cPick);
        });
});

replay.addEventListener('click', () => {
    paper.style.display = "block";
    scissor.style.display = "block";
    tri.style.display = "block";
    rock.style.display = "block";
    rock.style.bottom = '460px';
    rock.style.left = '125px';
    paper.style.bottom = '380px';
    scissor.style.bottom = '530px';
    scissor.style.left = '250px';
    c_paper.style.display = "none";
    c_scissor.style.display = "none";
    c_rock.style.display = "none";
});

function gameController(uPick,cPick){
  
    if(uPick === 0){

        paper.style.display = "none";
        scissor.style.display = "none";
        tri.style.display = "none";

        rock.style.bottom = 0;
        rock.style.left = 0;

        if(cPick === 1){
            c_paper.style.display = "block";
            console.log("You Lost");
            score--;
        }
        else if(cPick === 2){
            c_scissor.style.display = "block";
            console.log("You Win");
            score++;
           
        }else if(cPick === 0){
            c_paper.style.display = "block";
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
            c_scissor.style.display = "block";
            console.log("You Lost");
            score--;
            
        }
        else if(cPick === 0){
            c_paper.style.display = "block";
            console.log("You Win");
            score++;
           
        }else if(cPick === 1){
            c_paper.style.display = "block";
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
            c_paper.style.display = "block";
            console.log("You Lost");
            score--;
            
        }
        else if(cPick === 1){
            c_paper.style.display = "block";
            console.log("You Win");
            score++;
            
        }else if(cPick === 2){
            c_scissor.style.display = "block";
            console.log("Tie");
            
        }
    }
    tDisplay(uPick,cPick,score);
}

function tDisplay(uPick,cPick,score){
    scoreDisplay.textContent = score;

}