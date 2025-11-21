import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Crud from "./components/curd";
import ListPosts from "./components/blog/ListPost";
import CreatePost from "./components/blog/CreatePost";
import Editpost from "./components/blog/Editpost";
import Register from "./components/auth/register";
import Login from "./components/auth/Login";
import ViewProduct from "./components/blog/View";
const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'curd', element: <Crud/> },
    { path: 'blog/posts/', element: <ListPosts/> },
    { path : 'blog/posts/create' , element : <CreatePost/> },
    { path: "/products/view/:id", element: <ViewProduct /> }, 
    { path : 'blog/posts/:postId/edit', element: <Editpost/>},
    { path: 'register', element:<Register/>},
    { path: 'login', element:<Login/>},
]); 

export default router;