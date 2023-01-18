const Square = ({id, player}) => {
  const [color, setColor] = React.useState('green')
  const colorPalette = ['red','blue','green'];
  const getRandomColor = () => colorPalette[Math.floor(Math.random() * 3)];
  console.log(`rendering square id:${id}`);                 //<--- logs when square gets re-rendered
  

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
  const [mounted, setMounted] = React.useState(true);
  const [random, setRandom] = React.useState(0);            //<--- demo state, only here to be changed to show re-rendering
  let status = `Turn of Player: ${(player + 1)}`;

  console.log('Rendering Board elements...')                //<--- logs when board gets re-rendered

  const toggle = () => setMounted(!mounted);
  const reRender = () => setRandom(Math.random());          //<--- method to change state of demo state

  function renderSquare(i) {
    return <Square id={i} player={player}></Square>
  };

  return (
    <div className="game-board"
       onClick={e => {
        setPlayer((player + 1) % 2);
        status = `Turn of Player: ${(player + 1)}`;
      }}
      >
        <div className="grid-row">
          {mounted && renderSquare(0)}
          {mounted && renderSquare(1)}
          {mounted && renderSquare(2)}
        </div>
      <div id="info">
        <button onClick={toggle}>Show/Hide Row</button>
        <button onClick={reRender}>reRender Element</button>   {/* demonstrates: re-rendering an element re-renders it's child elements too */}
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
