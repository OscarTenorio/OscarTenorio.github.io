const ATMDeposit = ({ onChange, onSubmit }) => {
    return (
      <label className="label huge">
        Deposit:
        <input type="number" onChange={onChange}></input>
        <input type="submit" onSubmit={onSubmit}></input>
      </label>
    );
  };
  
  const Account = () => {
    const [accountState, setAccountState] = React.useState(0);

    const handleChange = e => {
      // console.log(`handleChange: ${e.target.value}`);
      e.preventDefault();
    };
    const handleSubmit = e => {
      e.preventDefault();
      console.log(e.target.value); // <---- cant find exactly where the value is StereoPannerNode, looks to me like (e.target.1.value) from console logging (e.target) -> see future video files for what I arrived at
      let transactionState = e.target.value;
      let totalState =+ transactionState;
      let newTotal = `Account Balance $ ${accountState}`;
      alert(`Account Total = ${accountState}`);
      setAccountState(totalState);
      document.getElementById("total").innerHTML = newTotal;
    };
    return (
      <form onSubmit={handleSubmit}>
        <h2>Account Balance: <span id="total">{accountState}</span></h2>
        <ATMDeposit onChange={handleChange} onSubmit={handleSubmit}> Deposit</ATMDeposit>
      </form>
    );
  };
  // ========================================
  ReactDOM.render(<Account />, document.getElementById("root"));
  