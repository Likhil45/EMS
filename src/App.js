import logo from './logo.svg';
import './App.css';
import Home from './Components/Home.js'
import React from 'react';
import Login from './Pages/Login.js';
import Signin from './Components/Signin.js'
import Navbar from './Components/NavbarComp.js';
import NavbarTest from './Components/NavbarTest.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthProvider from "./Provider/authProvider";
import Routes from "./Routes";


function App() {
  
  return (
    
    
      <div className="App">
      <NavbarTest sticky='top' />
        <div className="Content">
          <AuthProvider>
          <Routes />
            {/* <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signin" element={<Signin />}></Route>
            {/* <Route path="/signup" element={<SignupPage />}></Route>
            <Route path="/dashboard" element={<WelcomeDashboard />}></Route> */}
            {/* <Route path="/:id" element={<ID />}></Route> */}

            {/* <Route path="/:id" element={< />}></Route> */}
          {/* </Routes>  */}
          </AuthProvider >
        </div>
      </div>

  );
}


export default App;
