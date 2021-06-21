const overlay = document.querySelector('#overlay');
const phraseSection = document.querySelector('#phrase');
const qwerty = document.querySelector('#qwerty');
const tries = document.querySelectorAll('.tries');
let game = null;
let phrase = null;
let executed = false;

// Start game with overlay button
overlay.querySelector('button').addEventListener( 'click', () =>  {
    if ( game !== null ) game.resetGame();
    game = new Game;
    game.startGame();
    qwerty.addEventListener('click', e => {
        if ( e.target.classList.contains( 'key' ) ) {
            game.handleInteractions( phrase, e.target ) 
        }
    })
})




