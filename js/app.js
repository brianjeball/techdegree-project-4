// ******** CONSTANTS
const game = new Game();

const phrases = [
  'Dark Knight',
  'Scott Pilgrim',
  'Kung Fu Kenny',
  'Redemption',
  ];

//resetDisplay(): this function hides the start screen overlay.
function resetDisplay() {
  $('#overlay').remove();
}

//markButton(): this function is called when a player selects a letter. 
//It disables the button on the onscreen keyboard and calls the handleInteraction() method of the Game class.
function markButton() {
  $('#qwerty button').on('click', (evt) => {
    evt.target.disabled = true;
    evt.target.classList.add('chosen');
    // $(this).attr('disabled', 'disabled')
    // game.handleInteraction(evt.target);
  });
}

// markButton();
//Add event listeners to each of the keyboard buttons, so that clicking a button calls the markButton() function.
window.addEventListener('click', (e) => {
  if (e.target.tagName ==='BUTTON') {
    markButton();
    game.handleInteraction(e);
  }
});

//Add an event listener to the "Start Game" button which calls the resetDisplay() function, creates a new Game object, and starts the game.
$('#btn__reset').on('click', () => {
  resetDisplay();
  // new Game(0, phrases).startGame();
  game.startGame();
});
console.log(game.getRandomPhrase());