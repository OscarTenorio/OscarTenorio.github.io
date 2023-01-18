function SignUp() {

    const [year, setYear] = React.useState('freshman'); //set default since this could potentially remain unchanged
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [checked, setChecked] = React.useState('false'); //set default since this could potentially remain unchanged

    function handle(e){
        console.log('year:',year);
        console.log('name:',name);
        console.log('email:',email);
        console.log('password:',password);
        console.log('checked?',checked);
    }
    return (
        <>
            <select value={year} onChange={e => setYear(e.target.value)} id='year'>
                <option>Freshman</option>
                <option>Sophmore</option>
                <option>Junior</option> 
                <option>Senior</option>
            </select>
            <div>Name</div>
            <input type="text" id="name" value={name} onChange={e => setName(e.target.value)}/>
            <div>Email</div>
            <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <div>Password</div>
            <input type="text" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <div>
                <input type="checkbox" id="checkbox" value={checked} onChange={e => setChecked(e.target.checked)}/> Remember Me!
            </div>
            <button onClick={handle}>Submit</button>
        </>
    )
}

ReactDOM.render(
    <SignUp/>,
    document.getElementById('root')
)
