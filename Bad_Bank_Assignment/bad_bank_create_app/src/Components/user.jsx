import React from 'react';
import UserContext from './userContext';

function User(){
    const ctx = React.useContext(UserContext);
    const [userState, setUserState] = React.useState(ctx);

    return (<div className="mt-1" style={{
      position: 'relative',
    }}>
			{ userState ?
      (<h1 className="text-primary text-end">
        {ctx.name}<span className="text-danger"> | </span>
        {ctx.name}
      </h1>)
      :
      (<h1 className="text-danger text-end">
        NO INFO
      </h1>)}
    </div>)
};
  
export default User;