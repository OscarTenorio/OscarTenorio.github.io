function Home() {
	const ctx = React.useContext(UserContext);

	return(
		<>
			<h1>Home</h1>
			<p>{JSON.stringify(ctx)}</p>
		</>
	);
}
