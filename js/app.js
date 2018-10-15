// ******** CONSTANTS

const game = new Game(0, phrases);
const phrase = [
  'Dark Knight',
  'Scott Pilgrim',
  'Kung Fu Kenny',
  'Redemption',
  ];


//resetDisplay(): this function hides the start screen overlay.
function resetDisplay() {
  return $('#btn__reset').on('click', function(){$('#overlay').hide()});
}

//markButton(): this function is called when a player selects a letter. It disables the button on the onscreen keyboard and calls the handleInteraction() method of the Game class.
function markButton() {

}


//Add an event listener to the "Start Game" button which calls the resetDisplay() function, creates a new Game object, and starts the game.

//Add event listeners to each of the keyboard buttons, so that clicking a button calls the markButton() function.

window.addEventListener('click', (e) => {
  if (e.target.tagName ==='BUTTON') {
    markButton();
  }
});

/**
 * Listens for click
 */
window.addEventListener('click', (e) => {
  if (e.target == $('#btn__reset')){
    game.startGame();
    resetDisplay();
  }
});

// document.getElementById('btn__reset').on('click', function(){
//     console.log('btn__reset Clicked');
//     resetDisplay();
//     //game.startGame();
// });
