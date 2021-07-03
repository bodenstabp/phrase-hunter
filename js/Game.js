class Game {
    constructor ( ) {
        this.missed = 0,
        this.phrases =  [
            { phrase : 'Eat and be merry' },
            { phrase : 'Live and laugh' },
            { phrase : 'Go out and find your success' },
            { phrase : 'Make something great' },
            { phrase : 'Happiness is a virtue' }
        ],
        this.activePhrase = null
    }

    // See startGame
    startGame () {
        // Hides start game overlay
        overlay.style.display = 'none' 
        this.getRandomPhrase();
        // Creates phrase object and prints to DOM
        phrase = new Phrase (this.activePhrase);
        phrase.addPhraseToDisplay();        
    }

    // See startGame
    resetGame () { 
        phrase.removePhraseFromDisplay();
        this.restoreLives();
        phrase.resetKeyboard();
        this.missed = 0;
    }

    handleInteractions (phrase, e ) { 
            phrase.checkLetter(e);
            this.removeLife(e);
            this.checkForWin();
            this.gameOver();
    }

    // See startGasme^
    getRandomPhrase () { 
        this.activePhrase = this.phrases[ Math.floor( Math.random() * this.phrases.length ) ].phrase
    }

    // See handleInteractions^
    removeLife (e) { 
        if ( e.classList.contains( 'wrong' ) ) {
            tries[ this.missed ].querySelector('img').src = 'images/lostHeart.png' 
            this.missed++;
        }
     }

    //  See handleInteractions^
    restoreLives () { 
        for ( let i = 0 ; i < tries.length; i++) { 
            tries[ i ].firstElementChild.src = 'images/liveHeart.png' } 
        }
    
    // See handleInteractions^
    checkForWin () {  
        if ( document.querySelectorAll('.hide').length === 0 && overlay.classList.contains( 'lose' ) === false ) {
            overlay.classList.remove( 'lose' );
            overlay.classList.add( 'win' );
            overlay.style.display = 'flex';
        }
    }
       
    // See handleInteractions^
    gameOver () {
        if ( document.querySelectorAll('.wrong').length === 5 ) {
            overlay.classList.remove( 'win' );
            overlay.classList.add( 'lose' );
            overlay.style.display = 'flex';
        }
    }
}
