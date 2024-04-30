import React, { useState } from 'react'; 
import { useAuth } from "../Provider/authProvider";
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AuthService from '../Services/auth.service';

axios.defaults.baseURL='http://localhost:8080'
axios.defaults.headers.post["Content-Type"]='application/json'
// import { 
// 	MDBContainer, 
// 	MDBInput, 
// 	MDBBtn, 
// } from 'mdb-react-ui-kit'; 

function Login() { 
	const [username, setUsername] = useState(''); 
	const [password, setPassword] = useState(''); 
	const [error, setError] = useState(''); 
	const history = useNavigate(); 
	const { setToken} = useAuth();
	const navigate = useNavigate();
  

	const handleLogin = async () => { 


		try { 
			if (!username || !password) { 
				setError('Please enter both username and password.');
				toast("Fields need to be filled") 
				return; 
			} 
			
			// AuthService.login(username,password);

			const response = await axios.post('http://localhost:8080/api/auth/signin', { username, password }); 
			toast('Succefully loggedin !')
			console.log('Login successful:', response.data); 
			setToken(response.data.accessToken);
			// console.log('Login successful:', response.data.accessToken); 

			// navigate('/profile');

			// navigate("/profile", { replace: true });
			history('/home'); 
		} catch (error) { 
			console.error('Login failed:', error.response ? error.response.data : error.message); 
			setError('Invalid username or password.'); 
		} 
	}; 

	return ( 
		<div className="d-flex justify-content-center align-items-center vh-100"> 
			<div className="border rounded-lg p-4" style={{ width: '500px', height: 'auto' }}> 
				{/* <MDBContainer className="p-3">  */}

					<h2 className="mb-4 text-center">Login Page</h2> 
					<div className="form-floating mb-3">
                    <input  value={username} type="text" class="form-control" id="usrname" onChange={(e) => setUsername(e.target.value)}></input><br></br>
                    <label for="usrname">User Name</label>
					</div>

					<div class="form-floating">

                    <input value={password} type="password" class="form-control" id="pswd" onChange={(e) => setPassword(e.target.value)} ></input>
                    <label for="pswd">Password</label>
					</div>
					{/* <MDBInput wrapperClass='mb-4' placeholder='Email address' id='email' value={username} type='email' onChange={(e) => setUsername(e.target.value)} />  */}
					{/* <MDBInput wrapperClass='mb-4' placeholder='Password' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />  */}
					{error && <p className="text-danger">{error}</p>} {/* Render error message if exists */} 
					<button className="mb-4 d-block btn-primary" style={{ height:'50px',width: '100%' }} onClick={handleLogin}>Log in</button> 
					<div className="text-center"> 
						<p>Not a member? <a href="/signin" >Register</a></p> 
					</div> 
					<ToastContainer />
				{/* </MDBContainer>  */}
			</div> 
		</div> 
	); 
} 

 

 export default Login;