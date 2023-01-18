function Spa() {    // from React library, much cleaner way to use links without writing so much HTML (and can use browser back/forward buttons)
  const Route       = ReactRouterDOM.Route;           // use Route functionality
  const Link        = ReactRouterDOM.Link;            // describe the link's look
  const HashRouter  = ReactRouterDOM.HashRouter;      // describe the link's behavior

  return (
    <HashRouter>
      <div>
          <h1>Routing - Hello World</h1>
          <Link to="/">Home</Link> --                 {/* "--" just used for visual separation of links */}
          <Link to="/about/">About</Link> -- 
          <Link to="/products">Products</Link>
          <hr/>                                                 {/* just creates a horizontal rule, or line */}
          <Route path="/" exact    component={Home}     />
          <Route path="/about/"    component={About}    />          
          <Route path="/products/" component={Products} />
      </div>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
