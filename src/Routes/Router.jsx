import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import PlantDetails from "../Components/PlantDetails";
import Hero from "../Components/Hero";
import Plants from "../Components/Plants";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import MyProfile from "../Components/MyProfile";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Support from "../Components/Support";

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
        element: <Plants></Plants>,
      },
      {
        path: "plants/:id",
        element: <PlantDetails />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "support",
        element: <Support />,
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