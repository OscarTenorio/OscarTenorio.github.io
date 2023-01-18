// This is not a complete or functioning page, didn't get the file and could see the working code up to about line 24
function NavBar({stockitems}) {
  const [cart, setCart] = React.useState([]);
  const [stock, setStock] = React.useState(stockitems);
  const { Button } = ReactBootstrap;


  const moveToCart = (id, e) => { console.log(id);
    let [name, num] = e.target.innerHTML.split(":");
    let newStock = stock.map((item, index) => {
      console.log(`new stock item: ${item}, index: ${index}`);
    });
    setStock(newStock);
  };

  const updatedList = stock.map((item, index) => {
    return <Button onClick={(e) => {moveToCart({ id: 1 },e)}} key={index}>{item.name}:{item.instock}</Button>; 
    // ^ note the anonymous function for 'onClick' to pass in multiple parameters
  });
  return (<>
    <ul style={{listStyleType: "none"}}>{updatedList}</ul>
    <h1>Shopping Cart</h1>
  </>);
};
// --------here ends where I could see the file in the first video, the rest after here is from a different video that seemed to provide relative information--------

const menuItems = [
  { name: "apple", instock: 2},
  { name: "pineapple", instock: 3},
  { name: "pear", instock: 0},
  { name: "peach", instock: 3},
  { name: "orange", instock: 1}
];

ReactDOM.render(
  <NavBar menuitems={menuItems}/>,
  document.getElementById("root")
);
  