// Needs more work to actually make changes to user's balance rather than just do math that wipes when navigated away from
function Deposit() {
	const ctx = React.useContext(UserContext);
	const [deposit, setDeposit] 		= React.useState(0);
	const [show, setShow] 					= React.useState(true);
	const [status, setStatus] 			= React.useState('');

	// debugger;

	function validate(field, label) {					// basic validation stuff
		if (!field || field < 0) {
			setStatus('Error: ' + label);
			setTimeout(() => setStatus(''), 8000);
			return false;
		}
		return true;
	}

	function handleDeposit() {
		if (!validate(deposit, 'deposit')) {
			clearForm();
			return
		};
		// ctx.users.push({name, email, password, balance:10000});
		ctx.users[0].balance += parseInt(deposit);
		setShow(false);
	}

	function clearForm() {				// convenient method to clear the form
		setDeposit(0);
		setShow(true);
	}

	return(
		<Card 
			bgcolor="success"
			header="Deposit"
			status={status}
			body={show ? (
				<>
					<p>Balance: ${ctx.users[0].balance}</p><br/>
					<input type="number" className="form-control" id="deposit" placeholder="Enter Deposit" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/>
					<br/>
					<button type="submit" className="btn btn-light" onClick={handleDeposit}>Deposit</button>
				</>
			) : (
				<>
					<h5>Success!</h5>
					<button type="submit" className="btn btn-light" onClick={clearForm}>New Deposit</button>
				</>
			)}
		/>
	);
}
