import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ListProducts from "./components/blog/List";
import CreateProduct from "./components/blog/create";
import ViewProduct from "./components/blog/View";
import EditProduct from "./components/blog/Edit";

const router = createBrowserRouter([
  { path: "/", element: <App /> },                      
  { path: "/products", element: <ListProducts /> },      
  { path: "/products/create", element: <CreateProduct /> },
  { path: "/products/view/:id", element: <ViewProduct /> }, 
  { path: "/products/edit/:id", element: <EditProduct /> }, 
         
]);

export default router;