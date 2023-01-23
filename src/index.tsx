import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
    createBrowserRouter,RouterProvider
} from "react-router-dom";
import Root from "./Routes";
import ErrorPage from "./pages/ErrorPage";
import Categories from "./pages/Categories";
import Suppliers from "./pages/Suppliers";
import Products from "./pages/Products";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path: "categories",
                element: <Categories />,
            },
            {
                path: "suppliers",
                element: <Suppliers />,
            },
            {
                path: "products",
                element: <Products />,
            },
        ],
    },

])


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>

);
