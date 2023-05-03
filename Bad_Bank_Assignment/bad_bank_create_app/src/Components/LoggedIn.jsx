import React from 'react';
import Card from './card';
import UserContext from './userContext';

function LoggedIn(user) {
	console.log('LOGGEDIN user context: ', user)
	const userObject = user.user.user
	// ====== Time-related code =======
	let hour = new Date().getHours();
	let greeting = "Hello, "
	if (hour > 5 && hour < 12) {
		greeting = "Good Morning, ";
	} else if (hour > 12 && hour < 16) {
		greeting = "Good Afternoon, ";
	} else {
		greeting = "Good Evening, "; 
	}

	return(
		<>
			<div className="d-flex justify-content-center">
				<div className="text-center mt-5">
					<h1 className='fs-1'>{greeting}</h1>
					<h1 className='fs-1'>{userObject.name}</h1>
				</div>
			</div>
			<div className="d-flex justify-content-center">
				<Card
					width="60%"
					margin="m-5"
					extra="d-inline-block"
					txtcolor="black"
					headerbgcolor="bg-muted"
					header="Upcoming Changes Alert"
					text={(<p>Here is a sample alert that can display to users to warn of incoming feature changes or releases. For example:</p>)}
					body={(<div className="mx-auto d-block" alt="Evil Image Icon" style={{maxWidth:'100%', maxHeight:'200px'}}>

						</div>)}
				/>
			</div>
		</>
	);
}

export default LoggedIn;