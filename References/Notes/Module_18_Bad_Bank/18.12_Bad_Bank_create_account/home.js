function Home() {
	// note the syntax for including an image (watch the "()"!)
	return(
		<Card
			txtcolor="black"
			header="Bad Bank Landing Page"
			title="Welcome to the Bank!"
			text="You can use this Bank, but beware... it's bad!!"
			body={(<img src="https://cdn1.iconfinder.com/data/icons/corruption-outline-1/60/Corrupt-Bank-corrupted-banking-evil-512.png" className="img-fluid" alt="Evil Image Icon"></img>)}
		/>
		
	);
}
