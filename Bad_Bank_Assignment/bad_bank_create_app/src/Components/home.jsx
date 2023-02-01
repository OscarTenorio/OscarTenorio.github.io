import React from 'react';
import Card from './card';
import UserContext from './spa';
import Balance from './balance';

function Home() {

	const ctx = React.useContext(UserContext);
	console.log(ctx);

	return(
		<>
			<Balance/>
			<Card
				width="25rem"
				txtcolor="black"
				headerClasses="text-center"
				header="Bad Bank"
				title="Welcome to the Bank!"
				text="You can use this Bank, but beware... it's bad!! Navigate to your desired page from the Navbar."
				body={(<img src="https://cdn1.iconfinder.com/data/icons/corruption-outline-1/60/Corrupt-Bank-corrupted-banking-evil-512.png" className="img-fluid" alt="Evil Image Icon" style={{height:'50%', margin:'0px 65px'}}></img>)}
			/>
		</>
	);
}

export default Home;