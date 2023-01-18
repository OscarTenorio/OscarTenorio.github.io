function Withdraw() {
	const ctx = React.useContext(UserContext);

	return(
		<>
			<h1>Withdraw</h1>
			<p>{JSON.stringify(ctx)}</p>
		</>
	);
}