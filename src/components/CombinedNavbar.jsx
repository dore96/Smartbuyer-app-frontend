import React from "react";
import {
    Box, Link, Container, Toolbar, Button, Drawer,
    List, ListItem, ListItemText, useMediaQuery, Stack,
} from "@mui/material";
import routes from "../routes";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import SmartBuyerLogo from "../SmartBuyerLogo.png";

const CombinedNavbar = ({ itemsInCart }) => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const handleDrawerCategoryClick = (category) => {
        setDrawerOpen(true);
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "secondary.main",
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <img src={SmartBuyerLogo} alt="Logo" style={{ height: "50px" }} />
                        {!isMobile && (
                            <>
                                <Link
                                    key="home"
                                    component={NavLink}
                                    to="/"
                                    color="black"
                                    underline="none"
                                    variant="button"
                                    sx={{ fontSize: "large" }}
                                >
                                    <Button variant="contained" color="secondary">
                                        Home
                                    </Button>
                                </Link>
                                <Link
                                    key="about"
                                    component={NavLink}
                                    to="/about"
                                    color="black"
                                    underline="none"
                                    variant="button"
                                    sx={{ fontSize: "large" }}
                                >
                                    <Button variant="contained" color="secondary">
                                        About
                                    </Button>
                                </Link>
                                <Link
                                    key="shop"
                                    component={NavLink}
                                    to="/shop"
                                    color="black"
                                    underline="none"
                                    variant="button"
                                    sx={{ fontSize: "large" }}
                                >
                                    <Button variant="contained" color="secondary">
                                        Shop
                                    </Button>
                                </Link>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => handleDrawerCategoryClick("Categories")}
                                    sx={{ marginLeft: "auto", marginRight: "1rem" }}
                                >
                                    Shop By Categories
                                </Button>
                                <Link
                                    key="cart"
                                    component={NavLink}
                                    to="/cart"
                                    color="black"
                                    underline="none"
                                    variant="button"
                                    sx={{ fontSize: "large" }}
                                >
                                    <Badge
                                        badgeContent={itemsInCart}
                                        color="secondary"
                                    >
                                        <ShoppingCartIcon />
                                    </Badge>
                                </Link>
                            </>
                        )}
                        {isMobile && (
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => handleDrawerCategoryClick("Categories")}
                                sx={{ marginLeft: "auto" }}
                            >
                                Menu
                            </Button>
                        )}
                    </Stack>
                    <Drawer
                        anchor={isMobile ? "top" : "left"}
                        open={drawerOpen}
                        onClose={handleDrawerClose}
                    >
                        <List>
                            {routes
                                .filter((page) => !page.showInMenu)
                                .map((page) => (
                                    <ListItem
                                        key={page.key}
                                        button
                                        component={NavLink}
                                        to={page.path}
                                        onClick={handleDrawerClose}
                                    >
                                        <ListItemText
                                            primary={page.title.toUpperCase()}
                                            sx={{ textTransform: "uppercase" }}
                                        />
                                    </ListItem>
                                ))}
                        </List>
                    </Drawer>
                </Toolbar>
            </Container>
        </Box>
    );
};

export default CombinedNavbar;
