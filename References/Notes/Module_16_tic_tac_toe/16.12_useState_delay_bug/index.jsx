const Square = ({id, player}) => {
  const [color, setColor] = React.useState('green');
  const colorPalette = ['red','blue','green'];
  const getRandomColor = () => colorPalette[Math.floor(Math.random() * 3)];
  React.useEffect(() => {
    console.log(`rendering square id:${id}`);
    return () => console.log(`unmounting square id:${id}`)
  },[]);

  return (
    <button onClick={ e => {
      let col = getRandomColor();                   //<--- the bug here is that the state color has a delay before it actually updates -
      // console.log(`square id:${id} clicked`);    //    you can run this and see that even though setColor was used to update the
      setColor(col);                                //    color state, trying to use color to set the background style will use the old
      e.target.style.background = color;            //    value instead. Updating state really happens after the code block has been executed,
    }}>                                             {/*   so don't use the state until after the code block concluded */}
      {id}
    </button>
  )
};

const Board = () => {
  const [player, setPlayer] = React.useState(0);
  // const [mounted, setMounted] = React.useState(true);
  // const [random, setRandom] = React.useState(0);
  let status = `Turn of Player: ${(player + 1)}`;

  // console.log('Rendering Board elements...');

  // const toggle = () => setMounted(!mounted);
  // const reRender = () => setRandom(Math.random());

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
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
      <div id="info">
        {/* <button onClick={toggle}>Show/Hide Row</button>
        <button onClick={reRender}>reRender Element</button> */}
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
