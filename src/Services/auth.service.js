// import axios from "axios";
// import { useAuth } from "../Provider/authProvider";




// const API_URL = "http://localhost:8080/api/auth/";

// // const register = (username, email, password) => {
// //   return axios.post(API_URL + "signup", {
// //     username,
// //     email,
// //     password,
// //   });
// // };


// // const login = (username, password) => {

// // const { setToken } = useAuth();
// //   return axios
// //     .post(API_URL + "signin", {
// //       username,
// //       password,
// //     })
// //     .then((response) => {
// //       if (response.data.accessToken) {
// //         localStorage.setItem("user", JSON.stringify(response.data));
// // 			setToken(localStorage.getItem(response.data.accessToken));

// //       }

// //       return response.data;
// //     });
// // };

// // const logout = () => {
// //   localStorage.removeItem("user");
// // };

// const getCurrentUser = () => {
//   return JSON.parse(localStorage.getItem("user"));
// };

// const AuthService = {
// //   register,
//   login,
// //   logout,
//   getCurrentUser,
// };

// export default AuthService;