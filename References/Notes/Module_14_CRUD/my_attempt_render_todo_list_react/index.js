function App(){
    const [todos, setTodos] = React.useState([
        {
            text: 'learn react',
            isCompleted: false
        },
        {
            text: 'meet friend for lunch',
            isCompleted: false
        },
        {
            text: 'build todo app',
            isCompleted: false
        },
        {
            text: 'upload completed todo app to Github',
            isCompleted: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text: text, isCompleted: false}];     {/*grab previous array of todos, and add a new entry with value from input*/}
        setTodos(newTodos);     {/*use the set method to overwrite previous state with new state*/}
    }

    const removeTodo = index => {
        let temp = [...todos];      {/*temporary handle on previous todos list*/}
        temp.splice(index,1);       {/*actually remove the item using index and splice*/}
        setTodos(temp);     {/*use the temp array, the one that's missing the item removed, as the current todo list state*/}
    }

    return(
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, i) => 
                    <Todo key={i} index={i} todo={todo} remove={removeTodo}/>)}
                <TodoForm addTodo={addTodo}/>
            </div>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
); 