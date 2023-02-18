import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/Home/About/About";
import Contact from "../Pages/Home/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import Products from "../Pages/Home/Products/Products/Products";
import ServiceDetails from "../Pages/Home/Services/ServiceDetails/ServiceDetails";
import Services from "../Pages/Home/Services/Services/Services";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Signup/SignUp";

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
                path: '/service/:id',
                element: <ServiceDetails />,
                loader: ({params}) =>fetch(`http://localhost:4000/service/${params.id}`)
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/products',
                element: <Products />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
        ]
    }
]);

export default router;