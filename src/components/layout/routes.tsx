import {createBrowserRouter} from "react-router-dom";
import {Test} from "pages/Test/Test";
import Home from "pages/Home/Home";
import Root from "components/layout/Root/Root";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path: "/test",
                element: <Test/>,
            }
        ]
    },

]);
