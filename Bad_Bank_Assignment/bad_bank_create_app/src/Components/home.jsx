import React from 'react';
import Card from './card';
import UserContext from './userContext';
import CreateAccount from './createaccount';
import ReferenceLinks from './referencelinks';
import Login from './login';

function Home() {

	const ctx = React.useContext(UserContext);

	return(
		<>
			<div className="d-flex justify-content-center">
				<div className="text-center">
					<h1 className='fs-1 mt-3'>Welcome to the Bank!</h1>
					<p>To get started, Create an Account or<br></br>Login with previously created credentials</p>
				</div>
			</div>
			<div className="d-flex justify-content-center">
				<CreateAccount/>
				<div className="my-5">
							<div className="my-5">
								<p>- or -</p>
							</div>
						</div>
				<Login/>
				{/* <Card
					width="25rem"
					margin="m-5"
					extra="d-inline-block"
					txtcolor="black"
					headerbgcolor="bg-muted"
					header="Bad Bank"
					title="Welcome to the Bank!"
					text={(<p>You can use this Bank, but beware... it's bad!! DISCLAIMER: It's bad because it has no security. Create an Account to get started!</p>)}
					body={(<img src="https://cdn1.iconfinder.com/data/icons/corruption-outline-1/60/Corrupt-Bank-corrupted-banking-evil-512.png"
						className="mx-auto d-block" alt="Evil Image Icon" style={{maxWidth:'100%', maxHeight:'200px'}}
					></img>)}
				/> */}
			</div>
			<div className="d-flex justify-content-center mt-5">
				<ReferenceLinks/>
			</div>
		</>
	);
}

export default Home;