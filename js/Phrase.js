class Phrase {
  //The class should include a constructor that accepts a phrase as an argument.
  constructor() {
    let missed = 0;
    const phrases = [
      'hello',
      'golden',
      'panthers'
    ];
  };

/** addPhraseToDisplay(): this adds letter placeholders to the display when the game starts.
Each letter is presented by an empty box, one list item for each letter.
See the example_phrase_html.txt file for an example of what the render HTML for a phrase should look like when the game starts.
When the player correctly guesses a letter,
  the empty box is replaced with a the matched letter (see the showMatchedLetter() method below.
Make sure the phrase displayed on the screen doesn't include spaces.
*/

  addPhraseToDisplay(array) {
    for (let i = 0; array.length ;i++) {
      const liItem = document.createElement('li');
      // liItem.addClass('letter')
        // document.getElementById('phrase').append(pHold);
        if(array[i]) == " ") {
          liItem.className = "space"
        } else {
          liItem.className = "letter"
        }
    }
  }

// checkLetter(): checks to see if letter selected by player matches a letter in the phrase.
  checkLetter() {
    if(==) {

    }
  }

// showMatchedLetter(): reveals the letter(s) on the board that matches player's selection.
  showMatchedLetter() {

  }

}
