// TODO: add logic to prevent buttons showing when they go under a number (probably implement 'stockmin' for stock minimum, and render if greater than stock minimum)

// Ex 3 - write out all items with their stock number
// provide a button and use onClick={moveToCart} to move 1 item into the Shopping Cart
// use React.useState to keep track of items in the Cart.
// use React.useState to keep track of Stock items
// list out the Cart items in another column
function NavBar({ stockitems }) {
  const [cart, setCart] = React.useState([]);
  const [stock, setStock] = React.useState(stockitems);
  // const { Button } = ReactBootstrap;
  //^ commented out since getting console error that ReactBootStrap wasn't defined for some reason, ughghghgh

  const moveToCart = e => {
    let [name, num] = e.target.innerHTML.split(":"); // innerHTML should be format name:3

    // use newStock = stock.map to find "name" and decrease number in stock by 1
    // only if instock is >=  do we move item to Cart and update stock
    let newStock = stock.map((item, index) => {
      if (item.name == name) item.instock--;
      return item;
    });
    setStock(newStock);
    // ADD ITEM TO CART ------------------------------ (used .push(), it worked!)
    cart.push({name: name, instock: num});
    setCart(cart);
  };


  // removed remembering the index for both .map() methods since it isn't needed to generate elements (console yells at me but that's ok)
  const updatedList = stock.map((item) => {
    return (
      <button onClick={moveToCart} >
        {item.name}:{item.instock}
      </button>
    );
  });
  const updatedCart = cart.map((item) => {
    return (
      <button >
        {item.name}:{item.instock}
      </button>
    );
  });

  // note that React needs to have a single Parent
  return (
    <>
      <ul style={{ listStyleType: "none" }}>{updatedList}</ul>
      <h1>Shopping Cart</h1>
      {/* // RENDER CART ------------------------------ */}
      <ul style={{ listStyleType: "none" }}>{updatedCart}</ul>
    </>
  );
}
const menuItems = [
  { name: "apple", instock: 2 },
  { name: "pineapple", instock: 3 },
  { name: "pear", instock: 0 },
  { name: "peach", instock: 3 },
  { name: "orange", instock: 1 }
];
ReactDOM.render(
  <NavBar stockitems={menuItems} />,
  document.getElementById("root")
);
