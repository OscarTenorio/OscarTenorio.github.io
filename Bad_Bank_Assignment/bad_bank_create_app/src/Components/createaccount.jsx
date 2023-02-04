import React from 'react';
import Card from './card';
import UserContext from './userContext';

function CreateAccount() {
	const [show, setShow] 					= React.useState(true);
	const [status, setStatus] 			= React.useState('');
	const [name, setName] 					= React.useState('');
	const [email, setEmail] 				= React.useState('');
	const [password, setPassword] 	= React.useState('');
	const [balance, setBalance] 		= React.useState(0);
	const ctx = React.useContext(UserContext);

	function validate(field, label) {					// basic validation stuff
		if (!field) {
			setStatus('Error: ' + label + ' is invalid');
			setTimeout(() => setStatus(''), 5000);
			return false;
		}
		return true;
	}

	function handleCreate() {
		console.log("Name: ",name," Email: ",email," Password: ",password,", starting with a Balance of 10000");
		if (!validate(name, 		'name')) return;
		if (!validate(email, 		'email')) return;
		if (!validate(password, 'password')) return;
		ctx.users[0] = ({name:name, email:email, password:password, balance:balance, history:[]});
		setShow(false);
		console.log('Create Account context: ',ctx);
	}

	function clearForm() {
		setName('');
		setEmail('');
		setPassword('');
		setShow(true);
	}

	// builds a create account form (TODO: handle success form better - <p> cnnot be child of <p>)
	return (
		<Card 
			bgcolor="primary"
			header="Create Account"
			status={status}
			margin="m-5"
			extra="d-inline-block"
			text={show ? (
				<>
					Name<br/>
					<input type="input" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={e => setName(e.currentTarget.value)}/>
					<br/>
					Email Address<br/>
					<input type="input" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.currentTarget.value)}/>
					<br/>
					Password<br/>
					<input type="password" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.currentTarget.value)}/>
					<br/>
					Initial Balance<br/>
					<input type="number" className="form-control" id="balance" placeholder="Enter Initial Balance" value={balance} onChange={e => setBalance(parseInt(e.currentTarget.value))}/>
					<br/>
					<div className="text-center">
					<button type="submit" className="btn btn-primary text-center mt-3" onClick={handleCreate}>Create Account</button>
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