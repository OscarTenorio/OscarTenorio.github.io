import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// Components =================
import NotLoggedIn from './notLoggedIn';
import LoggedIn from './LoggedIn';
import NavBar from './navbar';
import Depositwithdraw from "./depositwithdraw";
import AllData from "./alldata";
import UserContext from './userContext';
import AllDataGradeRequirement from './alldatagraderequirement';
import LoggedInUser from './userInfo';
import ReferenceLinks from './referencelinks';

function Spa() {
  const [user, setUser] = React.useState({});
  const userValue = React.useMemo(() => ({ user, setUser }), [user]);

  console.log('SPA memoized value: ', userValue);

  return (
    <>
      <HashRouter>
        { Object.keys(userValue.user).length > 0 ? (
          <>
            <NavBar/>
            <LoggedInUser/>
          </>
        ) : (
          <></>
        )}
        <UserContext.Provider value={userValue}>
          <Routes>
            { Object.keys(userValue.user).length > 0 ? (<Route path="/" element={<LoggedIn/>} exact/>) : (<Route path="/" element={<NotLoggedIn/>} exact/>)}
            <Route path="/depositwithdraw/" element={<Depositwithdraw/>}/>
            <Route path="/balancehistory/" element={<AllData/>}/>
            <Route path="/alldatagraderequirement/" element={<AllDataGradeRequirement/>}/>
          </Routes>
        </UserContext.Provider>
      </HashRouter>
      <div className="d-flex justify-content-center mt-5">
        <ReferenceLinks/>
      </div>
    </>
  );
}

export default Spa;