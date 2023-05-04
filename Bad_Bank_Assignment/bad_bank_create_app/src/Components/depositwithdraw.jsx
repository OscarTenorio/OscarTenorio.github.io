import React from 'react';
import Card from './card';
import UserContext from './userContext';
import Balance from './balance';
import ReferenceLinks from './referencelinks';


function Depositwithdraw() {
	const {user, setUser}				= React.useContext(UserContext);
	console.log('DEPWITH user value: ', user)

	const [deposit, setDeposit] 								= React.useState(0);
	const [withdraw, setWithdraw] 							= React.useState(0);
	const [showDeposit, setShowDesposit] 				= React.useState(true);
	const [showWithdraw, setShowWithdraw] 			= React.useState(true);
	const [depositStatus, setDepositStatus] 		= React.useState('');
	const [withdrawStatus, setWithdrawStatus] 	= React.useState('');
	const [depositButton, setDespositButton] 		= React.useState(false)
	const [withdrawButton, setWithdrawButton]		= React.useState(false)


	function validate(field, label) {
		if (label == 'deposit' && !field || field < 0) {
			setDepositStatus('ERROR: Please enter a ' + label + ' amount number');
			setTimeout(() => setDepositStatus(''), 5000);
			return false;
		}
		if (label == 'withdraw' && !field) {
			setWithdrawStatus('ERROR: Please enter a ' + label + ' amount number');
			setTimeout(() => setWithdrawStatus(''), 5000);
			return false;
		} else if (label == 'withdraw' && field > user.balance) {
			setWithdrawStatus('ERROR: Cannot ' + label + ' more than your Balance');
			setTimeout(() => setWithdrawStatus(''), 5000);
			return false;
		}
		setDespositButton(true);
		setWithdrawButton(true);
		return true;
	}

	function handleDeposit() {
		if (!validate(deposit, 'deposit')) {
			clearForm();
			return
		};
		user.balance += parseInt(deposit);
		// enter deposit into DB =============
		

		// update local state =============
		user.history.push({
			name:"Oscar",
			email:"emai@email.email",
			type:"Deposit", amount:deposit,
			balance:user.balance,
			timestamp:new Date()
		});
		user.blank = false;
		setShowDesposit(false);
	}

	function handleWithdraw() {
		if (!validate(withdraw, 'withdraw')) {
			clearForm();
			return
		};
		user.balance -= parseInt(withdraw);
		user.history.push({
			name:"Oscar",
			email:"emai@email.email",
			type:"Withdrawal", amount:withdraw,
			balance:user.balance,
			timestamp:new Date()
		});
		user.blank = false;
		setShowWithdraw(false);
	}

	function clearForm() {
		setDeposit(0);
		setWithdraw(0);
		setShowDesposit(true);
		setShowWithdraw(true);
	}

	function buttonClass(button) {
		let activeState = "btn btn-light"
		let inActiveState = "btn btn-light disabled"

		if (button === "withdrawButton") {
			if (withdrawButton) {return activeState} else { return inActiveState};
		} else if (button === "depositButton") {
			if (depositButton) {return activeState} else { return inActiveState};
		};
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
					text={showDeposit ? (
						<>
							<p>Deposit Amount:</p>
							<input type="number" className="form-control" id="deposit" placeholder="Enter Deposit"
								value={deposit} onChange={e => { setDeposit(e.currentTarget.value); setDespositButton(true) }}
							/>
							<br/>
							<button type="submit" className={buttonClass("depositButton")} onClick={handleDeposit}>Deposit</button>
						</>
					) : (
						<>
							<h5 className="my-3">Success!</h5>
							<button type="submit" id ="depositButton" className="btn btn-light" onClick={clearForm}>New Deposit</button>
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
							<input type="number" className="form-control" id="withdraw" placeholder="Enter Withdrawal"
								value={withdraw} onChange={e => { setWithdraw(e.currentTarget.value); setWithdrawButton(true) }}
							/>
							<br/>
							<button type="submit" id ="withdrawButton" className={buttonClass("withdrawButton")} onClick={handleWithdraw}>Withdraw</button>
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