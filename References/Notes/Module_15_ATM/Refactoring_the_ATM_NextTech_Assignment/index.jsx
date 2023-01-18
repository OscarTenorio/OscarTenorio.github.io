// still needs HTML file to render - copy from template
// grabbed from NextTech assignment

const ATMDeposit = ({ onChange, isDeposit, isValid }) => {
    const choice = ['Deposit', 'Cash Back'];
    return (
      <label className="label huge">
        <h3> {choice[Number(!isDeposit)]}</h3>
        <input id="number-input" type="number" width="200" onChange={onChange}></input>
        <input type="submit" width="200" value="Submit" id="submit-input" disabled={!isValid}></input> {/* <---set whether it's disabled based on opposite value of isValid (so it's it's valid then it isn't disabled) */}
      </label>
    );
  };
  
  const Account = () => {
    const [deposit, setDeposit] = React.useState(0);
    const [totalState, setTotalState] = React.useState(0);
    const [isDeposit, setIsDeposit] = React.useState(null);
    const [atmMode, setAtmMode] = React.useState("");
    const [validTransaction, setValidTransaction] = React.useState(false);
  
    let status = `Account Balance $ ${totalState} `;
    // console.log(`Account Rendered with isDeposit: ${isDeposit}`);
  
    const handleChange = (event) => {
      // console.log(`handleChange ${event.target.value}`);
      let change = Number(event.target.value);
      setDeposit(change);
      if (change <= 0) {
        setValidTransaction(false);
        return
      };
      if (atmMode.length === "cash back".length && change > totalState) { //<--- workaround since nextTech refused to evaluate (atmMode === "Cash Back") --- I hate nextTech
        setValidTransaction(false);
      } else {
        setValidTransaction(true);
      };
    };
    const handleSubmit = (event) => {
      let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
      setTotalState(newTotal);
      event.preventDefault();
    };
    let displayATMDiv = null; //<--- used to decide whether to display the ATM div (should display as long as there's a choice between Deposit or Cash Back)
    const handleModeSelect = (event) => {
      let transactionType = event.target.value;
      setAtmMode(transactionType);
      if (transactionType === "Deposit") { // <--- used transactionType instead of isDeposit since the code block doesn't have access to the updated value until after the code block has been executed
        setIsDeposit(true); /*<--- used later to determine whether you're adding or subtracting the subimtted number: true = add */
      } else if (transactionType === "Cash Back") {
        setIsDeposit(false); /*<--- false = subtract */
      } else {
        setIsDeposit(null);
      };
    };
  
    if (isDeposit === true || isDeposit === false) {
    displayATMDiv = true;
    } else {
    displayATMDiv = false;
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2 id="total">{status}</h2>

        <label>Select an action below to continue</label>
        <select onChange={ (e) => handleModeSelect(e) } name="mode" id="mode-select"> {/* pass the event to handleModeSelect() */}
        <option id="no-selection" value=""></option>
        <option id="deposit-selection" value="Deposit">Deposit</option>
        <option id="cashback-selection" value="Cash Back">Cash Back</option>
        </select>
        {/* below is trick to get a div to display based on a true/false from a variable - see "Conditionally render an element" in generalNotes.txt */}
        { displayATMDiv && 
          <ATMDeposit onChange={handleChange} isDeposit={isDeposit} isValid={validTransaction}></ATMDeposit> 
        }
      </form>
    );
  };
  // ========================================
  ReactDOM.render(<Account />, document.getElementById('root'));
  