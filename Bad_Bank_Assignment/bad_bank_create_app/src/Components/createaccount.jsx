import React from 'react';
import Card from './card';
import UserContext from './userContext';

function CreateAccount() {
	const [showCreateAccount, setShowCreateAccount]	= React.useState(true);
	const [status, setStatus] 						= React.useState('* Required');
	const [name, setName] 								= React.useState('');
	const [email, setEmail] 							= React.useState('');
	const [password, setPassword] 				= React.useState('');
	const [balance, setBalance] 					= React.useState(0);
	const [createButton, setCreateButton]	= React.useState(false)
	// const ctx = React.useContext(UserContext);

	function validate(field, label) {					// basic validation stuff
		if (!field) {
			setStatus('ERROR: ' + label + ' cannot be blank');
			setTimeout(() => setStatus('* Required'), 5000);
			return false;
		} else if (label === 'password' && password.length < 8) {
			setStatus('ERROR: ' + label + ' must be at least 8 characters');
			setTimeout(() => setStatus('* Required'), 5000);
			return false;
		}
		setCreateButton(true);
		return true;
	}

	function handleCreate(context) {
		if (!validate(name, 		'name')) return;
		if (!validate(email, 		'email')) return;
		if (!validate(password, 'password')) return;
		console.log("Name: ",String(name),", Email: ",String(email),", Password: ",String(password),"starting with a Balance of ",String(balance), "and LoggedIn: true");
		console.log("CREATE ACCOUNT handleCreate context: ", context);
		
		context.forEach(entry => {
			if (entry.loggedIn === true) {
				entry.loggedIn = false;
			}
		});
		// ctx.push({name:name, email:email, password:password, balance:balance, history:[], blank:true, loggedIn: true});
		// TODO ^^^^

		setShowCreateAccount(false);
		setStatus('');
		console.log('CREATE ACCOUNT showCreateAccount: ',showCreateAccount);

		// copied from slides on connecting fromnt end to database
		// console.log(name, email, password);
		// const url = `/account/create/${name}/${email}/${password}`;
		// (async () => {		// <--- notice how it's wrapped in parenthesis
		// 	var res = await fetch(url);
		// 	var data = await res.json();
		// 	console.log(data);
		// })();  // <--- guess we gotta let the code know that this is a function within the first set of paranthesis or something?
		// setShowCreateAccount(false);
	}

	function buttonClass() {
		if (createButton) {
			return 'btn btn-primary text-center'
		}
			return 'btn btn-primary text-center disabled'
	};

	function clearForm() {
		setName('');
		setEmail('');
		setPassword('');
		setCreateButton(false);
		setStatus('* Required');
		setShowCreateAccount(true);
	};

	function handleCreateButton(field, value) {
		let enableCondition = name.length > 1 && email.length > 1 && password.length > 1;

		if (field === 'name') {
			setName(value);
			if (enableCondition) {
				setCreateButton(true);
			} else {
				setCreateButton(false);
			};
		} else if (field === 'email') {
			setEmail(value);
			if (enableCondition) {
				setCreateButton(true);
			} else {
				setCreateButton(false);
			};
		} else if (field === 'password') {
			setPassword(value);
			if (enableCondition) {
				setCreateButton(true);
			} else {
				setCreateButton(false);
			};
		}
	};


	return (
		<div>
			<Card 
				bgcolor="primary"
				header="Create Account"
				status={status}
				margin="mx-5 mt-5 mb-4"
				extra="d-inline-block"
				text={showCreateAccount ? (
					<>
						<p>Name <span className="text-info">*</span>
							<input type="input" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={e => { handleCreateButton('name', e.currentTarget.value) }}/>
						</p>
						<p>Email Address <span className="text-info">*</span>
							<input type="input" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={e => { handleCreateButton('email', e.currentTarget.value) }}/>
						</p>
						<p>Password <span className="text-info">*</span>
							<input type="password" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={e => { handleCreateButton('password', e.currentTarget.value) }}/>
						</p>
						<p>Account Initial Deposit
							<input type="number" className="form-control" id="balance" value={balance} onChange={e =>  setBalance(parseInt(e.currentTarget.value)) }/>
						</p>
					</>
				) : (
					<>
						<h3 className="text-center">Success!</h3>
						<p className="text-center my-2">Visit the other tabs for further functionality, or start over with creating a new User.</p>
						<br></br>
						<div className="text-center font-weight-light my-2">
							<p className="">Previous user has been logged out, and you are now logged in as the new User.</p>
						</div>
						<div className="text-center">
							<button type="submit" className="btn btn-outline-light my-3" onClick={clearForm}>Create a different account</button>
						</div>
					</>
				)}
			/>
			<UserContext.Consumer>
			{ context => 
				(<div className="text-center">
					{ showCreateAccount ? (
						<button type="submit" className={buttonClass()} id="createAccountButton" onClick={handleCreate(context.currentValue)}>Create Account</button>
					) : (
						<></>
					)}
				</div>)}
			</UserContext.Consumer>
		</div>
	);
} 

export default CreateAccount;