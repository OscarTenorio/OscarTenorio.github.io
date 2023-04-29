import React from 'react';
import UserContext from './spa';
import Card from './card';

function Login() {
	const [status, setStatus] 						= React.useState('* Required');
	const [loginButton, setLoginButton] 			= React.useState(false)
	const [email, setEmail] 						= React.useState('');
	const [password, setPassword] 					= React.useState('');
	const ctx = React.useContext(UserContext);

	function validate(field, label) {					// basic validation stuff
		if (!field) {
			setStatus('ERROR: ' + label + ' cannot be blank');
			setTimeout(() => setStatus('* Required'), 5000);
			return false;
		}
		setLoginButton(true);
		return true;
	}

	function handleLogin(context) {
		if (!validate(email, 		'email')) return;
		if (!validate(password, 'password')) return;
		console.log("handleLogin context: ", context);
		context.forEach(entry => {
			if (entry.loggedIn === true) {
				entry.loggedIn = false;
			}
		});
		// TODO ^^^^

		console.log('Create Account context: ',context);
	};

	function buttonClass() {
		if (loginButton) {
			return 'btn btn-primary text-center'
		}
			return 'btn btn-primary text-center disabled'
	};

	function handleLoginButton(field, value) {
		if (field === 'email') {
			setEmail(value);
			if (email.length > 1 && password.length > 1) {
				setLoginButton(true);
			} else {
				setLoginButton(false);
			};
		} else if (field === 'password') {
			setPassword(value);
			if (email.length > 1 && password.length > 1) {
				setLoginButton(true);
			} else {
				setLoginButton(false);
			};
		};
	};


	return (
		<div>
			<Card 
				header="Returning User"
				headerbgcolor="primary"
				headercolor="white"
				txtcolor="primary"
				bgcolor="light"
				status={status}
				margin="mx-5 mt-5 mb-4"
				extra="d-inline-block"
				text={
					<>
						<p>Email Address <span className="text-info">*</span>
							<input type="input" className="form-control" id="loginemail" placeholder="Enter Email" onChange={e => { {handleLoginButton('email', e.currentTarget.value)} }}/>
						</p>
						<p>Password <span className="text-info">*</span>
							<input type="password" className="form-control" id="loginpassword" placeholder="Enter Password" onChange={e => { {handleLoginButton('password', e.currentTarget.value)} }}/>
						</p>
					</>
				}
			/>
				{ ctx => {
					return (<div className="text-center">
						<button type="submit" className={buttonClass()} style={{minWidth:"7rem"}} onClick={handleLogin(ctx.currentValue)}>Login</button>
					</div>)
					}
				}
		</div>
	)
}

export default Login;