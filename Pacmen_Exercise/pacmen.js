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

var game = document.getElementById('game');

function makePac() {
  let focus = 0
  let direction = 0;
  let velocity = setToRandom(15);
  let position = {x: 0, y: 0};
  // adds Pacman to page, returns object containing their info
  let newimg = document.createElement('img');
  newimg.style.position = 'relative';
  newimg.src = './images/PacMan1.png';
  newimg.width = 50;
  newimg.style.left = position.x + 'px';
  newimg.style.top = position.y + 'px';
  game.appendChild(newimg);
  return {
    position,
    velocity,
    newimg,
    focus,
    direction
  };
};

function update() {
  //loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    // handling offset due to position relative
    let pacWidthMultiplier = pacMen.indexOf(item)
    // alternates Pacman mouth open or closed
    item.focus = (item.focus + 1) % 2;
    // check whether it needs to turn around
    checkPageBounds(item, pacWidthMultiplier);
    item.newimg.src = pacArray[item.direction][item.focus];
    checkCollisions(item, pacWidthMultiplier);
    // decides where it should move
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;
    // applies that adjustment
    item.newimg.style.left = item.position.x + "px";
    item.newimg.style.top = item.position.y + "px";

  });
  setTimeout(update, 80);
};

function checkCollisions(item, multiplier) {
  if (
    item.position.x + item.velocity.x + item.newimg.width > window.innerWidth - (multiplier * item.newimg.width) ||
    item.position.x + item.velocity.x < 0 - (multiplier * item.newimg.width)
  )
    item.velocity.x = -item.velocity.x;
  if (
    item.position.y + item.velocity.y + item.newimg.height > game.offsetHeight - item.newimg.height ||
    item.position.y + item.velocity.y < 0 - item.newimg.height
  )
    item.velocity.y = -item.velocity.y;
}

function checkPageBounds(item, multiplier) {
  // if touching the right edge, go left and vice versa
  if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth - (multiplier * item.newimg.width)){
    item.direction = 1;
  } else if (item.position.x + item.velocity.x < 0 - (multiplier * item.newimg.width)){
    item.direction = 0;
  };
};

function makeOne() {
  if (pacMen.length < 10) {
  pacMen.push(makePac()); // add a new PacMan
  };
};

