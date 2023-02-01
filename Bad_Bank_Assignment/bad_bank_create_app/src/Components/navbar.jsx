import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

// const UserContext = React.createContext(null);

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
          <a className="nav-link" href="#/deposit/">Deposit</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#/withdraw/">Withdraw</a>
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