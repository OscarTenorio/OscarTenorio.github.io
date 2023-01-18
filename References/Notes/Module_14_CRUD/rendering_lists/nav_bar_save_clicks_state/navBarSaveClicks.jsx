// use of "props" to set data
function NavBar(props) {
  const [clicks, setClicks] = React.useState([]);

  console.log(`clicks: ${clicks}`);
  // alert(`Rendering NavBar`);

  const list = props.menuitems;
  const { Button } = ReactBootstrap;

  const handleClick = e => {
    setClicks([...clicks, e.target.innerHTML]); /*<--- here is the intresting part, toss in the click as another entry in the 'clicks' array anaging state */
  };
  const updatedList = list.map((listItems, index) => {
    return (
      <Button onClick={handleClick} key={index}>
        {listItems}
      </Button>
    );
  });
  // note that React needs to have a single Parent
  return <ul>{updatedList}</ul>;
}
const menuItems = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NavBar menuitems={menuItems} />,
  document.getElementById("root")
);
