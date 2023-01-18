// challenge was to figure out how to pass value from child to parent without instruction, did not attempt
const Square = ({id, player}) => {
  const [color, setColor] = React.useState('green')                             //<--- not used at the moment
  const colorPalette = ['red','blue','green'];
  const getRandomColor = () => colorPalette[Math.floor(Math.random() * 3)];     //<--- not used at the moment

  return (
    <button color={color} onClick={ e => {
      console.log(`square id:${id} clicked`);
      // setColor(getRandomColor());                                            //<--- not used at the moment
      // e.target.style.background = color;
    }}>
      <div>{id}</div>
      <div>Player: {player + 1}</div>         {/* just demonstrates using the player property passed into square function */}
    </button>
  )
};

const Board = () => {
  const [player, setPlayer] = React.useState(0);
  let status = `Player: ${(player + 1)}`;

  function renderSquare(i) {
    return <Square id={i} player={player}></Square>
  };

  return (
    <div className="game-board"
       onClick={e => {                                        //<--- re-inserted player change when clicking anywhere on board
        setPlayer((player + 1) % 2);
        status = `Player: ${(player + 1)}`;
      }}
      >
        <div className="grid-row">
          {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
        </div>
      <div id="info">
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
