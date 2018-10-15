class Game {
  constructor(phrases) {
     this.missed = 0;
     this.phrases = phrases.map((phrase)=> new Phrase(phrase));;
     // this.phrase = this.startGame(phrases);
     // this.phrase = new Phrase;
  }

  getRandomPhrase(array) {
    let pArray = this.phrases;
    var randomPhrase = pArray[Math.floor (Math.random() * pArray.length)]; /* Selects random phrase from the phrases array.*/
    return randomPhrase.split(''); /* Returns the randomly selected phrase object. */
  }
  // const getP = getRandomPhrase(this.phrases);

  handleInteraction() { // check letter

  }

  //
  showMatchedLetter(){

  }

  // this method removes a life, removes a heart from the board, and, if the player is out of lives, ends the game.
  removeLife() {

  }

  // this method checks to see if the player has selected all of the letters.
  checkForWin() {

  }

  // this method displays a message if the player wins or a different message if they lose.
  gameOver() {

  }
  /* calls the getRandomPhrase() method
  * adds that phrase to the board by calling the Phrase class' addPhraseToDisplay() method.
  */
  startGame() {
    
}
