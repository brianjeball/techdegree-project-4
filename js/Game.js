const phrase = new Phrase();

class Game {
  constructor(missed, phrases) {
     this.missed = missed;
     this.phrases = phrases; // array of Phrases in app.js
  }

  /* Selects random phrase from the phrases array.*/
  /* Returns the random phrase */
  getRandomPhrase() {
    var randomPhrase = phrases[Math.floor(Math.random() * phrases.length)]; 
    console.log(randomPhrase);
    return randomPhrase.toUpperCase().split(''); // converts letter to uppercase and splits into array
  } // End of getting Random Phrase

  handleInteraction(clickedLetter) { // check letter
    if (phrase.checkLetter(clickedLetter) == true) { // checkLetters returns true || false and if true
      phrase.showMatchedLetter(clickedLetter); // letter is shown in hidden phrase 
      this.checkForWin(); // checks for win
      // console.log('this entered the if')
    } else {
      this.removeLife();
      //console.log('this entered the else')
      //console.log(this.missed);
    }
  } // End of handleInteration


  /** this method removes a life, removes a heart from the board, 
    * and, if the player is out of lives, ends the game.
  **/
  removeLife() {
    const tries = $('.tries'); // 
    this.missed += 1; // adds one each time life removed
    if (this.missed < 5) { // if total misses are less than 5 
      tries[0].remove() // remove the first life
    } else if (this.missed === 5) { // if all lives are lost
      this.gameOver(); // run gameOver function
      //console.log('Game Over')
    }
  } // *End of removeLife
  

  // this method checks to see if the player has selected all of the letters.
  checkForWin() {
     const phraseLength = $("div ul li.letter").length;
    // //console.log(phraseLength);
     const matchedLength = $("div ul li.match").length;
    // //console.log(matchedLength);
    
     if ( phraseLength === matchedLength ) { // if phrase is completed
       this.gameOver();
    //} else if ( this.missed === 5) {
    //   console.log ('caller false')
    //   this.gameOver();
     }
    // return caller
  } // End of checkfForWin

  // this method displays a message if the player wins or a different message if they lose.
  gameOver() {
    $('#overlay').css("display","block"); // sets overlay dispaly to block, to be changed depending of game status

    const message = $('#game-over-message')
    const overlay = $('#overlay')

    const startButt = $('#btn__reset');

    if ( this.missed === 5  ) { // Game Lost if all lives are gone
      message.text('You Lose'); // Game Over message to "You Lose"
      overlay.show().addClass('lose');
      startButt.text('Try Again'); // reset button text to "Try Again"
    } else { // Or player Wins!
      message.text('You Win'); // Game Over message to "You Win"
      overlay.show();
      startButt.text('Try Another'); // reset button text to "Try Another"
    }
  } // End of gameOver

  /* calls the getRandomPhrase() method
  * adds that phrase to the board by calling the Phrase class' addPhraseToDisplay() method.
  */
  startGame() {
    this.missed = 0; // sets total missed to 0
    let gamePhrase = this.getRandomPhrase(); // stores function in variable
    new Phrase(gamePhrase).addPhraseToDisplay() // passes the phrase array  to get random and then display
  } // End of startGame

}
