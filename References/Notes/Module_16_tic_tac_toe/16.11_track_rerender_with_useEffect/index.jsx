const Square = ({id, player}) => {
  const [color, setColor] = React.useState('green');
  const colorPalette = ['red','blue','green'];
  const getRandomColor = () => colorPalette[Math.floor(Math.random() * 3)];
  React.useEffect(() => {                                   //<--- useEffect() takes 2 parameters - first is a function, second is the
    console.log(`rendering square id:${id}`);               //    state that fires this function when its state changes. If no 2nd parameter,
    return () => console.log(`unmounting square id:${id}`)  //    fires only once.
  },[]);                                                    // NOTE: it seems that re-rendering really means that the element is being
                                                            //    unmounted then re-mounted - NEEDS VERIFICATION
  return (
    <button color={color} onClick={ e => {
      console.log(`square id:${id} clicked`);
      // setColor(getRandomColor());
      e.target.style.background = getRandomColor();         //<--- demos that if you go directly to the DOM and change something without
    }}>                                                     {/* using the setState method, the console logs on line 6 and 7 don't fire */}
      {id}                                                  {/* since the state isn't changing on the element. Do this if you don't want */}
    </button>                                               //  a rerender of an element but want to make changes, but keep in mind the state
  )                                                         //  will then be out of sync
};
// In the above button text [{id}], removed <div> since it was
// causing weird behavior for onClick events, and instead just
// declared the id in the <button> and used css styling to
// make it look right (compare to previous lesons) - will
// do things this way moving forward
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
