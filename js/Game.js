class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase('Patience is a virtue'),
      new Phrase('Live life to its fullest'),
      new Phrase('Be like water'),
      new Phrase('Keep calm and carry on'),
      new Phrase('Eat and be merry'),
    ];
    this.activePhrase = null;
  }

  /**
   * Handles user interactions
   * @returns {function} function that begins the game
   */
  handleInteractions(item) {
    if (item.classList.contains('wrong')) {
      return;
    }

    if (this.activePhrase === null) {
      return this.startGame();
    }

    this.activePhrase.checkLetter(item, this.activePhrase.phraseArray);
    if (this.activePhrase.currentLetter) {
      this.activePhrase.showMatchedLetter();
    } else {
      this.removeLife();
    }

    if (this.checkForWin() == true) {
      this.gameOver('You Win', 'win');
    }
  }

  /**
   * Remove Start Game screen and retrieves a random phrase
   */
  startGame() {
    document.querySelector('#overlay').style.display = 'none';
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  /**
   *Resets game so that a new game can be started
   */
  resetGame() {
    this.activePhrase = null;

    let editedKeys = [...document.querySelectorAll('.chosen, .wrong')];
    editedKeys.forEach(item => item.classList.remove('chosen', 'wrong'));

    let phrase = [...document.querySelector('#phrase').querySelectorAll('li')];
    phrase.forEach(item => item.remove());

    this.missed = 0;
    let lives = [...document.querySelectorAll('.tries')];
    lives.forEach(life => (life.firstChild.src = './images/liveHeart.png'));
  }

  /**
   * Selects random phrase from array
   * @returns {Object} randomly selected phrase object
   */
  getRandomPhrase() {
    const phrase =
      this.phrases[Math.floor(Math.random() * this.phrases.length)];
    return phrase;
  }

  /**
   * Removes a life token from screen and game over is checked
   * @returns {function} function inititiating game over because of no remaining lives
   */
  removeLife() {
    this.missed++;

    let lives = Array.from(document.querySelectorAll('.tries'));
    lives[this.missed - 1].firstChild.src = './images/lostHeart.png';

    if (this.missed == 5) {
      return this.gameOver('You Lose', 'lose');
    }
  }

  /**
   * Checks to see if all letters have been displayed
   * @returns {(true|false)} boolean based on whether player has won
   */
  checkForWin() {
    let win = false;
    if (document.querySelectorAll('.hide').length === 0) {
      return (win = true);
    }
    return win;
  }

  /**
   * Ends game and displays game over screen
   */
  gameOver(message, overlayType) {
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'flex';
    overlay.classList.add(overlayType);
    overlay.querySelector('h1').textContent = message;
  }
}
