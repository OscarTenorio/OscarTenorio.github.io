const Board = () => {
  const [player, setPlayer] = React.useState(0);
  let status = `Player: ${(player + 1)}`;
  return (
    <div
      className="game-board"
      onClick={e => {
        setPlayer((player + 1) % 2);
        status = `Player: ${(player + 1)}`;
        e.target.style.background = 'red';            //<--- point of the video was to just demonstrate that
      }}                                              //    you can use the e (event) as a handle/target to change
    >                                                 {/*     an element */}
      <div id="info">
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
