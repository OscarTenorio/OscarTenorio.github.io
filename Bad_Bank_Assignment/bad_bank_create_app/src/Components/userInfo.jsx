import React from 'react';
import UserContext from './userContext';

function LoggedInUser(userInfo){
  const {user, setUser}	= React.useContext(UserContext);
  const value = React.useMemo(() => ({ user, setUser }), [user]);
  console.log('LOGGED IN user context: ',user);

  return (
    <div className="mt-1" style={{position: 'relative'}}>
      { Object.keys(value.user).length > 0 ?
        (<h1 className="text-primary text-end">
          logged in user name<span className="text-danger"> | </span>
          logged in user email
        </h1>)
        :
        (<h1 className="text-danger text-end my-5">
          <></>
        </h1>
        )}
    </div>
  )
};
  
export default LoggedInUser;