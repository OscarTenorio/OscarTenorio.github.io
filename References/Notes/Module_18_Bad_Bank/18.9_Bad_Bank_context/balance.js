function Balance() {
	const ctx = React.useContext(UserContext);

	return(
		<>
			<h1>Balance</h1>
			<p>{JSON.stringify(ctx)}</p>
		</>
	);
}
