import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import News from "../pages/News/News";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader:()=>fetch('/news.json')
            },
            {
                path: "/news/:id",
                element:<PrivateRoutes><News/></PrivateRoutes>
        }
            ,
            {
                path: "/login",
                element:<Login/>
            },
            {
                path: "/register",
                element:<Register/>
            }
        ]
    },
]);

export default router;
