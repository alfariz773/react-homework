import { createBrowserRouter } from "react-router-dom";

import Listproduct from "./components/blog/listproduct";
import Viewproduct from "./components/blog/viewproduct";
import Login from "./components/auth/login";
import Register from "./components/auth/register";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/products", element: <Listproduct /> },
  { path: "/products/view/:id", element: <Viewproduct /> },
]);

export default router;
