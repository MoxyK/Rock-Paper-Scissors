
// Rock, Paper, Scissors //
alert('Are you ready? Beat the computer in a 10 round ultimate battle of Rock, Paper, Scissors!!')
// 5 Rounds * Player vs Computer

// Define 3 Choices * Rock.Paper.Scissors
var choices = ['rock', 'paper', 'scissors'];
// Set score count       
var Won = 0;
var Lost = 0;
// BEGIN LOOP (10x)
for (var i = 0; i < 10; i++) {
// Give AI random choice
var computerPlay = choices[Math.floor(Math.random() * choices.length)];

// Get user to input choice and validate input
var userPlay = prompt('Enter rock, paper or scissors to begin.').toLowerCase();
// Display AI choice
if (userPlay === 'rock' || userPlay === 'paper' || userPlay === 'scissors') {

alert(computerPlay + '!')
// Define Rules: 3 Outcomes * Win.Lose.Tie
  
   // If same = Tie
if (userPlay === computerPlay){alert('A tie! Go again :D')}
   // User Choice: 
else if ((userPlay === 'rock' && computerPlay === 'scissors') || 
(userPlay === 'scissors' && computerPlay === 'paper') || (userPlay === 'paper' && computerPlay === 'rock')) {
Won++;
alert('Nice one! You have ' + Won + ' win(s) so far');
}
   // Else = Lose 
else {Lost++;
alert('Oh dear, thats ' + Lost + ' loss(es) now');
}}}
// END LOOP
// Display score X of 5. Prompt 'Play Again?'
alert('Won: ' + Won + '\nLost ' + Lost + '\nRefresh the page to play again!') 