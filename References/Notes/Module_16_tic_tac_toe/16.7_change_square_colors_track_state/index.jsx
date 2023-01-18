const Square = ({id}) => {
  const [color, setColor] = React.useState('green')                         //<--- first click initializes state to green, random from there
  const colorPalette = ['red','blue','green'];
  const getRandomColor = () => colorPalette[Math.floor(Math.random() * 3)]; //<--- no need to write return since within single line,
                                                                            //    returns colorPalette with a random index between 1 - 3
  return (
    <button color={color} onClick={ e => {
      setColor(getRandomColor());                                           //<--- set color state
      e.target.style.background = color;                                    //<--- use state to change element's color
    }}>{id}
    </button>
  )
};

const Board = () => {
  const [player, setPlayer] = React.useState(0);
  let status = `Player: ${(player + 1)}`;

  function renderSquare(id) {
    return <Square id={id}></Square>
  };

  return (
    <div
      className="game-board" onClick={e => {                        //<--- unrelated to the class - just realized I can re-insert that
        setPlayer((player + 1) % 2);                                //    onClick function and display whose turn it is now
        status = `Player: ${(player + 1)}`;
      }}>
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
