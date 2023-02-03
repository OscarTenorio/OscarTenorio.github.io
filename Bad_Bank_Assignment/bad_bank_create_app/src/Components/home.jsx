import React from 'react';
import Card from './card';
import UserContext from './userContext';
import CreateAccount from './createaccount';

function Home() {

	const ctx = React.useContext(UserContext);

	return(
		<div className="d-flex justify-content-center">
			<CreateAccount/>
			<Card
				width="25rem"
				margin="m-5"
				extra="d-inline-block"
				txtcolor="black"
				headerbgcolor="bg-muted"
				header="Bad Bank"
				title="Welcome to the Bank!"
				text="You can use this Bank, but beware... it's bad!! DISCLAIMER: It's bad because it has no security. Create an Account to get started!"
				body={(<img src="https://cdn1.iconfinder.com/data/icons/corruption-outline-1/60/Corrupt-Bank-corrupted-banking-evil-512.png" className="mx-auto d-block" alt="Evil Image Icon" style={{maxWidth:'100%', maxHeight:'200px'}}></img>)}
			/>
		</div>
	);
}

export default Home;