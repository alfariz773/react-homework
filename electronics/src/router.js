import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ListProducts from "./components/blog/List";
import CreateProduct from "./components/blog/create";
import ViewProduct from "./components/blog/View";
import EditProduct from "./components/blog/Edit";

const router = createBrowserRouter([
  { path: "/", element: <App /> },                       // wrapper
  { path: "/products", element: <ListProducts /> },      // list page
  { path: "/products/create", element: <CreateProduct /> }, // add product
  { path: "/products/view/:id", element: <ViewProduct /> }, // view product
  { path: "/products/edit/:id", element: <EditProduct /> }, // edit product
  { path: "*", element: <h2>Page Not Found</h2> }        // catch-all
]);

export default router;