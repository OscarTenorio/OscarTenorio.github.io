const Square = () => {                            //<--- reminder that React components need to start with capital letters
  return (                                        //<-- defines that a square is just a button
    <button>  
    </button>
  )
};

const Board = () => {
  const [player, setPlayer] = React.useState(0);  //<--- stuff not beng used right now, probably will be used later
  let status = `Player: ${(player + 1)}`;

  function renderSquare(i) {                      //<--- the function that renders squares by calling the Square component
    return <Square></Square>                      //    NOTE: i isn't being used yet in this video
  };

  return (
    <div
      className="game-board">
        <div className="grid-row">                              {/* removed onClick for now, created an element with grid-row styling... */}
          {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}   {/* ...and rendered 3 Squares, which are being given a parameter not used yet */}
        </div>
      <div id="info">
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================

// onClick={e => {                                 //<--- this is the removed onClick logic, I'm keeping for use later I suspect
//   setPlayer((player + 1) % 2);
//   status = `Player: ${(player + 1)}`;
// }}


ReactDOM.render(<Board />, document.getElementById("root"));
