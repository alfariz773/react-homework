import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Crud from "./components/curd";

const router = createBrowserRouter([
    { path: '', element: <App/> },
    { path: 'curd', element: <Crud/> },
]);

export default router;