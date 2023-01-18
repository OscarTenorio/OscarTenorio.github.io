function NavBar({menuitems, minstock}) {
  // const [cart, setCart] = React.useState([]);
  // const [stock, setStock] = React.useState(stockitems);
  // const { Button } = ReactBootstrap;

  const updatedList = menuitems.map((item, index) => {
    if (menuItems.instock >= minstock) {
      return <li key={index} >{item.name}</li>; 
    }
  });
  return (
    <ul style={{listStyleType: "none"}}>{updatedList}</ul>
  );
};

const menuItems = [
  { name: "apple", instock: 2},
  { name: "pineapple", instock: 3},
  { name: "pear", instock: 0},
  { name: "peach", instock: 3},
  { name: "orange", instock: 1}
];
ReactDOM.render(
  <NavBar menuitems={menuItems} minstock={2}/>,
  document.getElementById("root")
);
  