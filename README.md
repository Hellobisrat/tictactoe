# tictactoe

# State Variables:

squares: Keeps track of the state of each square on the tic-tac-toe board.

isXTurn: Determines whether it's player X's turn.

status: Keeps track of the current status of the game (e.g., whose turn it is, or if there's a winner).

# Square Component:

A functional component that represents a single square on the tic-tac-toe board.

Takes value and onClick as props.

function Square({ value, onClick }) {
  return <button onClick={onClick} className="square">{value}</button>;
}

# getWinner Function:

Checks if there is a winner based on predefined winning patterns.

Returns the winning symbol (either 'X' or 'O') if there is a winner, otherwise returns null.
for (let i = 0; i < winnerPatterns.length; i++) 
Purpose: Loop through each pattern in the winnerPatterns array.

winnerPatterns: An array of arrays, where each sub-array represents a winning combination of indices on the tic-tac-toe board.

const [x, y, z] = winnerPatterns[i];
Purpose: Extract the three indices that form a winning combination from the current pattern.

Example: If winnerPatterns[i] is [0, 1, 2], then x = 0, y = 1, and z = 2.

if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
  return squares[x];
}

This if statement checks whether:

squares[x] is not an empty string (i.e., a move has been made at index x).

squares[x] === squares[y]: The value at index x is the same as the value at index y.

squares[x] === squares[z]: The value at index x is the same as the value at index z.

Purpose: If all conditions are met, it means the same player has occupied all three positions in the winning pattern.

Return: The function returns squares[x], which is either 'X' or 'O', indicating the winner.

Assume the board looks like this:

X | X | X
O | O |  
  |   |  
Array Representation: squares = ['X', 'X', 'X', 'O', 'O', '', '', '', '']

Loop Iteration:

First Pattern: winnerPatterns[0] = [0, 1, 2]

Destructuring: x = 0, y = 1, z = 2

Condition Check:
if (squares[0] && squares[0] === squares[1] && squares[0] === squares[2]) {
  return squares[0]; // Returns 'X'
}
Result: The function returns 'X', indicating player X has won.


# handleClick Function:

Handles the logic for when a square is clicked.

Updates the state of squares and isXTurn.

Prevents clicking on a square that is already filled or if there's already a winner.

function handleClick(getCurrentSquare) {
  let cpySquares = [...squares];
  if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
  cpySquares[getCurrentSquare] = isXTurn ? 'X' : 'O';
  setIsXTurn(!isXTurn);
  setSquares(cpySquares);
}
