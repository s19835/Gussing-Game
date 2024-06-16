const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  const num = Math.floor(Math.random() * 100 - 1);
  
  function guessingGame() {
    readline.question("Guess the Number, between 1 - 100: ", (guess) => {
      if (guess == num) {
        console.log("You Win!");
      }
      if (guess > num) {
        console.log("High");
        guessingGame();
      }
      if (guess < num) {
        console.log("Low");
        guessingGame();
      }
    });
  }
  
  guessingGame();
  //need modification on num of chances one get, after the game log out need to be modified