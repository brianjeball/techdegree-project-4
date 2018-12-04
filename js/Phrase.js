class Phrase {
  //The class should include a constructor that accepts a phrase as an argument.
  constructor(phrase) {
    this.phrase = phrase;
    console.log(phrase);
  };

/** addPhraseToDisplay(): this adds letter placeholders to the display when the game starts.
*/

  addPhraseToDisplay() {
    const phraseList = document.querySelector('#phrase ul');
    const textPhrase = this.phrase;
    // console.log
    
    textPhrase.forEach( letterInPhrase => { // function happens for each letter in phrase
      const li = document.createElement('li');
      phraseList.appendChild(li); // appends each li element (blank box) to the phrase div
      li.setAttribute('class', 'hide'); // automatically hide all li
      li.textContent = letterInPhrase; // adds the letter to the boxes
        // distinguish space and letter character's
        if (letterInPhrase !== ' ') { // if letter in phrase is not a space
          li.className = 'letter'; // add the class of "letter"
        } else {
          li.className = 'space';  // add the class of "space"
        }
          return letterInPhrase;
    });
  } // End of addPhrase

// ********** SAVING CODE BELOW ********** //

// checkLetter(): checks to see if letter selected by player matches a letter in the phrase.
  // checkLetter(letter) {
  //   console.log(letter);
  //   console.log('checkLetter 25' + "   " + letter.target.innerHTML.toUpperCase());
  //     //const clicked = $(this);
  //       //const found = 0;                              // good
  //       const theLetter = $('.letter');               // works
  //       const thePhrase = $('#phrase')
  //       for (let i = 0; i < theLetter.length; i++) {  // works
  //         console.log('checkLetter 30' + "   " + theLetter.text());
  //         //if (letter.target.innerHTML.toUpperCase() === theLetter.text()) {   // works
  //         if (theLetter.text().includes(letter.target.innerHTML.toUpperCase())){
  //           // if the phrase contains the letter
  //           theLetter[i].classList.add('match');      // 
  //           //found += 1;                               // 
  //           console.log("check letter true");
  //         } else {
  //           console.log("check letter false");
  //         }
  //       } 
  // }

  checkLetter(letter) {
    const phraseLi = $('div ul li');
    const phraseLiText = $('div ul li').text().split('');
    const clicked = letter;
    let caller = false;
    //const matchLength = $('.match').length;
    //console.log(clicked);
    
    phraseLi.each(function( index ) { // iterates over each letter in phrase
      //console.log($( this ));
      if ($(this).text() === clicked) { // if letter clicked matches with letter in phrase
        //console.log($(this));
        $(this).addClass('match'); // add a class of "match" to letter in phrase
        caller = true
      } else {
        //console.log('NOT a Match');
        // clicked.parentNode.addClass('wrong');
      }
    })

    // ********** SAVING CODE BELOW *********** //

    // for (let i = 0; i < phraseLi.length; i++) {
    //   const element = phraseLi[i];
    //   console.log(element);
    //   if (phraseLi.text().includes(clicked)) {
    //     console.log("checkletter TRUE")
    //     element.classList.add('match');
    //   } else {
    //     console.log("checkletter FALSE")
    //   }
    // };

    console.log(caller);
    return caller
  } // End of checkLetter


// showMatchedLetter(): reveals the letter(s) on the board that matches player's selection.
  showMatchedLetter(letter) {
    const matched = document.querySelectorAll('.match') // get's all letters with "match" class
    for (let i = 0; i < matched.length; i++) { // loops through every letter with "natch" class
      const el = matched[i];
      el.classList.add('show'); // add "show" class
      el.classList.remove('hide'); // remove "hide" class
      //console.log(matched);
    } // end of for loop

  } // end of showMatchedLetter()

} // End of Phrase Class
