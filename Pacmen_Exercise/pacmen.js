var pos = 0;
const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];
const pacMen = [];

function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

function setToRandomPosition(x, y) {
  return {
    x: Math.random() * x,
    y: Math.random() * y,
  };
}

var game = document.getElementById('game');
// Factory to make a PacMan
function makePac() {
  // var offsets = document.getElementById('game').getBoundingClientRect();
  // var gameDimensions = document.getElementById('game').getBoundingClientRect();
  let focus = 2
  let velocity = setToRandom(10);
  let position = setToRandomPosition(game.offsetWidth, game.offsetHeight);

  // Add image to div id = game
  let newimg = document.createElement('img');
  newimg.style.position = 'sticky';
  newimg.src = './images/PacMan1.png';
  newimg.width = 50;
  newimg.style.left = position.x + 'px';
  newimg.style.top = position.y + 'px';
  game.appendChild(newimg);
  return {
    position,
    velocity,
    newimg,
    focus
  };
}

var direction = 0;

function update() {
  //loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    item.focus = (item.focus + 1) % 2;
    direction = checkPageBounds(direction, item.newimg.width, item.position.x, game.offsetWidth);
    item.newimg.src = pacArray[direction][item.focus];
    checkCollisions(item);

    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x + "px";
    item.newimg.style.top = item.position.y + "px";

  });
  setTimeout(update, 150);
};

function checkCollisions(item) {
  if (
    item.position.x + item.velocity.x + item.newimg.width > game.offsetWidth ||
    item.position.x + item.velocity.x < 0
  )
    item.velocity.x = -item.velocity.x;
  if (
    item.position.y + item.velocity.y + item.newimg.height > game.offsetHeight ||
    item.position.y + item.velocity.y < 0
  )
    item.velocity.y = -item.velocity.y;
}

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  if (pos + imgWidth >= pageWidth){
    direction = 1;
  } else if (pos < 0){
    direction = 0;
  };
  return direction;
};

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}

