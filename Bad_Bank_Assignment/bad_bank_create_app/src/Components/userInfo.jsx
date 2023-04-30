import React from 'react';
import UserContext from './userContext';

function LogggedInUser(){
  const ctx = React.useContext(UserContext);
  console.log('USER ctx: ',ctx);


  return (<div className="mt-1" style={{position: 'relative'}}>
    <UserContext.Consumer>
      { context => {
        const loggedInUser = context.map(entry => {
          if (entry.loggedIn === true) {
            return entry;
          };
        });
        console.log('USER loggedInUser = ', loggedInUser[0])

        { loggedInUser.length > 0 ?
          (<h1 className="text-primary text-end">
            logged in user name<span className="text-danger"> | </span>
            logged in user email
          </h1>)
          :
          (<h1 className="text-danger text-end my-5">
            <></>
          </h1>
          )}
        }
      }
      {/* { loggedInUser.length > 0 ?
      (<h1 className="text-primary text-end">
        {JSON.stringify(ctx)}<span className="text-danger"> | </span>
        {ctx.email}
      </h1>)
      :
      (<h1 className="text-danger text-end my-5">
        <></>
      </h1>
      ) } */}
    </UserContext.Consumer>
  </div>)
};
  
export default LogggedInUser;