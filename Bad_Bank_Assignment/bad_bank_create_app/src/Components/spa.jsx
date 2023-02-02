import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import CreateAccount from "./createaccount";
import Home from './home';
import NavBar from './navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Login from "./login";
import Depositwithdraw from "./depositwithdraw";
import Balance from "./balance";
import AllData from "./alldata";


const UserContext = React.createContext(null);

function Spa() {
  return (
      <HashRouter>
        <NavBar/>
        <UserContext.Provider value={{users:[{name:"Oscar",email:"example@mit.edu",password:"secret",balance:12000}]}}>
          <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/CreateAccount/" element={<CreateAccount/>}/>
            <Route path="/login/" component={<Login/>}/>
            <Route path="/depositwithdraw/" element={<Depositwithdraw/>}/>
            <Route path="/balance/" element={<Balance/>}/>
            <Route path="/alldata/" element={<AllData/>}/>
          </Routes>
        </UserContext.Provider>
      </HashRouter>
  );
}

export default Spa;