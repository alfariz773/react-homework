import { createBrowserRouter } from "react-router-dom";
import Register  from "./components/auth/register";
import Login from "./components/auth/Login";

const router = createBrowserRouter([
    {path:'/register', element:<Register/>},
    {path:'/Login', element: <Login/>},
])

export default router;