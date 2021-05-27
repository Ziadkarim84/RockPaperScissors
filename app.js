const startGameBtn = document.getElementById('start-game-btn');
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULTSELECTION = ROCK;
const RESULT_DRAW = "DRAW!";
const RESULT_PLAYER_WIN = "PLAYER WINS!";
const RESULT_COMPUTER_WIN = "COMPUTER WINS!";
let gameSelected = false;

getPlayerSelection = () => {
    let selection = prompt(`Please enter your choice : \n${ROCK},\n${PAPER},\n${SCISSORS}`,"").toUpperCase();
    if(!(selection == ROCK || selection == PAPER || selection == SCISSORS)){
        alert(`Wrong selection. we choose ${DEFAULTSELECTION} for you`);
        selection = DEFAULTSELECTION;
    }

    return selection;
}

getComputerSelection = () => {
    let selection = Math.random();
    if(selection < 0.34){
        return ROCK;
    } else if(selection < 0.67){
        return PAPER;
    } else{
        return SCISSORS;
    }
}

getResult = (player,computer) => {
    if(player == computer){
        return RESULT_DRAW;
    } else if(player == ROCK && computer == SCISSORS || player == PAPER && computer == ROCK || player == SCISSORS && computer == PAPER){
        return RESULT_PLAYER_WIN;
    } else{
        return RESULT_COMPUTER_WIN;
    }
}


startGameBtn.addEventListener('click', function(){
    if(gameSelected){
        alert('game already started');
        return;
    }
    gameSelected = true;
    const playerSelection = getPlayerSelection();
    const computerSelection = getComputerSelection();
    const result = getResult(playerSelection,computerSelection);
    console.log(`Player: ${playerSelection}\nComputer: ${computerSelection}\nResult: ${result}`);
    gameSelected = false;
});


//infinite arguments different ways
//*************************************

function infiniteArgumnets(...num){
    for(const i of num){
        console.log(i);
    }
}
//infiniteArgumnets(1,2,3,4,5,6,7,8);

function infiniteArgumnets2(){
    for(const i of arguments){ //arguments doesnt work in arrow functions
        console.log(i);
    }
}
//infiniteArgumnets2(1,2,3,4,5,6,7,8);




//functions within a function(only available within the scope of that function)
/*****************************/


function addNumbers(a,b){
    function validate(num){
        return isNaN(num) ? 0 : num;
    }

    let sum = validate(a) + validate(b);
    console.log(sum)
}

addNumbers('asf',6);