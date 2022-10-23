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

function makePac() {
  let focus = 2
  let direction = 0;
  let velocity = setToRandom(10);
  let coordinates = game.getBoundingClientRect();
  // let position = {x: coordinates.left, y: coordinates.top};
  let position = {x: 0, y: 0};

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
}

function update() {
  //loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    item.focus = (item.focus + 1) % 2;
    item.direction = checkPageBounds(item.direction, item.newimg.width, item.position.x, window.innerWidth);
    item.newimg.src = pacArray[item.direction][item.focus];
    checkCollisions(item);

    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x + "px";
    item.newimg.style.top = item.position.y + "px";

  });
  setTimeout(update, 50);
};

function checkCollisions(item) {
  if (
    item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
    item.position.x + item.velocity.x < 0
  )
    item.velocity.x = -item.velocity.x;
  if (
    item.position.y + item.velocity.y + item.newimg.height > game.offsetHeight - item.newimg.height ||
    item.position.y + item.velocity.y < 0 - item.newimg.height
  )
    item.velocity.y = -item.velocity.y;
}

function checkPageBounds(direction, imgWidth, pos, containerWidth) {
  if (pos + imgWidth >= containerWidth){
    direction = 1;
  } else if (pos < 0){
    direction = 0;
  };
  return direction;
};

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}

