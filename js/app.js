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
  $('#overlay').hide(); // hides the overlay page
}

//markButton(): this function is called when a player selects a letter. 
//It disables the button on the onscreen keyboard and calls the handleInteraction() method of the Game class.
function markButton(evt) {
  // $('#qwerty button').on('click', (evt) => {
    evt.target.disabled = true; // letter disabled when clicked
    evt.target.classList.add('chosen'); // css changed when letter clicked
    event.target.classList.add(event.target.textContent) // adds the letter as class
    //console.log(evt.target.textContent)      // logs the button letter

  // });
}

// markButton();
//Add event listeners to each of the keyboard buttons, so that clicking a button calls the markButton() function.
$("#qwerty button").on('click', (e) => {
  // if (e.target.tagName ==='BUTTON') {
    markButton(e);
    game.handleInteraction(e.target.innerHTML.toUpperCase());
    //console.log(e.target.textContent);
  // }
});

//Add an event listener to the "Start Game" button which calls the resetDisplay() function, creates a new Game object, and starts the game.
$('#btn__reset').on('click', () => {
  resetDisplay();
  game.startGame();

  //    *********     SAVING CODE BELOW TO CHECK LATER    **********    //

  // if (startButt.text() == 'Try Another' || 'Try Again'){
  //     window.location.reload();
  //     resetDisplay();
  //     game.startGame();
  // } else {
  //     resetDisplay();
  //     game.startGame();
  // }
});
//console.log(game.getRandomPhrase());