function AllData() {
	const ctx = React.useContext(UserContext);

	return(
		<>
			<h1>All Data</h1>
			<p>{JSON.stringify(ctx)}</p>
		</>
	);
}
