import { RouterProvider, createBrowserRouter } from "react-router";

import Hotels from "./pages/hotels";
import AboutUs from "./pages/about-us";

import Layout from "./components/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Hotels />,
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
