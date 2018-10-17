class Phrase {
  //The class should include a constructor that accepts a phrase as an argument.
  constructor(phrase) {
    this.phrase = phrase;
  };

/** addPhraseToDisplay(): this adds letter placeholders to the display when the game starts.
Each letter is presented by an empty box, one list item for each letter.
See the example_phrase_html.txt file for an example of what the render HTML for a phrase should look like when the game starts.
When the player correctly guesses a letter,
  the empty box is replaced with a the matched letter (see the showMatchedLetter() method below.
Make sure the phrase displayed on the screen doesn't include spaces.
*/

  addPhraseToDisplay() {
    // const li = document.createElement('<li>')
    const li = "<li class='hide'></li>"
    const phraseList = $('#phrase ul');
    for (let i = 0; this.phrase.length; i++) {
      phrase.append(li);
      li.textContent = array[i]

      if(this.phrase[i] = " ") {
        li.addClass = "space"
      } else {
        li.addClass = "letter"
      }
    }
  }

// checkLetter(): checks to see if letter selected by player matches a letter in the phrase.
  checkLetter() {
    $('#qwerty button').on('click', () => {
      for (let i = 0; i < letter.length; i++) {
        if ($(this).text() === letter[i].innerHTML){

        }
      }

    });
  }

// showMatchedLetter(): reveals the letter(s) on the board that matches player's selection.
  showMatchedLetter() {
    removeClass('hide').addClass('show')

  }

}
