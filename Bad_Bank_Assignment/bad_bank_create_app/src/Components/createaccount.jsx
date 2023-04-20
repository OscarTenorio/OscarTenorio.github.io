import React from 'react';
import Card from './card';
import UserContext from './userContext';

function CreateAccount() {
	const [show, setShow] 								= React.useState(true);
	const [status, setStatus] 						= React.useState('');
	const [name, setName] 								= React.useState('');
	const [email, setEmail] 							= React.useState('');
	const [password, setPassword] 				= React.useState('');
	const [balance, setBalance] 					= React.useState(0);
	const [createButton, setCreateButton] = React.useState(false)
	const ctx = React.useContext(UserContext);

	function validate(field, label) {					// basic validation stuff
		if (!field) {
			setStatus('ERROR: ' + label + ' cannot be blank');
			alert('ERROR: ' + label + ' cannot be blank');
			setTimeout(() => setStatus(''), 5000);
			return false;
		} else if (label === 'password' && password.length < 8) {
			setStatus('ERROR: ' + label + ' must be at least 8 characters');
			alert('ERROR: password must be at least 8 characters');
			setTimeout(() => setStatus(''), 5000);
			return false;
		}
		setCreateButton(true);
		return true;
	}

	function handleCreate() {
		if (!validate(name, 		'name')) return;
		if (!validate(email, 		'email')) return;
		if (!validate(password, 'password')) return;
		console.log("Name: ",String(name),", Email: ",String(email),", Password: ",String(password),", starting with a Balance of ",String(balance));
		ctx.users.push({name:name, email:email, password:password, balance:balance, history:[], blank:true});
		setShow(false);
		console.log('Create Account context: ',ctx);

		// copied from slides on connecting fromnt end to database
		// console.log(name, email, password);
		// const url = `/account/create/${name}/${email}/${password}`;
		// (async () => {		// <--- notice how it's wrapped in parenthesis
		// 	var res = await fetch(url);
		// 	var data = await res.json();
		// 	console.log(data);
		// })();  // <--- guess we gotta let the code know that this is a function within the first set of paranthesis or something?
		// setShow(false);
	}

	function buttonClass() {
		if (createButton) {
			return 'btn btn-primary text-center mt-5'
		}
			return 'btn btn-primary text-center mt-5 disabled'
	}

	function clearForm() {
		setName('');
		setEmail('');
		setPassword('');
		setCreateButton(false);
		setShow(true);
	}

	return (
		<Card 
			bgcolor="primary"
			header="Create Account"
			status={status}
			margin="m-5"
			extra="d-inline-block"
			text={show ? (
				<>
					<p>Name
						<input type="input" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={e => { setName(e.currentTarget.value); setCreateButton(true)}}/>
					</p>
					<p>Email Address
						<input type="input" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={e => { setEmail(e.currentTarget.value); setCreateButton(true)}}/>
					</p>
					<p>Password
						<input type="password" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={e => { setPassword(e.currentTarget.value); setCreateButton(true)}}/>
					</p>
					<p>Initial Balance
						<input type="number" className="form-control" id="balance" placeholder="Enter Initial Balance" value={balance} onChange={e =>  setBalance(parseInt(e.currentTarget.value)) }/>
					</p>
					<div className="text-center">
						<button type="submit" className={buttonClass()} onClick={handleCreate}>Create Account</button>
					</div>
				</>
			) : (
				<>
					<h5 className="text-center">Success!</h5>
					<p className="text-center my-2">Navigate to other pages through the NavBar, or start over with account creation.</p>
					<div className="text-center">
						<button type="submit" className="btn btn-outline-light my-3" onClick={clearForm}>Create a different account</button>
					</div>
				</>
			)}
		/>
	);
} 

export default CreateAccount;