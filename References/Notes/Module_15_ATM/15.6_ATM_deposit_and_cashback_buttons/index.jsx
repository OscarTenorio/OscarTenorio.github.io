const ATMDeposit = ({onChange, isDeposit}) => {
  const choice = ["Deposit", "Withdraw"] // an array that uses true (0) or false (1) to make a selection later
  return (
    <label className="label huge">
      <h3> {choice[Number(!isDeposit)]}</h3> {/* uses the boolean value of isDeposit to select from the choice array to determine what is displayed in this h3 */}
      <input type="number" width="200" onChange={onChange}></input> {/* added a little button styling */}
      <input type="submit" width="200" value="Submit" placeholder="$"></input> {/* added a little button styling */}
    </label>
  )
};

const Account = () => {
  let deposit = 0; // transactionState changed to deposit!!
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true); // managing state of isDeposit to change behavior of submit button

  let statusVar = `Account Balance: ${totalState}`
  // console.log('Account Rendered');

  const handleChange = e => {
    console.log(`handleChange: ${e.target.value}`);
    deposit = Number(e.target.value);
  };
  const handleSubmit = e => {
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit; // ternary operator to do an if/else check - if isDeposit = true, add the deposit to the total, otherise subtract it
    if (newTotal < 0) {
      let remainderArray = newTotal.toString().split('-');
      alert(`You've overdrawn by $${remainderArray[1]}! How COULD you!?`);
      newTotal = 0;
    };
    setTotalState(newTotal);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 id='total'>{statusVar}</h2>
      <button onClick={() => setIsDeposit(true)}>Deposit</button> {/* nameless function used in the onClick event to change the state of isDeposit state */}
      <button onClick={() => setIsDeposit(false)}>Withdraw</button> {/* setting to false to change behavior of submit */}
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit}>Deposit</ATMDeposit> {/* boolean check for isDeposit as an element's attribute */}
    </form>
  );
};
//==================================================================
ReactDOM.render(<Account/>, document.getElementById('root'));