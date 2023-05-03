import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import ViewRecipes from "../Pages/Recipes/ViewRecipes/ViewRecipes";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";

const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
           {
            path:'chef/:id',
            element:<ViewRecipes></ViewRecipes>,
            loader:({params})=>fetch(`http://localhost:5000/chef/${params.id}`)
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