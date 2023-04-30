import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import NotLoggedIn from './notLoggedIn';
import LoggedIn from './LoggedIn';
import NavBar from './navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Depositwithdraw from "./depositwithdraw";
import AllData from "./alldata";
import UserContext from './userContext';
import AllDataGradeRequirement from './alldatagraderequirement';

function Spa() {
  const ctx = React.useContext(UserContext);

  function setContext(newUserInfo){
		ctx.setState(newUserInfo);
  };

  const user = {
    context: ctx,
    setContext: setContext
  };

  return (
      <HashRouter>
        {/* <NavBar/> */}
        { ctx != null ? (<NavBar/>) : (<></>)}
        {/* <UserContext.Provider value={{users:[{name:"DefaultUser",email:"defaultEmail@email.com",password:"default",balance:1, history:[], blank:true}]}}> */}
        <UserContext.Provider value={user}>
          <Routes>
            { ctx != null ? (<Route path="/" element={<LoggedIn/>} exact/>) : (<Route path="/" element={<NotLoggedIn/>} exact/>)}
            {/* <Route path="/" element={<Home/>} exact/> */}
            <Route path="/depositwithdraw/" element={<Depositwithdraw/>}/>
            <Route path="/balancehistory/" element={<AllData/>}/>
            <Route path="/alldatagraderequirement/" element={<AllDataGradeRequirement/>}/>
          </Routes>
        </UserContext.Provider>
      </HashRouter>
  );
}

export default Spa;