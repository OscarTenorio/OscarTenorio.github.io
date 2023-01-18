const ATMDeposit = ({onChange}) => {
  return (
    <label className="label huge">
      Deposit:
      <input type="number" onChange={onChange}></input>
      <input type="submit" value="Submit"></input>
    </label>
  )
};

const Account = () => {
  let transactionState = 0;
  // let totalState = 0; <--- replaced with React state below
  const [totalState, setTotalState] = React.useState(0);

  let statusVar = `Account Balance: ${totalState}` // combined status variables into one variable
  console.log('Account Rendered'); // <--- this is proof that everything outside of functions/returns gets called once the state re-renders - careful not to initialize something to 0 for example since it will set that value again!!!

  const handleChange = e => {
    console.log(`handleChange: ${e.target.value}`);
    transactionState = Number(e.target.value);
  };
  const handleSubmit = e => {
    setTotalState(totalState + transactionState); // <--- now using React states properly, also can't use += since only the method can set totalState and not a parameter)
    // statusVar = `Account Balance: ${totalState}`; <--- moved to line 14
    // document.getElementById('total').innerHTML = statusVar; <--- don't do that, will break React eventually hen comparing Shadow DOM to actual DOM
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 id='total'>{statusVar}</h2>
      <ATMDeposit onChange={handleChange}>Deposit</ATMDeposit>
    </form>
  );
};
//==================================================================
ReactDOM.render(<Account/>, document.getElementById('root'));