function Login() {
	const ctx = React.useContext(UserContext);

	return(
		<>
			<h1>Login</h1>
			<p>{JSON.stringify(ctx)}</p>
		</>
	);
}