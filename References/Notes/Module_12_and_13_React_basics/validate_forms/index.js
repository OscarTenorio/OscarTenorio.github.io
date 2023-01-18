function SignUp() {
    const [values, handleChange] = useForm({year:'',name:'', year:'',password:'',checked:false})

const [errors, setErrors] = React.useState({nameError:'',emailError:'',passwordError:''});

    function validate(){
        // name error example, provided by professor
        if (!values.name){
            setErrors({...errors, nameError: 'bad'})
        } else {
            setErrors({...errors, nameError: ''})
        };
        // my attempt at further validations
        if ('REGEX here: email does not include "@" or a "." after @'){ //still need regex here, but it gets the idea across
            setErrors({...errors, emailError: 'Invalid email used'})
        } else {
            setErrors({...errors, emailError: ''})
        };

    }

    function handle(e){
        validate();
    }
    return (
        <>  
            <div>Name</div>
            <input name="name" type="text" id="name" value={values.name} onChange={handleChange}/>
            <div style={{color: 'red'}}>{errors.nameError}</div>
            <div>Email</div>
            <input name="email" type="text" id="email" value={values.email} onChange={handleChange}/>
            <div style={{color: 'red'}}>{errors.emailError}</div>
            <div>Password</div>
            <input name="password" type="text" id="password" value={values.password} onChange={handleChange}/>
            <div style={{color: 'red'}}>{errors.passwordError}</div>
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
