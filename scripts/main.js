/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


function handValue (hand) {
  var score = 0;
      var aces = [];

      for (var i = 0; i < hand.length; i++) {
          var score = hand[i];
          if (score.length == 1) {
              score += score[0];
          } else {
              aces.push(score);
          }
      }

      for (var j = 0; j < aces.length; j++) {
          if (score + aces[j].score[1] <= 21) {
              score + aces[j].score[1];
          } else {
              score + aces[j].score[0];
          }
      }
      return score;

  };


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
