var playerActive;
var roundScore;
var scores;
var playingGame;

init();



document.querySelector('.roll-dice').addEventListener('click', function() {
    if(playingGame) {
        
        //recording a random number
        var dice = Math.floor(Math.random() * 6) + 1;
        //Display the result of the random number
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'static/images/dice-' + dice + '.png';

        //Update the score if the number obtained is not equal to 1
        if (dice !== 1) {
            //If dice number !== 1 add score to current score
            roundScore += dice;
            document.querySelector('#current-' + playerActive).textContent = roundScore;
        } else {
           //Else other player play 
            changePlayer();
        }
    }    
});

document.querySelector('.hold-score').addEventListener('click', function() {
    if (playingGame) {
        // Add score to global score
        scores[playerActive] += roundScore;

        // Update the UI
        document.querySelector('#score-' + playerActive).textContent = scores[playerActive];

        // Check if the player has won the game equal or more than 100
        if (scores[playerActive] >= 10) {
           
            document.querySelector('#win').textContent = 'YOU WONN ' ;
            gamePlaying = false;
        } else {
            //Next player
            changePlayer();
        }
    }
});

function changePlayer() {
    //Next player
    playerActive === 0 ? playerActive = 1  : playerActive = 0 ; 
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.player-2-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}


document.querySelector('.new-game').addEventListener('click', function() {
    init();
});
function init() {

    //display default image
    document.querySelector('.dice').style.display = 'static/images/dice-6.png';
    document.querySelector('#win').textContent = '' ;
    playingGame = true;
    playerActive = 0;
    scores = [0, 0];
    roundScore = 0;
    document.getElementById('player-0').textContent = 'PLAYER 1';
    document.getElementById('player-1').textContent = 'PLAYER 2';
    document.getElementById('score-0').textContent = '56';
    document.getElementById('score-1').textContent = '83';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';   
}