const Square = ({id}) => {                          //<--- uses deconstruction to grab the id property
  return (
    <button>{id}                                    {/* for now just displays it to show it received that property */}
    </button>
  )
};

const Board = () => {
  const [player, setPlayer] = React.useState(0);
  let status = `Player: ${(player + 1)}`;

  function renderSquare(i) {                        //<--- renderSquare expects something passed in as a parameter
    return <Square id={i}></Square>                 //<--- pass in i parameter into Square element as an id property
  };                                                //    in preparation for the Square element to use it

  return (
    <div
      className="game-board">
        <div className="grid-row">
          {renderSquare(0)}{renderSquare(1)}{renderSquare(2)} {/* call renderSquare and pass in a number to be used as an id later */}
        </div>
      <div id="info">
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================

// onClick={e => {
//   setPlayer((player + 1) % 2);
//   status = `Player: ${(player + 1)}`;
// }}


ReactDOM.render(<Board />, document.getElementById("root"));
