const Square = ({id, player, newState}) => {
  const [color, setColor] = React.useState('green');
  const [status, setStatus] = React.useState(null);     //<--- keeps track of X or O
  const xo = ["O", "X"]                                 //<--- array used to display X or O (based on who's turn it is)
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
        let nextPlayer = newState({id:id, color:col});  //<--- updates the state, uh, state (basically a log), and captures the next player in nextPlayer
        setStatus(nextPlayer);
        e.target.style.background = col;
    }}>
      {xo[status]}                                      {/* call the array and pass in status to display either X or O, based on their turn! */}
    </button>
  )
};

const Board = () => {
  const [player, setPlayer] = React.useState(1);      //<--- changed the way Player is handled, so when a player clicks it's either "O" or "X"
  const [state, setState] = React.useState([]);

  let status = `Player ${player}`;                    //<--- no longer an integer, will now be X or O

  const newState = (object) => {                      //<--- now this function is used for setting the next player
    let nextPlayer = (player + 1) % 2;                //<--- calculates the next player (this will be an index later)
    setPlayer(nextPlayer);                            //<--- sets them
    setState([...state, object]);                     //<--- updates the state, uh, state (basically a log at this point)
    status = `Player ${nextPlayer}`;                  //<--- writes up a status of who's next
    return nextPlayer;                                //<--- returns (!) the next player, so whoever calls this receives nextPlayer
  };

  function renderSquare(i) {
    return <Square id={i} player={player} newState={newState}></Square>
  };

  return (
    <div className="game-board">
      <div className="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div id="info">
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
