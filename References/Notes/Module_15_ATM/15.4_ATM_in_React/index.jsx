// ==================================================================================
// ============== THIS IS COMMENTED-OUT CODE IS PRE-REACT COMPONENT =================
// =====================(copied professor's starter code)============================
// let transactionState = 0; // state of this transaction
// let totalState = 0; // account toal balance
// let statusVar = "Account Balance $zero"

// const handleChange = e => {
//   console.log(`handleChange: ${e.target.value}`);
//   transactionState = Number(e.target.value);
// };
// const handleSubmit = e => {
//   totalState += transactionState;
//   statusVar = `Account Balance ${totalState}`;
//   document.getElementById('total').innerHTML = statusVar;
//   e.preventDefault();
// };
// const props = {handleChange, handleSubmit};

// const ATMDeposit = () => { {/* needs to start with Capital letter for React web components */}
//   return (
//     <label className="label huge">
//       Deposit:
//       <input type="number" onChange={handleChange}></input>
//       <input type="submit" onClick={handleSubmit}></input>
//       <h2 id="total">Total: {statusVar}</h2>
//     </label>
//   )
// };

// const Account = () => {
//   const [acountState, setAccountState] = React.useState(0);
//   const handleChange = e => {
//     console.log(`handleChange: ${e.target.value}`);
//     setAccountState(e.target.value);
//   };
// }
// //==================================================================
// ReactDOM.render(<ATMDeposit/>, document.getElementById('root'));


// ==================================================================================
// ========================== NOW AS A REACT COMPONENT ==============================
// ==================================================================================


const ATMDeposit = ({onChange}) => { {/* since ATMDeposit is now being called withtin Accuont, it needs the attribute handling the change method passed into it */}
  return (
    <label className="label huge">
      Deposit:
      <input type="number" onChange={onChange}></input> {/* This is now onChange, that's passed in as a parameter to ATMDeposit */}
      <input type="submit" value="Submit"></input>
      {/* <h2 id="total">Total: {statusVar}</h2>  <--- moved into Account element's return'ed H2 element*/}
    </label>
  )
};

const Account = () => {
  let transactionState = 0; // state of this transaction
  let totalState = 0; // account toal balance
  let statusVar = "Account Balance: -0-"

  const handleChange = e => {
    console.log(`handleChange: ${e.target.value}`);
    transactionState = Number(e.target.value);
  };
  const handleSubmit = e => { {/* Note there is no event needed here anymore */}
    totalState += transactionState;
    statusVar = `Account Balance: ${totalState}`;
    document.getElementById('total').innerHTML = statusVar;
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 id='total'>{statusVar}</h2> {/* new Total here */}
      <ATMDeposit onChange={handleChange}>Deposit</ATMDeposit>
    </form>
  );
};
//==================================================================
ReactDOM.render(<Account/>, document.getElementById('root'));