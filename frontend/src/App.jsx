import { RouterProvider, createBrowserRouter } from "react-router";
import { ConfigProvider } from "antd";

import { hotelLoader, hotelsLoader } from "./loaders/hotelsLoader";

import Home from "./pages/home";
import Hotels from "./pages/hotels";
import Hotel from "./pages/hotel";
import AboutUs from "./pages/about-us";

import Layout from "./components/Layout";

const theme = {
    token: {
        fontSize: 16,
    },
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
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
    return (
        <ConfigProvider theme={theme}>
            <RouterProvider router={router} />
        </ConfigProvider>
    );
}

export default App;
