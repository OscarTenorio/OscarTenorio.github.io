function SignUp() {

    // const [year, setYear] = React.useState('freshman');
    // const [name, setName] = React.useState('');
    // const [email, setEmail] = React.useState('');
    // const [password, setPassword] = React.useState('');
    // const [checked, setChecked] = React.useState('false');
    // ^ using custom hook instead, defined below
                                 //v here, pass in object as initial values (see useForm.js)
    const [values, handleChange] = useForm({year:'',name:'', year:'',password:'',checked:false})

    function handle(e){
        console.log('values:',values);
  
    }
    return (
        <>
            <select name="year" value={values.year} onChange={handleChange} id='year'>
                <option>Freshman</option>
                <option>Sophmore</option>
                <option>Junior</option> 
                <option>Senior</option>
            </select>
            <div>Name</div>
            <input name="name" type="text" id="name" value={values.name} onChange={handleChange}/>
            <div>Email</div>
            <input name="email" type="text" id="email" value={values.email} onChange={handleChange}/>
            <div>Password</div>
            <input name="password" type="text" id="password" value={values.password} onChange={handleChange}/>
            <div>
                <input name="checkbox" type="checkbox" id="checkbox" value={values.checked} onChange={handleChange}/> Remember Me!
            </div>
            <button onClick={handle}>Submit</button>
        </>
    )
}

ReactDOM.render(
    <SignUp/>,
    document.getElementById('root')
)
