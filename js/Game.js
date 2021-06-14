class Game {
    constructor ( ) {
        this.missed = 0,
        this.phrases = [
            'Let other pens dwell upon guilt and misery',
            'He who destroys a good book destroys reason itself',
            'The soul becomes dyed with the color of its thoughts',
            'Reality leaves a lot to the imagination',
            'Eat and be merry'
        ],
        this.activePhrase = null
    }

    startGame () {
        // Hides start game overlay
        overlay.style.display = 'none' 
        // Retrieves random phrase
        this.getRandomPhrase();
        // Creates phrase object and prints to DOM
        phrase = new Phrase (this.activePhrase);
        phrase.addPhraseToDisplay();
        this.handleInteractions(phrase);
    }
    resetGame () {
        phrase.removePhraseFromDisplay()
        this.restoreLives()
        phrase.clearKeyboard()
        this.missed = 0
    }

    handleInteractions (phrase) {
        qwerty.addEventListener( 'click', e => {
            phrase.checkLetter(e);
            this.removeLife(e);
            this.checkForWin();
            this.gameOver();
        })
    }

    getRandomPhrase () { this.activePhrase = this.phrases[ Math.floor( Math.random() * this.phrases.length ) ] }

    removeLife (e) {
        if ( e.target.classList.contains( 'wrong' ) ) {
            tries[ this.missed - 1 ].src = '../images/lostHeart.png'
        } 
  
    }

    restoreLives () {
        for ( let i = 0 ; i < tries.length; i++) {
            tries[i].src = '../images/liveHeart.png'
        }
    }
    
    checkForWin () {  
        if ( document.querySelectorAll('.hide').length === 0 ) {
            overlay.classList.remove( 'lose' );
            overlay.classList.add( 'win' );
            overlay.style.display = 'flex';
            this.resetGame()
        }
    }
        
    gameOver () {
        if ( document.querySelectorAll('.wrong').length === 5 ) {
            overlay.classList.remove( 'win' );
            overlay.classList.add( 'lose' );
            overlay.style.display = 'flex';
            this.resetGame()
        }
    }
}
