class Phrase {
  //The class should include a constructor that accepts a phrase as an argument.
  constructor(phrase) {
    this.phrase = phrase;
  };

/** addPhraseToDisplay(): this adds letter placeholders to the display when the game starts.
*/

  addPhraseToDisplay() {
    // const li = document.createElement('<li>')
    const phrase = this.phrase;
    // const li = "<li class='hide'></li>";
    const li = document.createElement("li");
      li.classList.add("hide");
    const phraseList = $('#phrase ul');
    for (let i = 0; phrase.length; i++) {
      phraseList.append(li);
      li.textContent = phrase[i]

      if(phrase[i] = " ") {
        li.addClass = "space"
      } else {
        li.addClass = "letter"
      }
    }
  }

// checkLetter(): checks to see if letter selected by player matches a letter in the phrase.
  checkLetter(clicked) {
    const theLetter = $('#phrase .letter');
    const found = false
    for (let i = 0; theLetter.length; i++)
      if (theLetter[i].textContent === clicked.toUpperCase()) {
        return found = true;
    }

  }

// showMatchedLetter(): reveals the letter(s) on the board that matches player's selection.
  showMatchedLetter() {
    // $('#phrase li').removeClass('hide').addClass('show');
    document.querySelectorAll('.letter').forEach( letter => {
      if (key === letter.textContent) { letter.classList.add('show');
      }
    });
  }

}
