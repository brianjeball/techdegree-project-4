// ******** CONSTANTS
// document.getElementById()

// const game = new Game();


//resetDisplay(): this function hides the start screen overlay.
resetDisplay() {
  document.getElementById('overlay').hide();
  //document.getElementById('overlay').style.opacity = '1';
}

//markButton(): this function is called when a player selects a letter. It disables the button on the onscreen keyboard and calls the handleInteraction() method of the Game class.
markButton() {

}

//Add an event listener to the "Start Game" button which calls the resetDisplay() function, creates a new Game object, and starts the game.

//Add event listeners to each of the keyboard buttons, so that clicking a button calls the markButton() function.

/**
 * Listens for click
 */
document.getElementById('btn__reset').addEventListener('click', function(){
    console.log('btn__reset Clicked')
    resetDisplay();
    //game.startGame();
});
