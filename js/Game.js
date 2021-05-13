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
        overlay.querySelector('button').addEventListener( 'click', () => overlay.style.display = 'none' );
        this.getRandomPhrase();
        console.log(this.activePhrase);
    }

    getRandomPhrase () { this.activePhrase = this.phrases[ Math.floor( Math.random() * this.phrases.length ) ] }
}

const game = new Game;
game.startGame()