import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Chef from "../Pages/Home/Chef/Chef";

const router= createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            // {
            //     path:'chef',
            //     element:<Chef></Chef>,
            //     loader:()=>fetch('http://localhost:5000/chef')
            // }

            
        ]
    }
])

export default router;