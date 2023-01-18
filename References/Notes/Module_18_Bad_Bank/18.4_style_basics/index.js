// below moved outside of the Spa() function to make it's scope global, so that the nav.js file can access it
// NOTE: important what order you put these! It beaks when Route, Link, and HashRouter are placed below UserContext for some reason
// NOTE 2: above note seems to be totally wrong - not sure why ReactDOM couldn't be read when I moved the placement but it doesn't seem to be repeatedly reproduceable
const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Spa() {
  

  return (
    <HashRouter>
      <div>
          <h1>Routing - Hello World</h1>
          <Nav/>
          <hr/>
          <UserContext.Provider value={{users:['Every Products link click adds a random string to this array']}}>
            <Route path="/" exact    component={Home}     />
            <Route path="/about/"    component={About}    />          
            <Route path="/products/" component={Products} />
          </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
