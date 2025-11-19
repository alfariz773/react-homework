import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Crud from "./components/curd";
import ListPosts from "./components/blog/ListPost";
import CreatePost from "./components/blog/CreatePost";
import ViewPost from "./components/blog/Viewpost";
import Editpost from "./components/blog/editpost";
const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'curd', element: <Crud/> },
    { path: 'blog/posts/', element: <ListPosts/> },
    { path : 'blog/posts/create' , element : <CreatePost/> },
    { path: 'blog/posts/:postId', element: <ViewPost/>},
    { path : 'blog/posts/:postId/edit', element: <Editpost/>},
]); 

export default router;