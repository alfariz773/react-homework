import { createBrowserRouter } from "react-router-dom";
import Register from "./Components/auth/Register";
import Login from "./Components/auth/Login";
import EditBook from "./Components/books/edit";
import ViewBook from "./Components/books/view";
import BookList from "./Components/books/list";
import CreateBook from "./Components/books/Createbook";


const router = createBrowserRouter([
     {path: "/", element: <Login />},
    {path: "/register", element: <Register />},
    {path: "/login", element: <Login />},
    {path: "/create", element: <CreateBook />},
    {path: "/edit/:id", element: <EditBook />},
    {path: "/view/:id", element: <ViewBook />},
    {path: "/list", element: <BookList />}
]);

export default router;
