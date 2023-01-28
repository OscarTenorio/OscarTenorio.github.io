import React from 'react';
// import { api } from './api';
import './App.css';

function App() {
  const [items, setItems] = React.useState([]);
  const [value, setValue] = React.useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    // here the simulated API is being used, commented out so the code can run as before using it
    // api.createItem(value).then((persistedItem) => {
    //   setItems([...items, value]);
    //   setValue('');
    // })
    setItems([...items, value]);
    setValue('');
  }

  return (
    <div>
      <h1>TODO</h1>
      <TodoList items={items} />
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">Add Todo: </label>
        <input
          id="new-todo"
          value={value}
          placeholder="Add Todo..."
          onChange={ e => setValue(e.target.value) }
        />
        <button>
          Add #{items.length + 1}
        </button>
      </form>
    </div>
  );


  function TodoList(props) {
    return (
      <ul>
        {props.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  };
};

export default App;
