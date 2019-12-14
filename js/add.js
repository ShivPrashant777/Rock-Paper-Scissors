
var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissor = document.querySelector("#scissors");
var game = [rock , paper , scissor];
var score = 0;
var scoreDisplay = document.querySelector("#score-count");
var gameState = document.querySelector(".game-state");
var main = document.querySelector(".game");
var h1 = document.querySelector(".center h1");
var prev_score=0;

var left_img = document.querySelector(".left-img");
var right_img = document.querySelector(".right-img");

var img1 = document.createElement("img");
var img2 = document.createElement("img");

gameState.style.display = 'none';
var playAgain  = document.querySelector(".center button");

game.forEach(function(uP,uPick){
     game[uPick].addEventListener("click", function(){
        cPick = Number(Math.floor(Math.random()*3));
        console.log(uPick,cPick);
        gameController(uPick,cPick);
        main.style.display = 'none';
        gameState.style.display = 'flex';
     });
});

playAgain.addEventListener("click" , function(){
    console.log("button-Pressed");
    main.style.display = 'block';
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
    imageSetter(uPick,cPick);
}

function tDisplay(uPick,cPick,score){
    scoreDisplay.textContent = score;
    if(prev_score < score){
        h1.textContent = "YOU WIN";
    }
    else if(prev_score > score){
        h1.textContent = "YOU LOST";
    }
    else if(uPick === cPick){
        h1.textContent == "TIE";
    }
    prev_score = score;
}

function imageSetter(uPick,cPick){
        switch(uPick){
            case 0:
                img1.src = "images/icon-rock.svg";
                left_img.appendChild(img1);
                break;
            case 1:
                img1.src = "images/icon-paper.svg";
                left_img.appendChild(img1);
                break;
            case 2:
                img1.src = "images/icon-scissors.svg";
                left_img.appendChild(img1);
                break;
            

        }
        switch(cPick){
            case 0:
                img2.src = "images/icon-rock.svg";
                right_img.appendChild(img2);
                break;
            case 1:
                img2.src = "images/icon-paper.svg";
                right_img.appendChild(img2);
                break;
            case 2:
                img2.src = "images/icon-scissors.svg";
                right_img.appendChild(img2);
                break;
        }
}