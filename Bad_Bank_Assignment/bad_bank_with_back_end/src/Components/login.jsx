import React from 'react';
import UserContext from './spa';

function Login() {
	const ctx = React.useContext(UserContext);

	return(
		<>
			<h1>Login</h1>
			<p>{JSON.stringify(ctx)}</p>
		</>
	);
}

export default Login;