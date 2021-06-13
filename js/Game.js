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
        const phrase = new Phrase (this.activePhrase);
        phrase.addPhraseToDisplay();
        this.handleInteractions(phrase);
    }

    handleInteractions (phrase) {
        phrase.checkLetter();
        this.removeLife();
        this.checkForWin();
        this.gameOver();
    }

    getRandomPhrase () { this.activePhrase = this.phrases[ Math.floor( Math.random() * this.phrases.length ) ] }

    removeLife () {
        qwerty.addEventListener ( 'click' , e => {
            if ( e.target.classList.contains( 'key' ) ) {
                tries[ this.missed - 1 ].src = '../images/lostHeart.png'
            } 
        })    
    }
    
    checkForWin () { 
        qwerty.addEventListener( 'click', () => {
            if ( document.querySelectorAll('.hide').length === 0 ) {
                overlay.classList.remove( 'lose' );
                overlay.classList.add( 'win' );
                overlay.style.display = 'flex';
                game = null;
            }
        })
    }
        
    gameOver () {
        qwerty.addEventListener('click', () => {
            if ( document.querySelectorAll('.wrong').length === 5 ) {
                overlay.classList.remove( 'win' );
                overlay.classList.add( 'lose' );
                overlay.style.display = 'flex';
            }
        })
    }
}
