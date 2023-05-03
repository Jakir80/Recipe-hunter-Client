import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import ChefRecipe from "../Details/ChefRecipe";
import Home from "../Home/Home";
import Layout from "../Layout/Layout";
import Login from "../Login/Login";
import Recipe from "../Recipe/ChefRecipe";
import SignUp from "../Register/SignUp";
const router=createBrowserRouter([{
path:'/',
element:<Layout></Layout>,
// errorElement:<Errorpage></Errorpage>,
children:[
    {
path:'/home',
element:<Home></Home>,
loader:()=>fetch('http://localhost:5000/tradioionals')
},

{
    path:'/recipe',
    element:<Recipe></Recipe>

},
{
  path:'/details/:id',
  element: <ChefRecipe></ChefRecipe>,
  loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`)
  
},
{
  path:'/register',
  element:<SignUp></SignUp>
},
{
  path:'/login',
  element:<Login></Login>
},
{
  path:'/blog',
  element:<Blog></Blog>
}
 ] 
}])
export default router;