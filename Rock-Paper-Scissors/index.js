const rps = (p1, p2) => {
    if (p1 === p2) return "Draw!";
    var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
      return "Player 1 won!";
    }
    else {
      return "Player 2 won!";
    }
  };



console.log(rps('rock', 'scissors'))
console.log(rps('scissors', 'paper'))
console.log(rps('paper', 'rock'))

  
console.log(rps('scissors', 'rock'))
console.log(rps('paper', 'scissors'))
console.log(rps('rock', 'paper'))

  
console.log(rps('rock', 'rock'))
console.log(rps('scissors', 'scissors'))
console.log(rps('paper', 'paper'))
