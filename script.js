const computerChoice = document.getElementById("computer-choice");
const yourchoice = document.getElementById("your-choice");
let resultD = document.getElementById("result")
let yourTurn;
let computerTurn;
let result;

let btns = document.querySelectorAll("button");
console.log(btns);

btns.forEach((btn)=>{
    btn.addEventListener("click", yourSelection)
})

function yourSelection(e){
    yourTurn = e.target.id;
    yourchoice.textContent = yourTurn;

    computerSelection();
    displayResult();
}

function computerSelection(){
    const randonNumber = Math.floor(Math.random()* 3) + 1
    console.log(randonNumber)
    if (randonNumber === 1) {
        computerTurn = "rock"
        computerChoice.innerText = computerTurn;
    } 
    if (randonNumber === 2) {
        computerTurn = "scissor"
        computerChoice.innerText = computerTurn;
    }
    if (randonNumber === 3) {
        computerTurn = "paper"
        computerChoice.innerText = computerTurn;
    }
}

  function displayResult() {
    if (yourTurn === computerTurn){
        result = "Draw"
    }
    if (computerTurn === "rock" && yourTurn === "paper"){
        result = "You win"
    }
    if(computerTurn === "rock" && yourTurn ==="scissor") {
        result = "You lost !!!"
    }
    if(computerTurn ==="paper" && yourTurn === "scissor"){
        result = "You win"
    }
    if(computerTurn === "paper" && yourTurn === "rock") {
        result = "You lost"
    }
    if(computerTurn==="scissor" && yourTurn === "rock") {
        result = "You win"
    }
    if(computerTurn === "scissor" && yourTurn === "paper"){
        result = "You lost"
    }
    
    resultD.innerText = result;
    }
