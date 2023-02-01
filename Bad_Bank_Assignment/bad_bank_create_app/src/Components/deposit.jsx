// Needs more work to actually make changes to user's balance rather than just do math that wipes when navigated away from
import React from 'react';
import Card from './card';
import UserContext from './spa';
import Balance from './balance';


function Deposit() {
	const ctx = React.useContext(UserContext);
	console.log('inherited userContext: ', ctx)
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
		ctx.users.push({name:"Oscar", email:"emai@email.email", password:"admin", balance:10000});
		// ctx.users[0].balance += parseInt(deposit);
		setShow(false);
	}

	function clearForm() {				// convenient method to clear the form
		setDeposit(0);
		setShow(true);
	}

	return(
		<>
			<Balance/>
			<Card 
				txtcolor="white"
				bgcolor="success"
				header="Deposit"
				extra='d-inline-flex'
				status={status}
				body={show ? (
					<>
						{/* <p>Balance: ${ctx.users[0].balance}</p><br/> */}
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
		</>
	);
}

export default Deposit;