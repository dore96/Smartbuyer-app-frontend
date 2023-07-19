import React from "react";
import { Box, Link, Container, Toolbar, Button, useMediaQuery, Stack, Badge, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SmartBuyerLogo from "../SmartBuyerLogo.png";
import routes from "../routes";

const CombinedNavbar = ({ itemsInCart }) => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const [open, setOpen] = React.useState(false);

    return (
        <Box sx={{ width: "100%", height: "auto", backgroundColor: "secondary.main" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                        {/* Smart Buyer Logo */}
                        <Link key="home-route" component={NavLink} to="/">
                            <img src={SmartBuyerLogo} alt="Logo" style={{ height: isMobile ? "40px" : "50px" }} />
                        </Link>
                        {/* navigation links */}
                        {!isMobile ? (
                            // Desktop view: Show the buttons as part of the navbar
                            <>
                                {routes.map((route) => {
                                    if (route.showInMenu) {
                                        return (
                                            <Link
                                                key={route.key}
                                                component={NavLink}
                                                to={route.path}
                                                color="black"
                                                underline="none"
                                                variant="button"
                                                sx={{ fontSize: "large" }}
                                            >
                                                {route.path !== "/cart" ? (
                                                    <Button variant="contained" color="secondary">
                                                        {route.title}
                                                    </Button>
                                                ) : (
                                                    <Badge badgeContent={itemsInCart} color="secondary">
                                                        <ShoppingCartIcon style={{ color: "white" }} />
                                                    </Badge>
                                                )}
                                            </Link>
                                        );
                                    }
                                    return null;
                                })}
                            </>
                        ) : (
                            // Mobile view: Show the drawer button
                            <Button onClick={() => setOpen(true)} variant="contained" color="secondary">
                                Menu
                            </Button>
                        )}
                    </Stack>
                    {/* Login route button (on the right side) */}
                    <Link
                        key="login-route"
                        component={NavLink}
                        to="/login"
                        color="black"
                        underline="none"
                        variant="button"
                        sx={{ fontSize: "large", marginLeft: "auto" }}
                    >
                        <Button variant="contained" color="secondary">
                            Login
                        </Button>
                    </Link>
                </Toolbar>
            </Container>

            {/* The Drawer component for mobile view */}
            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                <List>
                    {routes.map((route) => {
                        if (route.showInMenu) {
                            return (
                                <ListItem component={NavLink} to={route.path} key={route.key}>
                                    <ListItemText primary={route.title} />
                                </ListItem>
                            );
                        }
                        return null;
                    })}
                </List>
            </Drawer>
        </Box>
    );
};

export default CombinedNavbar;
