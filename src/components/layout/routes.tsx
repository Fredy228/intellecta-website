import { createBrowserRouter } from "react-router-dom";
import Test from "screen/Test/Test";
import Home from "screen/Home/Home";
import Root from "components/layout/Root/Root";
import Students from "screen/Students/Students";
import JoinUs from "screen/JoinUs/JoinUs";
import Contacts from "../../screen/Contacts/Contacts";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/students", element: <Students /> },
      { path: "/join_us", element: <JoinUs /> },
      { path: "/contacts", element: <Contacts /> },
    ]
  },
  {
    path: "/test",
    element: <Test />
  }
]);
