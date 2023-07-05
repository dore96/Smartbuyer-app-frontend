import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";

const routes = [
    {
        key: "home-route",
        title: "Home",
        path: "/",
        enabled: true,
        component: Home,
    },
    {
        key: "about-route",
        title: "About",
        path: "/about",
        enabled: true,
        component: About,
    },
    {
        key: "cart-route",
        title: "cart",
        path: "/cart",
        enabled: true,
        component: Cart,
    },
    {
        key: "Shop-route",
        title: "Shop",
        path: "/shop",
        enabled: true,
        component: Shop,
    },
];

export default routes;
