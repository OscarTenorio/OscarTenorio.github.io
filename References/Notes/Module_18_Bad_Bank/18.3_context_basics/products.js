function Products(){
    const ctx = React.useContext(UserContext);                  // UserContext defined in index.js:2 and 17 - user is being noted by the page
    ctx.users.push(Math.random().toString(36).substr(2,5));     // creates random string within some arbitrary parameters (strikethrouh code still works here) and adds to user
    return (
        <div>
            <h3>Products Component</h3>

            {JSON.stringify(ctx.users)}
        </div>
    );
}