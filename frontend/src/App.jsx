import { RouterProvider, createBrowserRouter } from "react-router";

import { featuredHotelsLoader, hotelLoader, hotelsLoader } from "./loaders/hotelsLoader";

import Home from "./pages/home";
import Hotels from "./pages/hotels";
import Hotel from "./pages/hotel";
import AboutUs from "./pages/about-us";

import Layout from "./components/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: featuredHotelsLoader,
            },
            {
                path: "hotels",
                element: <Hotels />,
                loader: hotelsLoader,
            },
            {
                path: "hotels/:id",
                element: <Hotel />,
                loader: hotelLoader,
            },
            {
                path: "about-us",
                element: <AboutUs />,
            },
            {
                path: "*",
                element: <div>404 Not Found</div>,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
