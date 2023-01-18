// ========!! Problem loading this into index.js file !!========

// Checking for Winner takes a bit of work
// We use JavaScript Sets to check players choices
// against winning combinations
// Online there is more compact version but I prefer this one

//Basically, this file does the checking to see if a player has won yet. ~~~NOTE~~~~: see bottom of file for teacher-provided function

const win = [           //<--- all the winning combinations, notice there are 8 possible winning combinations:
  [0, 1, 2],            //    \
  [3, 4, 5],            //    3 rows
  [6, 7, 8],            //    /
  [0, 3, 6],            //    \
  [1, 4, 7],            //    3 columns
  [2, 5, 8],            //    /
  [0, 4, 8],            //    \
  [2, 4, 6],            //    2 diagonal
];
const checkForWinnerDefault = (gameState) => {     //<--- file method provided, feels weird to me
  // get array of box id's
  // can't be a winner in less than 5 turns
  if (gameState.length < 5) return "No Winner Yet";
  let p0 = gameState.filter((item) => {
    if (item.player == 0) return item;
  });
  p0 = p0.map((item) => item.id);
  let px = gameState.filter((item) => {
    if (item.player == 1) return item;
  });
  px = px.map((item) => item.id);
  if (p0 != null && px != null) {
    var win0 = win.filter((item) => {
      return isSuperset(new Set(p0), new Set(item));
    });
    var winX = win.filter((item) => {
      return isSuperset(new Set(px), new Set(item));
    });
  }
  if (win0.length > 0) return "Player O ";
  else if (winX.length > 0) return "Player X ";
  return "No Winner Yet";
};
// check if subset is in the set
function isSuperset(set, subset) {
  for (let elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}
// ========================================================================================
// this is the method shown in the video, copied it just in case -----
function checkWinner(state){      //<--- basically loops over 8 possible winning combinations and checks if it matches current combination

  const win = [           //<--- all the winning combinations, notice there are 8 possible winning combinations:
    [0, 1, 2],            //    \
    [3, 4, 5],            //    3 rows
    [6, 7, 8],            //    /
    [0, 3, 6],            //    \
    [1, 4, 7],            //    3 columns
    [2, 5, 8],            //    /
    [0, 4, 8],            //    \
    [2, 4, 6],            //    2 diagonal
];
  for (let i = 0; i < win.length; i++) {          //<--- state[0] === state[1] === state[2] are the same (not null) = winner!!
    const [a, b, c] = win[i];
    if (state[a] === state[b] && state[a] === state[c] && state) {
      return state[a];                            //<--- returns either 0 or 1 (0 = o, x = 1)
    }
  }
  return null;
};
