// Ex 1 - remove all even numbers from the NavBar
// then make a Button for each instead of an <li>
function NavBar({ menuitems }) {
  const { Button } = ReactBootstrap;
  const updatedList = menuitems.filter((listItems, index) => {
    if ((index%2) === 0){
      return <Button key={index.toString()}>{listItems}</Button>;
    };
  });
  // note that React needs to have a single Parent
  return <button style={{ listStyleType: "none" }}>{updatedList}</button>;
}
const menuItems = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NavBar menuitems={menuItems} />,
  document.getElementById("root")
);
