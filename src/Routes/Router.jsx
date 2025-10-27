import { createBrowserRouter, Router } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import PlantDetails from "../Components/PlantDetails";
import ProtectedRoute from "../Components/ProtectedRoute";
import Hero from "../Components/Hero";
import Plants from "../Components/Plants";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import MyProfile from "../Components/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "/plants",
        element: <ProtectedRoute>
          <Plants></Plants>
        </ProtectedRoute>
        ,
      },
      {
        path: "plants/:id",
        element: (
          <ProtectedRoute>
            <PlantDetails />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: <MyProfile></MyProfile>,
      },
      {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
    ],
  },
  
  {
    path: "*",
    element: <h2>Error 404 - Page Not Found</h2>,
  },
]);

export default router;