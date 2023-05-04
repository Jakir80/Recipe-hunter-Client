import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import ChefRecipe from "../Details/ChefRecipe";
import Errorpage from "../ErrorPage/Errorpage";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import Login from "../Login/Login";
import PrivateRoute from "../PraivateRout/PraivateRout";
import SignUp from "../Register/SignUp";
const router = createBrowserRouter([{
  path: '/',
  element: <Layout></Layout>,
  errorElement: <Errorpage></Errorpage>,
  children: [
    {
      path: "/",
      element: <Home></Home>,
      loader: () => fetch('https://chef-time-server-site-p1pz8hbzt-jakir80.vercel.app/tradioionals')
    },
    {
      path: '/details/:id',
      element: <PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute>,
      loader: ({ params }) => fetch(`https://chef-time-server-site-p1pz8hbzt-jakir80.vercel.app/details/${params.id}`)

    },
    {
      path: '/register',
      element: <SignUp></SignUp>
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/blog',
      element: <Blog></Blog>
    }
  ]
}])
export default router;