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
    return randomPhrase.toUpperCase().split('');
    console.log(randomPhrase);
  }

  handleInteraction() { // check letter
    if (phrase.checkLetter()) {
      phrase.showMatchedLetter();
      this.checkForWin();
      console.log('this entered the if')
    } else {
      this.removeLife();
      console.log('this entered the else')
    }

  }


  /** this method removes a life, removes a heart from the board, 
    * and, if the player is out of lives, ends the game.
  **/
  removeLife() {
    this.missed += 1;
    $('.tries').eq([this.missed]).remove();
  }

  // this method checks to see if the player has selected all of the letters.
  checkForWin() {
    if (this.missed === 5) {
      return false;
    } else {
      return true;
    }
  }

  // this method displays a message if the player wins or a different message if they lose.
  gameOver() {
    const goMess = $('#game-over-message')
    const overlay = $('#overlay')

    if (this.checkForWin() = true) {
      goMess.text('You Win');
      overlay.show();
    } else {
      goMess.text('You Lose');
      overlay.show().addClass('lose');
    }
  }

  /* calls the getRandomPhrase() method
  * adds that phrase to the board by calling the Phrase class' addPhraseToDisplay() method.
  */
  startGame() {
    this.missed = 0;
    let gamePhrase = this.getRandomPhrase();
    // phrase.addPhraseToDisplay(gamePhrase);
    new Phrase(gamePhrase).addPhraseToDisplay()
  }


  // $('#btn__reset').on('click', () => {
  //   this.startGame().
  // });
}
