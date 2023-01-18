function Nav(){     // created a Nav component that uses the <Link> tags defined in index.js:6
  return(
  <ul className="nav">        {/* syntax copied from Boostrap site, replacing class with classname since it's a React app */}
    <li className="nav-item">
      <Link className="nav-link" to="/">Home</Link>   {/* Link tags work here despite being defined in index.js because scope was made global in index.js (moved outside of the Spa() component) */}
   </li>
    <li className="nav-item">
      <Link className="nav-link" to="/about/">About</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/products/">Products</Link>
    </li>
  </ul>
  );
}