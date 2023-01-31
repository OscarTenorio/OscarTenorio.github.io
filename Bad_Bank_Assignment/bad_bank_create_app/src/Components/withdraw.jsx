import React from 'react';
import UserContext from './spa';

function Withdraw() {
	const ctx = React.useContext(UserContext);

	return(
		<>
			<h1>Withdraw</h1>
			<p>{JSON.stringify(ctx)}</p>
		</>
	);
}
export default Withdraw;