const startGameBtn = document.getElementById('start-game-btn');
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULTSELECTION = ROCK;
let gameSelected = false;

function getPlayerSelection(){
    let selection = prompt(`Please enter your choice : \n${ROCK},\n${PAPER},\n${SCISSORS}`,"").toUpperCase();
    if(!(selection == ROCK || selection == PAPER || selection == SCISSORS)){
        alert(`Wrong selection. we choose ${DEFAULTSELECTION} for you`);
        selection = DEFAULTSELECTION;
    }

    return selection;
}




startGameBtn.addEventListener('click', function(){
    if(gameSelected){
        alert('game already started');
        return;
    }
    gameSelected = true;
    const playerSelection = getPlayerSelection();
    console.log(playerSelection);
});