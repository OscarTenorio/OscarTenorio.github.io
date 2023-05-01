import React from 'react';

function LoggedInUser(user){
  console.log('LOGGED IN user context: ',user);
  const userObject = user.user.user // <---- yea I gotta sort this out here

  return (
    <div className="d-flex justify-content-end mt-3">
      <div style={{"borderStyle":"hidden solid hidden hidden", "padding":"0px 15px", "borderColor":"red"}}>
        <h1 className="text-primary text-end">{String(userObject.name)}</h1>
        <p className="text-primary text-end">{String(userObject.email)}</p>
      </div>
      <div className="text-end m-3">
        <button className="btn btn-outline-primary text-center" id="logout">Logout</button>
      </div>
    </div>
  )
};
  
export default LoggedInUser;