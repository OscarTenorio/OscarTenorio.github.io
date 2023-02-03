import React from 'react';
import Balance from './balance';
import UserContext from './userContext';

function AllData() {
	const ctx = React.useContext(UserContext);
	const [blank, setBlank] = React.useState(true);

	function History(props){
		if (ctx.users[0].history.length > 0) {
			setBlank(false);
			// generate rows based on how many entries there are in the user's history

			//timestamp just grabs Day of Week, date, and time (Hours and minutes)
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
	}

	function BlankHistory() {
		if (blank) {
			return (
				<div className="mx-auto" style={{paddingTop:"8rem"}}>
						<h2 className="text-center" style={{color:"lightgray"}}>Wow, So Much Nothing</h2>
						<p className="text-center" style={{color:"lightgray"}}>Try visiting the Deposit/Withdraw tab first</p>
				</div>
			)
		}
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
			<BlankHistory/>
		</>
	);
}
export default AllData;