class Phrase {
  //The class should include a constructor that accepts a phrase as an argument.
  constructor(phrase) {
    this.phrase = phrase;
  };

/** addPhraseToDisplay(): this adds letter placeholders to the display when the game starts.
*/

  addPhraseToDisplay() {
    
          const phraseList = document.querySelector('#phrase ul');
          const textPhrase = this.phrase;
          
          textPhrase.forEach(phraseLetter => {
            const li = document.createElement('li');
            phraseList.appendChild(li);
            li.setAttribute('class', 'hide');
            li.textContent = phraseLetter;
            return phraseLetter !== ' ' ? li.className = 'letter' : li.className = 'space';
          });
  }

// checkLetter(): checks to see if letter selected by player matches a letter in the phrase.
  checkLetter() {
      const theLetter = $('#phrase li .letter');
      const found = false
      const clicked = $(this);
      $('#qwerty button').on('click', () => {
      for (let i = 0; i < theLetter.length; i++)
        if (clicked.text() === theLetter[i].innerHTML) {
          this.showMatchedLetter();
          return found = true;
        }
      });


  }

// showMatchedLetter(): reveals the letter(s) on the board that matches player's selection.
  showMatchedLetter() {
    // $('#phrase li').removeClass('hide').addClass('show');
    document.querySelectorAll('.letter').forEach( letter => {
      if ($(this) === letter.textContent){ 
        letter.classList.add('show');
        letter.removeAttribute('class', 'hide')
      }
    });
  }

}
