const overlay = document.querySelector('#overlay');
const phraseSection = document.querySelector('#phrase');
const qwerty = document.querySelector('#qwerty');
const tries = document.querySelectorAll('img');
let game = null;

// Start game with overlay button
overlay.querySelector('button').addEventListener( 'click', () =>  {
    game = new Game;
    game.startGame();
})



