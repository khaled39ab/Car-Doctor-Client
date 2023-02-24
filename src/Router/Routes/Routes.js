import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import About from "../../Pages/Home/About/About";
import Contact from "../../Pages/Home/Contact/Contact";
import Home from "../../Pages/Home/Home/Home";
import ProductsPage from "../../Pages/Home/Products/ProductsPage";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails/ServiceDetails";
import ServicesPage from "../../Pages/Home/Services/ServicesPage";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Orders from "../../Pages/Orders/Orders/Orders";
import SignUp from "../../Pages/Signup/SignUp";
import RequireAuth from "../RequireAuth/RequireAuth";

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
                element: <ServicesPage />
            },
            {
                path: '/service/:id',
                element: <ServiceDetails />,
                loader: ({ params }) => fetch(`http://localhost:4000/service/${params.id}`)
            },
            {
                path: '/checkout',
                element: <RequireAuth><Checkout /></RequireAuth>
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/products',
                element: <ProductsPage />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/orders',
                element: <RequireAuth><Orders /></RequireAuth>
            },
            {
                path: '*',
                element: <NotFound />
            },
        ]
    }
]);

export default router;