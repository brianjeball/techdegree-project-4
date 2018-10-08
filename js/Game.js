class Game {

  getRandomPhrase(array) {
    var randomPhrase = array[Math.floor(Math.random()*array.length)]; /* Selects random phrase from the phrases array.*/
    return randomPhrase.split('').toUpperCase(); /* Returns the randomly selected phrase object. */
  }

  handleInteraction() {

  }

  showMatchedLetter(){

  }

  removeLife() {

  }


  checkForWin() {

  }

  gameOver() {

  }

  startGame() {

  };
}
