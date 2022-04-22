/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
    this.phraseArray = this.phrase.split('');
    this.currentLetter;
  }

  /**
   * Adds phrase to the display and applies styles to it
   */
  addPhraseToDisplay() {
    const displayedPhrase = document
      .querySelector('#phrase')
      .querySelector('ul');

    const addItemToDisplay = (item, classes) => {
      let li = document.createElement('li');
      li.appendChild(document.createTextNode(item));
      li.setAttribute('class', classes);
      displayedPhrase.appendChild(li);
    };

    for (let i = 0; i < this.phraseArray.length; i++) {
      if (this.phraseArray[i] !== ' ') {
        addItemToDisplay(this.phraseArray[i], 'letter hide');
      } else {
        addItemToDisplay(this.phraseArray[i], 'space');
      }
    }
  }

  /**
   * Checks to see if selected letters match this phrase and adds styles.
   * @param {Object} the letter selected by the player
   * @param {Object} active phrase
   * @returns {string|null} if letter matches returns letter, otherwise returns null
   */
  checkLetter(chosenLetter, hiddenPhrase) {
    let match = null;
    match = hiddenPhrase.filter(letter => chosenLetter.textContent == letter);

    if (match.length !== 0) {
      chosenLetter.classList.add('chosen');
      return (this.currentLetter = chosenLetter.textContent);
    }

    chosenLetter.classList.add('wrong');
    return (this.currentLetter = null);
  }

  /**
   * Displays hidden letters which match selected letter
   */
  showMatchedLetter() {
    if (this.currentLetter) {
      let listItems = Array.from(document.querySelectorAll('.hide'));
      listItems.forEach(item => {
        if (item.textContent == this.currentLetter) {
          item.classList.replace('hide', 'show');
        }
      });
    }
  }
}
