const overlay = document.querySelector( '#overlay' );
const phraseSection = document.querySelector( '#phrase' );
const qwerty = document.querySelector( '#qwerty' );
const keys = qwerty.querySelectorAll( '.key' );
const tries = document.querySelectorAll( '.tries' );
let game = null;
let phrase = null;
let executed = false;

// User Controls
qwerty.addEventListener('click', e => {
    if ( e.target.classList.contains( 'key' ) ) {
        game.handleInteractions( phrase, e.target ) 
    }
})

document.addEventListener('keyup', e => {
    const phraseLetters = phraseSection.querySelectorAll('li');

    for ( let i = 0; i < phraseLetters.length; i++ ){
        // console.log (e.key);
        if ( e.key === phraseLetters[i].textContent ) {
            phrase.showMatchedLetter(phraseLetters[i]);
            for ( let i = 0 ; i < keys.length ; i++) {
                if ( keys[ i ].innerHTML === e.key) {
                    keys[ i ].classList.add( 'chosen' )
                }
            } 
        }        
    }

    for ( let i = 0 ; i < keys.length ; i++) {
        if ( keys[ i ].innerHTML === e.key && keys[i].classList.contains( 'chosen' ) === false ) {
            keys[ i ].classList.add( 'wrong' );
            game.removeLife(keys[ i ]) 
        }
    } 
    
    game.checkForWin()
    game.gameOver()
}
)

// Start game with overlay button
overlay.querySelector('button').addEventListener( 'click', () =>  {
    if ( game !== null ) game.resetGame();
    game = new Game;
    game.startGame();
  
})




