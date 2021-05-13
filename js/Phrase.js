class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase()
    }

    addPhraseToDisplay () {
        // Split phrase into array
        const phraseArray = [...this.phrase];
        console.log(phraseArray);

        // Add array to DOM as hidden list items
        phraseArray.forEach( letter => {
            const li = document.createElement('li')
            phraseSection.querySelector('ul').append(li);
            li.textContent = letter;
            letter === ' ' ? li.setAttribute( 'class', 'space') : li.setAttribute('class', 'hide letter');
        })
        
    }

    showMatchedLetter () {
        const phraseLetters = phraseSection.querySelectorAll('li');
    }
}

const phrase = new Phrase ( game.activePhrase);
phrase.addPhraseToDisplay()

