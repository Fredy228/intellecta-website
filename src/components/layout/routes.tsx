import { createBrowserRouter } from "react-router-dom";
import Test from "screen/Test/Test";
import Home from "screen/Home/Home";
import Root from "components/layout/Root/Root";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/test",
        element: <Test />
      }
    ]
  }
]);
