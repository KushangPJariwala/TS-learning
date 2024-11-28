import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Error from "./pages/error";
import Movie from "./pages/movie";
import BookMark from "./pages/bookmark";
import Series from "./pages/series";

export const router = createBrowserRouter(
[
    {
        path:'/',
        element:<Home/>,
        errorElement:<Error/>
    },
    {
        path:'/movie',
        element:<Movie/>,
        errorElement:<Error/>
    },
    {
        path:'/bookmark',
        element:<BookMark/>,
        errorElement:<Error/>
    },
    {
        path:'/series',
        element:<Series/>,
        errorElement:<Error/>
    },
 
]
) 