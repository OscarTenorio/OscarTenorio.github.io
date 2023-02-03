import React from 'react';
import { Fragment } from 'react';
import Balance from './balance';
import UserContext from './userContext';

function AllData() {
	const ctx = React.useContext(UserContext);

	function History(props){
		console.log("ctx.users[0].history.length", ctx.users[0].history.length)

		// generate rows based on how many entries there are in the user's history
		let timestamp = String(props.value.timestamp).substr(0, 21);
		let type = String(props.value.type)
		let amount = String(props.value.amount)
		let balance = String(props.value.balance)

		return (
			<tr>
				<th scope="row">{parseInt(props.id) + 1}</th>
				<td>{timestamp}</td>
				<td>{type}</td>
				<td>${amount}</td>
				<td>${balance}</td>
			</tr>
		)
	}

	return(
		<>
			<Balance/>
			<h1 className="text-center my-5">Activity History</h1>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">When</th>
						<th scope="col">Activity Type</th>
						<th scope="col">Amount</th>
						<th scope="col">Balance</th>
					</tr>
				</thead>
				<tbody>
					{ctx.users[0].history.map((value, index) => {
						return 	(<History value={value} key={index} id={index}/>)
					})}
				</tbody>
			</table>
		</>
	);
}
export default AllData;