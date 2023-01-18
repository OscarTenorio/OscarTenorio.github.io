function Home(){
    const ctx = React.useContext(UserContext);          // UserContext defined in index.js:2 and 17 - user is being noted by the page
    return (
        <div>
            <h3>Home Component</h3>

            {JSON.stringify(ctx.users)}
        </div>
    );
}