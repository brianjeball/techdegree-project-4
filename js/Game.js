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

  }

  handleInteraction() { // check letter
    // const letterClicked = buttonClicked.textContent.toUpperCase();
    // let letterFound = false;
    // const pLetters = document.querySelectorAll('.letter')
    // const classLetter = $()

    if (phrase.checkLetter()) {
      phrase.showMatchedLetter();
      this.checkForWin();
    } else {
      this.removeLife();
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
    // var phrase = new Phrase(this.getRandomPhrase());
    // phrase.addPhraseToDisplay();
    // return phrase;
    let randomPhrase = this.getRandomPhrase();
    // randomPhrase.addPhraseToDisplay(randomPhrase);
    this.missed = 0;
    new Phrase(randomPhrase).addPhraseToDisplay()
  }


  // $('#btn__reset').on('click', () => {
  //   this.startGame().
  // });
}
