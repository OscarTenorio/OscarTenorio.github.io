import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from './home';
import NavBar from './navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Depositwithdraw from "./depositwithdraw";
import AllData from "./alldata";
import UserContext from './userContext';
import AllDataGradeRequirement from './alldatagraderequirement';

function Spa() {

  return (
      <HashRouter>
        <NavBar/>
        <UserContext.Provider value={{users:[{name:"DefaultUser",email:"defaultEmail@email.com",password:"default",balance:1, history:[], blank:true}]}}>
          <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/depositwithdraw/" element={<Depositwithdraw/>}/>
            <Route path="/balancehistory/" element={<AllData/>}/>
            <Route path="/alldatagraderequirement/" element={<AllDataGradeRequirement/>}/>
          </Routes>
        </UserContext.Provider>
      </HashRouter>
  );
}

export default Spa;