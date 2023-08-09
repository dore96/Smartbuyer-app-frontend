import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Dairy from "./pages/CategoryPages/Dairy";
import MeatAndFish from "./pages/CategoryPages/MeatAndFish";
import Snacks from "./pages/CategoryPages/Snacks";
import SignUpPage from "./pages/SingUpPage";
import Login from "./pages/Login";
import Drinks from "./pages/CategoryPages/Drinks";

const routes = [
    {
        key: "home-route",
        title: "Home",
        path: "/",
        enabled: true,
        showInMenu: true,
        shoppingRout: false,
        component: Home,
    },
    {
        key: "about-route",
        title: "About",
        path: "/about",
        enabled: true,
        showInMenu: true,
        shoppingRout: false,
        component: About,
    },
    {
        key: "Shop-route",
        title: "Shop",
        path: "/shop",
        enabled: true,
        showInMenu: true,
        shoppingRout: false,
        component: Shop,
    },
    {
        key: "Shop-all-route",
        title: "all",
        path: "/shop",
        enabled: true,
        showInMenu: false,
        shoppingRout: true,
        component: Shop,
    },
    {
        key: "Shop-dairy-route",
        title: "dairy",
        path: "/shop/dairy",
        enabled: true,
        showInMenu: false,
        shoppingRout: true,
        component: Dairy,
    },
    {
        key: "Shop-snacks-route",
        title: "snacks",
        path: "/shop/snacks",
        enabled: true,
        showInMenu: false,
        shoppingRout: true,
        component: Snacks,
    },
    {
        key: "Shop-meat&fish-route",
        title: "meat and fish",
        path: "/shop/meat&fish",
        enabled: true,
        showInMenu: false,
        shoppingRout: true,
        component: MeatAndFish,
    },
    {
        key: "Shop-drinks-route",
        title: "drinks",
        path: "/shop/drinks",
        enabled: true,
        showInMenu: false,
        shoppingRout: true,
        component: Drinks,
    },
    {
        key: "cart-route",
        title: "cart",
        path: "/cart",
        enabled: true,
        showInMenu: true,
        shoppingRout: false,
        component: Cart,
    },
    {
        key: "SignUpPage-route",
        title: "Sign Up Page",
        path: "/sign-up",
        enabled: true,
        showInMenu: false,
        shoppingRout: false,
        component: SignUpPage,
    },
    {
        key: "Login-route",
        title: "Login",
        path: "/login",
        enabled: true,
        showInMenu: false,
        shoppingRout: false,
        component: Login,
    },
];

export default routes;
