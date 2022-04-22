/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
let game;

document.addEventListener('click', e => {
  if (e.target.textContent === 'Start Game') {
    game = new Game();
    game.resetGame();
    game.handleInteractions(e.target);
  } else if (e.target.classList.contains('key')) {
    game.handleInteractions(e.target);
  }
});

document.addEventListener('keyup', e => {
  let keys = [...document.querySelectorAll('.key')];
  let item = keys.find(item => item.textContent === e.key);
  if (item.classList.contains('key')) {
    game.handleInteractions(item);
  }
});
