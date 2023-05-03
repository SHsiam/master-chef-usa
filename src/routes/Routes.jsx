import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import ViewRecipes from "../Pages/Recipes/ViewRecipes/ViewRecipes";

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

            
        ]
    }
])

export default router;