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
			margin="mx-auto mt-3"
			header="Hardcoded User"
			balance={true}
			text={(<>
			{/* {ctx}<br/> */}
			Balance: $5
			</>)}
		/>
	);
}

export default Balance;