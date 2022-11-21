import React from "react";
// TODO: import useFormik from formik library  √
import {useFormik} from 'formik'


function App() {
  // TODO: add a const called formik assigned to useFormik()  √
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      console.log('form submission data:', values),
      alert('Log in successful!');
    },
    validate: values => {
      let errors = {};
      // username/email validation
      if (!values.email) {
        errors.email = 'Field Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username should be an email address';
      };
      // password validation
      if (!values.password) errors.password = 'Field Required';

      return errors;
    }
  });
 
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Username/Email:</div>
        <input type="text" name="email" id='emailField' onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id='emailError' style={{color: 'red'}}>{formik.errors.email}</div> : null}
        <div>Password:</div>
        <input type="text" name="password" id='pswField' onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? <div id='pswError' style={{color: 'red'}}>{formik.errors.password}</div> : null}
        <div>
          <button type='submit' id='submitBtn'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
