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
import HealthCare from "./pages/CategoryPages/HealthCare";
import Frozen from "./pages/CategoryPages/FrozenFoods";
import CondimentsAndSpices from "./pages/CategoryPages/Condiments&Spices";
import DryAndBakingGoods from "./pages/CategoryPages/Dry&BakingGoods";
import HouseholdAndCleaningSupplies from "./pages/CategoryPages/Household&CleaningSupplies";

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
        key: "Shop-Healt-Care-route",
        title: "Health Care",
        path: "/shop/Health Care",
        enabled: true,
        showInMenu: false,
        shoppingRout: true,
        component: HealthCare,
    },
    {
        key: "Shop-Frozen-route",
        title: "Frozen",
        path: "/shop/Frozen",
        enabled: true,
        showInMenu: false,
        shoppingRout: true,
        component: Frozen,
    },
    {
        key: "Shop-Condiments-Spices-route",
        title: "Condiments & Spices",
        path: "/shop/Condiments & Spices",
        enabled: true,
        showInMenu: false,
        shoppingRout: true,
        component: CondimentsAndSpices,
    },
    {
        key: "Shop-Dry-Baking-Goods-route",
        title: "Dry & Baking Goods",
        path: "/shop/Dry/Baking Goods",
        enabled: true,
        showInMenu: false,
        shoppingRout: true,
        component: DryAndBakingGoods,
    },
    {
        key: "Shop-Household-Cleaning Supplies-route",
        title: "Household & Cleaning Supplies",
        path: "/shop/Household & Cleaning Supplies",
        enabled: true,
        showInMenu: false,
        shoppingRout: true,
        component: HouseholdAndCleaningSupplies,
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
