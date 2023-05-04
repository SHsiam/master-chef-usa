import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import ViewRecipes from "../Pages/Recipes/ViewRecipes/ViewRecipes";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
           {
            path:'chef/:id',
            element:<PrivateRoute><ViewRecipes></ViewRecipes></PrivateRoute>,
            loader:({params})=>fetch(`https://master-chef-usa-server-mdshiam4-gmailcom.vercel.app/chef/${params.id}`)
           },
           {
            path:'blog',
            element:<Blog></Blog>
           },
           {
            path:'login',
            element:<Login></Login>
           },
           {
            path:'register',
            element:<Register></Register>
           }
            
        ]
    }
])

export default router;