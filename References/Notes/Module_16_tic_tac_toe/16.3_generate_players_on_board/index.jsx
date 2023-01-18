const Board = () => {
  const [player, setPlayer] = React.useState(0);          //<--- uses state to keep track of the player count
  let status = `Player: ${(player + 1)}`;                 //<--- sets "status" to render player count later (+1 for math reasons)
  return (
    <div
      className="game-board"
      onClick={(e) => {                                   //<--- sets onClick to increment player count on board by one when clicked
        setPlayer((player + 1) % 2);                      //<--- need to use setPlayer() so state changes and element rerenders, math for toggling
        status = `Player: ${(player + 1)}`;               //<--- +1 again for same math reasons as above
      }}
    >
      <div id="info">
        <h1>{status}</h1>                                 {/*<--- sets player count as h1 to display on board */}
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
