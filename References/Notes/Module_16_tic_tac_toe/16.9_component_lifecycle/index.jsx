const Square = ({id, player}) => {
  const [color, setColor] = React.useState('green')
  const colorPalette = ['red','blue','green'];
  const getRandomColor = () => colorPalette[Math.floor(Math.random() * 3)];

  

  return (
    <button color={color} onClick={ e => {
      console.log(`square id:${id} clicked`);
      // setColor(getRandomColor());
      // e.target.style.background = color;
    }}>
      <div>{id}</div>
      <div>Demo: Player {player + 1}'s turn</div>
    </button>
  )
};

const Board = () => {
  const [player, setPlayer] = React.useState(0);
  const [mounted, setMounted] = React.useState(true);         //<--- uses boolean state for toggling display
  let status = `Turn of Player: ${(player + 1)}`;

  const toggle = () => setMounted(!mounted);                  //<--- when called, sets the state to opposite what it was

  function renderSquare(i) {
    return <Square id={i} player={player}></Square>
  };

  return (
    <div className="game-board"
       onClick={e => {                                        //<--- re-inserted player change when clicking anywhere on board
        setPlayer((player + 1) % 2);
        status = `Turn of Player: ${(player + 1)}`;
      }}
      >
        <div className="grid-row">
          {mounted && renderSquare(0)}                        {/* neat way to check if mounted then render this */}
          {mounted && renderSquare(1)}
          {mounted && renderSquare(2)}
        </div>
      <div id="info">
        <button onClick={toggle}>Show/Hide Row</button>       {/* button to change toggle state using toggle() function */}
        <h1>{status}</h1>                                     {/* NOTE: toggle called without () */}
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
