import React from 'react';
import Card from './card';
import UserContext from './userContext';

function Balance() {
	const ctx = React.useContext(UserContext);

	function changeUser() {
		// get dropdown value and select that context
	}

	return(
		<Card
			txtcolor="white"
			headerClasses="text-center"
			bgcolor="primary"
			margin="mx-auto mt-5"
			header={"User: " + ctx.users[ctx.users.length - 1].name}
			balance={true}
			text={<h3 className="text-center">Balance: ${ctx.users[ctx.users.length - 1].balance}</h3>}
		/>
	);
}

export default Balance;