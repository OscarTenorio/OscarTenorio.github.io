import React from 'react';
import Card from './card';
import UserContext from './userContext';

function Balance() {
	const ctx = React.useContext(UserContext);

	return(
		<Card
			txtcolor="white"
			headerClasses="text-center"
			bgcolor="primary"
			margin="mx-auto mt-3"
			header={"User: " + ctx.users[0].name}
			balance={true}
			text={"Balance: $" + ctx.users[0].balance}
		/>
	);
}

export default Balance;