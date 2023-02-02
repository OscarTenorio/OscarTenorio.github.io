import React from "react";
// import UserContext from './spa'
import 'bootstrap/dist/css/bootstrap.css';

// const ctx = React.createContext(UserContext);
// console.log('Navbar context: ',ctx);

function NavBar() {
  return(
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Bad Bank</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/CreateAccount/">Create Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/login/">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/depositwithdraw/">Deposit/Withdraw</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/balance/">Balance</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/alldata/">All Data</a>
        </li>
      </ul>
    </>
  );
}

export default NavBar;