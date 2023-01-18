const App = () => {
    const { useState } = React;
    let [state, setState] = useState([1, 2, 3, 4])
    const handler = index => {
        // code to update state and remove destroyed button
        // [1,3,4]

        // use a variable (newState) to capture the filtered state list (defined on line 3)
        // where a new list is created without the index of the button clicked - this creates
        // a new list of states without the clicked button that then get rendered?
        let newState = state.filter(item => item != index);
        console.log(newState)
        setState(newState)
    }
    let list = state.map((item, index) => {
        return <MyButton onClick={() => handler(item)} key={index}></MyButton>
    })
    return <div>{list}</div>
};

const MyButton = ({ onClick }) => {
    let { Button } = ReactBootstrap
    return <Button onClick={onClick}>Click Me</Button>
}

ReactDOM.render(<App />, document.getElementById("root"));