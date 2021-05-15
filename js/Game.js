class Game {
    constructor  ( ) {
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
        phrase.checkLetter()
    }

    getRandomPhrase () { this.activePhrase = this.phrases[ Math.floor( Math.random() * this.phrases.length ) ] }
}
