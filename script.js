function computerPlay() {
    let Math.floor(math.random() * 3) + 1;
    if (computersHand == 1) {
      return "rock"
    }
    else if (computersHand == 2) {
      return "paper"
    }
    else {
      return "scissors"
      }
    }
    
    function capitalLetter(string) {
      originalString = string.toLowerCase();
      newString = originalString[0].toUpperCase + originalString.slice(1);
      return newString;
    }
    
    function singleRound (playersHand, computersHand) {
      switch(computersHand.toLowerCase()) {
        case "rock":
        switch(playersHand.toLowerCase()) {
          case "rock":
            return 'It\'s a draw!';
          case "paper":
            return "Lucky guess!";
          case "scissors":
            return 'That\'s too bad!';
          }
          case "paper":
          switch(playersHand.toLowerCase()) {
            case "rock":
              return 'That's too bad!';
            case "paper":
              return 'It\'s a draw!';
            case "scissors":
              return 'Lucky guess!'
          }
          case "scissors":
          switch(playersHand.toLowerCase()) {
            case "rock":
              return 'Lucky guess!';
            case "paper":
              return 'That\'s too bad!';
            case "scissors":
              return 'It\'s a draw!';
          }
        }
      }
    
    function game() {
    let computerScore = 0;
    let userScore = 0;
    for (let i = 0; i < 5; 1++) {
    let computersHand = computerPlay();
    let round = singleRound(prompt('Do you choose rock, paper or scissors?'),computersHand)
    }
    if (round.includes('Lucky guess!') {
      userScore = userScore + 1;
    } else if (round.includes('It\'s a draw!')) {
      userScore = userScore + 0;
      computerScore = computerScore + 0;
      i = i -1;
    } else {
      computerScore = computerScore + 1;
      }
    }
    console.log(round);
    console.log('You have ${userScore} wins!')
    console.log('Your opponent has ${computerScore} wins!')
    
    if (userScore > computerScore) {
      console.log('You\'re a winner!')
    } else if (userScore < computerScore) {
      console.log('Can\'t win them all!')
    } else {
      console.log('A draw!')
    }
    