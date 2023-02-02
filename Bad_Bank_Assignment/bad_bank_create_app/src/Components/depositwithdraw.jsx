import React from 'react';
import Card from './card';
import UserContext from './spa';
import Balance from './balance';
// import ctx from './navbar'


function Depositwithdraw() {
	const ctx = React.useContext(UserContext);
	console.log('Deposit context: ', ctx)
	const [deposit, setDeposit] 		= React.useState(0);
	const [withdraw, setWithdraw] 	= React.useState(0);
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
		// ctx.users.push({name:"Oscar", email:"emai@email.email", password:"admin", balance:10000});
		// ctx.users[0].balance += parseInt(deposit);
		setShow(false);
	}

	function handleWithdraw() {
		if (!validate(withdraw, 'withdraw')) {
			clearForm();
			return
		};
		// ctx.users.push({name:"Oscar", email:"emai@email.email", password:"admin", balance:10000});
		// ctx.users[0].balance -= parseInt(deposit);
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
				bgcolor="success"
				header="Deposit"
				headercolor="text-white"
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
						<Card 
				bgcolor="warning"
				header="Withdraw"
				headercolor="text-white"
				extra='d-inline-flex'
				status={status}
				body={show ? (
					<>
						{/* <p>Balance: ${ctx.users[0].balance}</p><br/> */}
						<input type="number" className="form-control" id="withdraw" placeholder="Enter Withdrawal" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/>
						<br/>
						<button type="submit" className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
					</>
				) : (
					<>
						<h5>Success!</h5>
						<button type="submit" className="btn btn-light" onClick={clearForm}>New Withdrawal</button>
					</>
				)}
			/>
		</>
	);
}

export default Depositwithdraw;