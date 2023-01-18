function NavBar() {
  return(
    <>
      {/* <a href='#'>Bad Bank</a>,
      <a href='#/CreateAccount/'>Create Account</a>,
      <a href='#/login/'>Login</a>,
      <a href='#/deposit/'>Deposit</a>,
      <a href='#/withdraw/'>Withdraw</a>,
      <a href='#/balance/'>Balance</a>,
      <a href='#/alldata/'>All Data</a> 
      added bootstrap styling below (above is previous formatting) */}

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