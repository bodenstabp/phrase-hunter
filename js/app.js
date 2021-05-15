const overlay = document.querySelector('#overlay');
const phraseSection = document.querySelector('#phrase');
const qwerty = document.querySelector('#qwerty');
const tries = document.querySelectorAll('.tries');

// Start game with overlay button
overlay.querySelector('button').addEventListener( 'click', () =>  {
    const game = new Game;
    game.startGame();
})
