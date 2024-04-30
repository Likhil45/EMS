import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";
// import {
// 	MDBContainer,
// 	MDBInput,
// 	MDBBtn,
// } from 'mdb-react-ui-kit';

function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const roles=["user","mod","admin"];
  const [role, setRole] = useState([roles[0]]);
  const [error, setError] = useState("");
  const history = useNavigate();
  

  

  const handleSignin = async () => {
    try {
      if (!username || !password || !email) {
        setError("Please enter all fields.");
        return;
      }

      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        { username, email, password, role}
      );
      console.log("Signin successful:", response.data);
      history("/login");
    } catch (error) {
      console.error(
        "Signin failed:",
        error.response ? error.response.data : error.message
      );
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="border rounded-lg p-4"
        style={{ width: "500px", height: "auto" }}
      >
        {/* <MDBContainer className="p-3">  */}
        <h2 className="mb-4 text-center">Signin Page</h2>
        <label>User Name</label>
        <input
          value={username}
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <br></br>
        <label>Email</label>
        <input
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br></br>

        <label>Role</label>
        <select name="role"  onChange={(e) => setRole([e.target.value])}
          defaultValue={role}>
          {/* <option
         
            // value={role}
            // onClick={(e) =>
            //   setRole(
            //     // Replace the state
            //     [
            //       // with a new array
            //       ...role, // that contains all the old items
            //       { id: nextId++, name: "user"}, // and one new item at the end
            //     ]
            //   )
            // }
          >
          </option> */}
          {roles.map((option, idx) => (
          <option key={idx}>{option}</option>
          
        ))}
        </select>  

        
        <label>Password</label>
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        {/* <MDBInput wrapperClass='mb-4' placeholder='Email address' id='email' value={username} type='email' onChange={(e) => setUsername(e.target.value)} />  */}
        {/* <MDBInput wrapperClass='mb-4' placeholder='Password' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />  */}
        {error && <p className="text-danger">{error}</p>}{" "}
        {/* Render error message if exists */}
        <button
          className="mb-4 d-block btn-primary"
          style={{ height: "50px", width: "100%" }}
          onClick={handleSignin}
        >
          Sign in
        </button>
        <div className="text-center">
          {/* <p>Not a member? <a href="/signup" >Register</a></p>  */}
        </div>
        {/* </MDBContainer>  */}
      </div>
    </div>
  );
}

export default Signin;
