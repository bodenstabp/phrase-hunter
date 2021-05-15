class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase(),
        this.phraseArray = [...this.phrase]
        
    }

    addPhraseToDisplay () {
        // Split phrase into array

        // Add array to DOM as hidden list items
        this.phraseArray.forEach( letter => {
            const li = document.createElement('li')
            phraseSection.querySelector('ul').append(li);
            li.textContent = letter;
            letter === ' ' ? li.setAttribute( 'class', 'space') : li.setAttribute('class', 'hide letter');
        })
        
    }
    
    checkLetter() {
        qwerty.addEventListener( 'click', e => {
            for ( let i = 0; i < this.phraseArray.length; i++ ) {
                if ( e.target.textContent === this.phraseArray[i] ) {
                    this.showMatchedLetter();
                } 
            }
        })
    }
    
    showMatchedLetter () {
        const phraseLetters = phraseSection.querySelectorAll('li');
        qwerty.addEventListener('click', e => {
            for ( let i = 0; i < phraseLetters.length; i++ ) {
                if ( e.target.textContent === phraseLetters[i].textContent ) {
                    phraseLetters[i].classList.remove('hide')
                    phraseLetters[i].classList.add('show')
                } else {
                    
                }
            }
        })
    }
    
}


