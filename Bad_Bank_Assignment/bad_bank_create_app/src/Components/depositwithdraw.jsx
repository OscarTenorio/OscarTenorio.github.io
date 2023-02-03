import React from 'react';
import Card from './card';
import UserContext from './userContext';
import Balance from './balance';


function Depositwithdraw() {
	const ctx = React.useContext(UserContext);
	// const ctx = null;
	const [deposit, setDeposit] 								= React.useState(0);
	const [withdraw, setWithdraw] 							= React.useState(0);
	const [showDeposit, setShowDesposit] 				= React.useState(true);
	const [showWithdraw, setShowWithdraw] 			= React.useState(true);
	const [depositStatus, setDepositStatus] 		= React.useState('');
	const [withdrawStatus, setWithdrawStatus] 	= React.useState('');

	// debugger;

	function validate(field, label) {
		if (label == 'deposit' && !field || field < 0) {
			setDepositStatus('Error: Please enter a ' + label + ' amount');
			setTimeout(() => setDepositStatus(''), 5000);
			return false;
		}
		if (label == 'withdraw' && !field) {
			setWithdrawStatus('Error: Please enter a ' + label + ' amount');
			setTimeout(() => setWithdrawStatus(''), 5000);
			return false;
		} else if (label == 'withdraw' && field > ctx.users[0].balance) {
			setWithdrawStatus('Error: Cannot ' + label + ' more than your Balance');
			setTimeout(() => setWithdrawStatus(''), 5000);
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
		ctx.users[0].balance += parseInt(deposit);
		ctx.users[0].history.push({name:"Oscar", email:"emai@email.email", type:"Deposit", amount:deposit, balance:ctx.users[0].balance, timestamp:new Date()});
		setShowDesposit(false);
	}

	function handleWithdraw() {
		if (!validate(withdraw, 'withdraw')) {
			clearForm();
			return
		};
		ctx.users[0].balance -= parseInt(withdraw);
		ctx.users[0].history.push({name:"Oscar", email:"emai@email.email", type:"Withdrawal", amount:withdraw, balance:ctx.users[0].balance, timestamp:new Date()});
		setShowWithdraw(false);
	}

	function clearForm() {
		setDeposit(0);
		setWithdraw(0);
		setShowDesposit(true);
		setShowWithdraw(true);
	}

	return(
		<>
			<Balance/>
			<div className="d-flex justify-content-center">
				<Card 
					bgcolor="success"
					header="Deposit"
					headercolor="text-white"
					margin="m-3 my-5"
					status={depositStatus}
					body={showDeposit ? (
						<>
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
					margin="m-3 my-5"
					status={withdrawStatus}
					body={showWithdraw ? (
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
			</div>
		</>
	);
}

export default Depositwithdraw;