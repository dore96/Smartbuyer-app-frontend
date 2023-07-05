import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Dairy from "./pages/categoryPages/Dairy";
import MeatAndFish from "./pages/categoryPages/MeatAndFish";
import Snacks from "./pages/categoryPages/Snacks";

const routes = [
    {
        key: "home-route",
        title: "Home",
        path: "/",
        enabled: true,
        showInMenu: true,
        component: Home,
    },
    {
        key: "about-route",
        title: "About",
        path: "/about",
        enabled: true,
        showInMenu: true,
        component: About,
    },
    {
        key: "cart-route",
        title: "cart",
        path: "/cart",
        enabled: true,
        showInMenu: true,
        component: Cart,
    },
    {
        key: "Shop-route",
        title: "Shop",
        path: "/shop",
        enabled: true,
        showInMenu: true,
        component: Shop,
    },
    {
        key: "Shop-route",
        title: "all",
        path: "/shop",
        enabled: true,
        showInMenu: false,
        component: Shop,
    },
    {
        key: "Shop-dairy-route",
        title: "dairy",
        path: "/shop/dairy",
        enabled: true,
        showInMenu: false,
        component: Dairy,
    },
    {
        key: "Shop-snacks-route",
        title: "snacks",
        path: "/shop/snacks",
        enabled: true,
        showInMenu: false,
        component: Snacks,
    },
    {
        key: "Shop-route",
        title: "meat and fish",
        path: "/shop/meat&fish",
        enabled: true,
        showInMenu: false,
        component: MeatAndFish,
    },
];

export default routes;
