import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function NavBar() {

  // onClick={e => changeActive(e.currentTarget.value)}
  // onClick={e => changeActive(e.currentTarget)}

  return(
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" name="Home" aria-current="page" href="#">Bad Bank Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" name="DepWith" href="#/depositwithdraw/">Deposit/Withdraw</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" name="History" href="#/balancehistory/">Balance History</a>
        </li>
      </ul>
    </>
  );
}

export default NavBar;