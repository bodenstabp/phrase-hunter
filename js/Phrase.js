class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase(),
        this.phraseArray = [...this.phrase]
    }

    // See startGame
    addPhraseToDisplay () {
        // Add array to DOM as hidden list items
        this.phraseArray.forEach( letter => {
            const li = document.createElement( 'li' )
            phraseSection.querySelector( 'ul' ).append( li );
            li.textContent = letter;
            letter === ' ' ? li.setAttribute( 'class', 'space') : li.setAttribute('class', 'hide letter');
        })  
    }

    // See startGame^
    removePhraseFromDisplay () {
        for ( let i = 0; i < this.phraseArray.length; i++)
        phraseSection.querySelector( 'ul' ).innerHTML = '';
    }
    
    // See handleInteractions^
    checkLetter(letter) {
        const phraseLetters = phraseSection.querySelectorAll('li')
        if ( letter.classList.contains( 'chosen' || 'wrong' ) === false) {
            for ( let i = 0; i < phraseLetters.length; i++ ){
                if ( letter.textContent === phraseLetters[i].textContent ) {
                    this.showMatchedLetter(phraseLetters[i]);
                    letter.classList.add( 'chosen' );
                }      
            }
            if ( letter.classList.contains( 'chosen' ) === false ) {
                    letter.classList.add( 'wrong' );
            }
        }
        
        
    }

    // See resetGame^
    resetKeyboard() {
        for ( let i = 0; i < document.querySelectorAll( '.key' ).length; i++ ) {
            document.querySelectorAll( '.key' )[i].classList.remove( 'chosen' );
            document.querySelectorAll( '.key' )[i].classList.remove( 'wrong' );
        }
    }
    
    // See checkLetter^
    showMatchedLetter (item) {
        item.classList.remove('hide');
        item.classList.add('show');       
    }
    
}


