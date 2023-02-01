import React from 'react';
import Card from './card';
import UserContext from './spa';

function Balance() {
	const ctx = React.useContext(UserContext);

	return(
		<Card
			txtcolor="white"
			headerClasses="text-center"
			bgcolor="primary"
			margin="mx-auto"
			header="Hardcoded User"
			text={(<>
			<h1>{ctx}</h1>
			<h4>Balance: $5</h4>
			</>)}
		/>
	);
}

export default Balance;