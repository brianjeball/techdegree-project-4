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
  checkLetter(letter) {
      //const clicked = $(this);
        // const found = 0;
        // const theLetter = $('.letter');
        // for (let i = 0; i < theLetter.length; i++) {
        //   if (letter == theLetter[i].textContent) {
        //     theLetter[i].classList.add('match');
        //     found += 1;
        //   }
        // }
        
        // if (found > 0) {
        //   console.log("check letter true");
        //   return true;
        // } else {
        //   console.log("check letter false");
        //   return false;
        // }    

        let found = false;
        const theLetter = $('.letter');
        for(let i = 0; i < theLetter.length; i += 1) {
            if (letter === theLetter[i]) {
                found = true;
                console.log('checkLetter match');
            }
        }
        return found;

  }

// showMatchedLetter(): reveals the letter(s) on the board that matches player's selection.
  showMatchedLetter(click) {
      // $('#phrase li').removeClass('hide').addClass('show');
      document.querySelectorAll('.letter').forEach( letter => {
        if (click.textContent === letter.textContent){ 
          letter.classList.add('show');
          letter.classList.remove('hide');
        }
      });
  
  }

}
