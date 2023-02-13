import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/Home/About/About";
import Contact from "../Pages/Home/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import Products from "../Pages/Home/Products/Products/Products";
import Services from "../Pages/Home/Services/Services/Services";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/products',
                element: <Products />
            },
        ]
    }
]);

export default router;