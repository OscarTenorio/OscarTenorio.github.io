// import {checkWinner} from 'winner.js';                 //<--- can't get this working, pasting directly into bottom of this file instead

const Square = ({id, player, newState}) => {              //<--- things the Square should care about (separation of concerns):
  const [color, setColor] = React.useState('green');      //    - what to mark the Square (who clicked it, Board tells us)
  const [status, setStatus] = React.useState(null);       //    - color to display (not really needed but eh minus well)
  const XorO = ["O", "X"]                                   //<--- NOTE: x = 1, o = 0 (will be useful later, see line 58)

  const colorPalette = ['red','blue','green'];
  const getRandomColor = () => colorPalette[Math.floor(Math.random() * 3)];

  React.useEffect(() => {
    console.log(`rendering square id:${id}`);
    return () => console.log(`unmounting square id:${id}`)
  },[]);

  return (
    <button onClick={ e => {
        let col = getRandomColor();
        setColor(col);
        let nextPlayer = newState(id);
        setStatus(nextPlayer);
        e.target.style.background = col;
    }}>
      {XorO[status]}
    </button>
  )
};

const Board = () => {                                 //<--- things the Board should care about (separation of concerns): who clicked where (tell the Square), who is next
  const [player, setPlayer] = React.useState(1);
  const [state, setState] = React.useState([Array(9).fill(null)]);    //<--- creates an Array with 9 nulls

  let status = `Player: ${player}`;
  let winner = checkWinner(state);                        //<--- check for winner (returns null if no winner, see winner.js)
  if (winner != null) status = `Player ${winner} wins!`   //<--- display status as such if winner did not return null

  const newState = idOfSquare => {              //<--- the Board cares about state in relation to the Squares
    let thePlayer = player
    state[idOfSquare] = player;                 //<--- uses current player (X or O) to mark the square, based on it's id
    setState(state);                            //<--- updates that index in the state array with the player (X or O)

    let nextPlayer = (player + 1) % 2;
    setPlayer(nextPlayer);
    return thePlayer;                            //<--- return current player (using thePlayer to avoid the updated player from line 39)
  };

  function renderSquare(i) {
    return <Square id={i} player={player} newState={newState}></Square>
  };

  return (
    <div className="game-board">
      <div className="grid-row">                  {/* create 9x9 squares on Board */}
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="grid-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="grid-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div id="info">
        <h1>{status}</h1>                         {/* used to declare winner by index of XorO array*/}
      </div>
    </div>
  );
};

// ========================================
// contents of winner.js (the part used in this code) pasted directly in here instead, see line 1

function checkWinner(state){      //<--- basically loops over 8 possible winning combinations and checks if it matches current combination

  const win = [           //<--- all the winning combinations, notice there are 8 possible winning combinations:
    [0, 1, 2],            //    \
    [3, 4, 5],            //    3 rows
    [6, 7, 8],            //    /
    [0, 3, 6],            //    \
    [1, 4, 7],            //    3 columns
    [2, 5, 8],            //    /
    [0, 4, 8],            //    \
    [2, 4, 6],            //    2 diagonal
];
  for (let i = 0; i < win.length; i++) {          //<--- state[0] === state[1] === state[2] are the same (not null) = winner!!
    const [a, b, c] = win[i];
    if (state[a] === state[b] && state[a] === state[c] && state) {
      return state[a];                            //<--- returns either 0 or 1 (0 = o, x = 1)
    }
  }
  return null;
};


// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
