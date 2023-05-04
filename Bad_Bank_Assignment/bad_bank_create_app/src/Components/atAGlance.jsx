import React from 'react';
import Card from './card';
import UserContext from './userContext';

function AtAGlance() {
	const ctx = React.useContext(UserContext);
	console.log('AT A GLANCE ctx: ', ctx)

	return(
		<div className="d-flex justify-content-center">
			<Card
				width="60%"
				margin="m-3"
				extra="d-inline-block"
				txtcolor="black"
				headerbgcolor="bg-primary"
				headercolor="text-white"
				header="Your Account At A Glance"
				text={(<>
					<h5 className="text-center">Balance: <span className="text-primary">${ctx.user.balance}</span><br></br></h5>
					<p className="text-center mt-3">Recent Activity:</p>
				</>)}
			/>
		</div>
	);
}

export default AtAGlance;