import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../Provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import React from "react";
import Home from "../Components/Home";
import Login from "../Pages/Login";
import Logout from "../Pages/Logout";
import Signin from "../Components/Signin";
import Get from "../Pages/Get";
import Profile from "../Pages/Profile";



const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/home",
      element: <div>Home Page</div>,
    },
    {
      path: "/about",
      element: <div>About Us</div>,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/",
          element: <div>User Home Page</div>,
        },
        {
          path: "/get",
          element: <Get /> ,
        },
        {
          path: "/profile",
          element: <Profile />  ,
        },
        {
            path: "/post",
            element: <div>Post Request</div>,
          },
        {
          path: "/logout",
          element: <Logout />,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signin />,
    },
    {
      path: "/logout",
      element: <Logout />,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;