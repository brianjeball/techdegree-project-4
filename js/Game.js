class Game {
  constructor(missed, phrases) {
     this.missed = missed;
     // this.phrases = phrases;
     this.phrases = phrases.map((phrase) => new Phrase(phrase))
  }

  getRandomPhrase() {
    let pArray = this.phrases;
    var randomPhrase = pArray[Math.floor (Math.random() * pArray.length)]; /* Selects random phrase from the phrases array.*/
    return randomPhrase.split(''); /* Returns the randomly selected phrase object. */
  }
  // const getP = getRandomPhrase(this.phrases);

  handleInteraction() { // check letter
    const letterClicked = buttonClicked.textContent.toUpperCase();
    let letterFound = false;

    for (let i = 0; i < document.getElementsByClassName('letter').length; i++){
        if (letterClicked === document.getElementsByClassName('letter')[i].textContent) {
            document.getElementsByClassName('letter')[i].classList.add('show');
            letterFound = true;
        }
    }

    return letterFound ? letterClicked : null;
  }


  // this method removes a life, removes a heart from the board, and, if the player is out of lives, ends the game.
  removeLife() {
    this.missed += 1;
    $('.tries').remove()
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
    randomPhrase.addPhraseToDisplay(randomPhrase);
    this.missed = 0;
  }


  // $('#btn__reset').on('click', () => {
  //   this.startGame().
  // });
}
