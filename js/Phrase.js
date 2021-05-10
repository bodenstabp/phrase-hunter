class Phrase {
    constructor (phrase) {
        this.phrase = phrase.toLowerCase()
    }

    addPhraseToDisplay () {
        // Split phrase into array
        const phraseArray = [...this.phrase];
        console.log(phraseArray);

        // Add array to display as hidden list items
        phraseArray.forEach( item => {
            const li = document.createElement('li')
            phraseSection.querySelector('ul').append(li);
            li.textContent = item;
            li.setAttribute('class', 'hide')
        })
        
    }

    showMatchedLetter () {

    }
}

const one = new Phrase("Hellop there")
one.addPhraseToDisplay()