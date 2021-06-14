class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase(),
        this.phraseArray = [...this.phrase]
    }

    addPhraseToDisplay () {
        // Add array to DOM as hidden list items
        this.phraseArray.forEach( letter => {
            const li = document.createElement( 'li' )
            phraseSection.querySelector( 'ul' ).append( li );
            li.textContent = letter;
            letter === ' ' ? li.setAttribute( 'class', 'space') : li.setAttribute('class', 'hide letter');
        })  
    }

    removePhraseFromDisplay () {
        for ( let i = 0; i < this.phraseArray.length; i++)
        phraseSection.querySelector( 'ul' ).innerHTML = '';
    }
    
    checkLetter(e) {
        const phraseLetters = phraseSection.querySelectorAll('li')
         // Cycles through phrase and displays matching letter
        //  Adds styles to selected keys on keyboard
        if( ( e.target.classList.contains( 'chosen' ) || e.target.classList.contains( 'wrong' ) ) === false ) {
            for ( let i = 0; i < phraseLetters.length; i++ ) {
                if ( e.target.textContent === phraseLetters[i].textContent ) {
                    this.showMatchedLetter(phraseLetters[i]);
                    e.target.classList.add( 'chosen' );
                }
            }
            // If selected item is wrong adds to missed variable and adds styles to selected keys
            if  ( e.target.classList.contains( 'key' ) && e.target.classList.contains( 'chosen' ) == false ) {
                e.target.classList.add( 'wrong' );
                game.missed++;
            }
        }
    }

    clearKeyboard() {
        for ( let i = 0; i < document.querySelectorAll( '.key' ).length; i++ ) {
            document.querySelectorAll( '.key' )[i].classList.remove( 'chosen' );
            document.querySelectorAll( '.key' )[i].classList.remove( 'wrong' );
        }
    }
    
    showMatchedLetter (item) {
        item.classList.remove('hide');
        item.classList.add('show');       
    }
    
}


