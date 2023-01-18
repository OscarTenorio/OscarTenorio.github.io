function TodoForm({addTodo}) {
    const [value, setValue] = React.useState('');
    
    addTodo

    const handleSubmit = e => {
        e.preventDefault();     {/*prevent page from refreshing*/}
        if (!value) return;     {/*return from function if input is empty*/}
        addTodo(value);
        setValue('');       {/*make input empty again*/}
    };

    return (
        <form onSubmit={handleSubmit}>  {/*note that functions don't need parenthesis when defined in the part generating the element*/}
            <input
                className="input"
                value={value}
                placeholder="Add Todo..."
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}