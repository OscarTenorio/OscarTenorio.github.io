import React from 'react';
import Card from './card';
import UserContext from './userContext';

function LoggedIn() {

	const {user} = React.useContext(UserContext);

	// ====== Time-related code =======
	let hour = new Date().getHours();
	var geeting = "Hello "
	if (hour > 5 && hour < 12) {
		var greeting = "Good Morning ";
	} else if (hour > 12 && hour < 6) {
		var greeting = "Good Afternoon ";
	} else {
		var greeting = "Good Evening "; 
	}

	return(
		<>
			<div className="d-flex justify-content-center">
				<Card
					width="60%"
					margin="m-5"
					extra="d-inline-block"
					txtcolor="black"
					headerbgcolor="bg-muted"
					header={greeting + user.user.name + "!"}
					text={(<p>You can use this Bank, but beware... it's bad!! DISCLAIMER: It's bad because it has no security. Create an Account to get started!</p>)}
					body={(<img src="https://cdn1.iconfinder.com/data/icons/corruption-outline-1/60/Corrupt-Bank-corrupted-banking-evil-512.png"
						className="mx-auto d-block" alt="Evil Image Icon" style={{maxWidth:'100%', maxHeight:'200px'}}
					></img>)}
				/>
			</div>
		</>
	);
}

export default LoggedIn;