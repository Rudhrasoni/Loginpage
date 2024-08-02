let mode = document.querySelector( '#mode');
let body = document.querySelector( 'body' );
let winnerP = document.querySelector( '#winner-player' );


let Color = "light";

mode.addEventListener('click', function() {
    if (Color == "light") {
        Color = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
        winnerP.style.color = "white";


    } else {
        Color = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        winnerP.style.color = "black";
    }
    })



const winner = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

var boxes = document.querySelectorAll('.box');
var resetB =  document.querySelector('#reset-button');

let playerO = true;

boxes.forEach((box)  => {
    box.addEventListener('click', () => {
    
        if (playerO){
            box.innerText = "O";
            playerO  = false;

        } else {
            box.innerText = "X";
            playerO = true;
        }
        box.disabled = true;

        if  (resetB) {
            resetB.addEventListener('click', () => {
                boxes.forEach((box)  => {
                    box.disabled = false;
                    box.innerText = "";
                    winnerP.innerText =  ``;
                    })
                })
            }

            checkWinner();
    })

})

const checkWinner = () => {
    for (let pattern  of winner) {
        let pos1 = boxes[pattern[0]].innerText ;
        let pos2 = boxes[pattern[1]].innerText ;
        let pos3 = boxes[pattern[2]].innerText ;

        if (pos1 === pos2 && pos2 === pos3 && pos1 !== "") {
            winnerP.innerText =  `Player ${pos1} wins!`;

        
        }
    
    }

}


