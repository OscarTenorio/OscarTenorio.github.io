import React from 'react';
import Card from './card';
import UserContext from './userContext';
import Balance from './balance';
import ReferenceLinks from './referencelinks';


function Depositwithdraw() {
	const ctx = React.useContext(UserContext);

	const [deposit, setDeposit] 								= React.useState(0);
	const [withdraw, setWithdraw] 							= React.useState(0);
	const [showDeposit, setShowDesposit] 				= React.useState(true);
	const [showWithdraw, setShowWithdraw] 			= React.useState(true);
	const [depositStatus, setDepositStatus] 		= React.useState('');
	const [withdrawStatus, setWithdrawStatus] 	= React.useState('');


	function validate(field, label) {
		if (label == 'deposit' && !field || field < 0) {
			setDepositStatus('ERROR: Please enter a ' + label + ' amount');
			setTimeout(() => setDepositStatus(''), 5000);
			return false;
		}
		if (label == 'withdraw' && !field) {
			setWithdrawStatus('ERROR: Please enter a ' + label + ' amount');
			setTimeout(() => setWithdrawStatus(''), 5000);
			return false;
		} else if (label == 'withdraw' && field > ctx.users[ctx.users.length - 1].balance) {
			setWithdrawStatus('ERROR: Cannot ' + label + ' more than your Balance');
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
		ctx.users[ctx.users.length - 1].balance += parseInt(deposit);
		ctx.users[ctx.users.length - 1].history.push({name:"Oscar", email:"emai@email.email", type:"Deposit", amount:deposit, balance:ctx.users[ctx.users.length - 1].balance, timestamp:new Date()});
		ctx.users[ctx.users.length - 1].blank = false;
		setShowDesposit(false);
	}

	function handleWithdraw() {
		if (!validate(withdraw, 'withdraw')) {
			clearForm();
			return
		};
		ctx.users[ctx.users.length - 1].balance -= parseInt(withdraw);
		ctx.users[ctx.users.length - 1].history.push({name:"Oscar", email:"emai@email.email", type:"Withdrawal", amount:withdraw, balance:ctx.users[ctx.users.length - 1].balance, timestamp:new Date()});
		ctx.users[ctx.users.length - 1].blank = false;
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
			<ReferenceLinks/>
			<Balance/>
			<div className="d-flex justify-content-center">
				<Card 
					bgcolor="success"
					header="Deposit"
					headercolor="text-white"
					margin="m-3 my-5"
					status={depositStatus}
					text={showDeposit ? (
						<>
							<p>Deposit Amount:</p>
							<input type="number" className="form-control" id="deposit" placeholder="Enter Deposit" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/>
							<br/>
							<button type="submit" className="btn btn-light" onClick={handleDeposit}>Deposit</button>
						</>
					) : (
						<>
							<h5 className="my-3">Success!</h5>
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
					text={showWithdraw ? (
						<>
							<p>Withdrawal Amount:</p>
							<input type="number" className="form-control" id="withdraw" placeholder="Enter Withdrawal" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)}/>
							<br/>
							<button type="submit" className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
						</>
					) : (
						<>
							<h5 className="my-3">Success!</h5>
							<button type="submit" className="btn btn-light" onClick={clearForm}>New Withdrawal</button>
						</>
					)}
				/>
			</div>
		</>
	);
}

export default Depositwithdraw;