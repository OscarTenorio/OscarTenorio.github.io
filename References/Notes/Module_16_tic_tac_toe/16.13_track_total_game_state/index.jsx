const Square = ({id, player, newState}) => {              //<--- include the newState function in the deconstruction
  const [color, setColor] = React.useState('green');      //<--- color state keeps track of color within the Square element 
  const colorPalette = ['red','blue','green'];
  const getRandomColor = () => colorPalette[Math.floor(Math.random() * 3)];

  React.useEffect(() => {
    console.log(`rendering square id:${id}`);
    return () => console.log(`unmounting square id:${id}`)
  },[]);

  return (
    <button onClick={ e => {
        let col = getRandomColor();
        console.log(col)
        setColor(col);
        newState({id:id, color:col});       //<--- call the function that sets the new state inside it, and pass in props (note we pass in col, not color),
        e.target.style.background = col;    //    and thus the Board uses state to keep track of the square states (and accidentally a history too lol)
    }}>
      {id}
    </button>
  )
};

const Board = () => {
  const [player, setPlayer] = React.useState(0);
  const [state, setState] = React.useState([]);             //<--- new state to keep track of total game state, empty array for now
  // console.log(`State array: ${JSON.stringify(state)}}`);
  let status = `Turn of Player: ${(player + 1)}`;

  // const toggle = () => setMounted(!mounted);
  // const reRender = () => setRandom(Math.random());

  const newState = (object) => {        //<--- handles making a newState, and we pass into it an object with an id and color later
    setState([...state, object]);       //<--- grabs current state array and appends object passed to it, while setting/updating state used to track Square states (no on the Board level)
    console.log(`Adding ${JSON.stringify(object)} to state array`);  //<--- print the string version of the object for clarity
  };

  function renderSquare(i) {
    return <Square id={i} player={player} newState={newState}></Square>  //<--- send the Square element the newState function as a prop
  };

  return (
    <div className="game-board">
      <div className="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div id="info">
        {/* <button onClick={toggle}>Show/Hide Row</button>
        <button onClick={reRender}>reRender Row</button> */}
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
