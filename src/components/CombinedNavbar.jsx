import React from "react";
import { Box, Link, Container, Toolbar, Button, useMediaQuery, Stack, Badge } from "@mui/material";
import routes from "../routes";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SmartBuyerLogo from "../SmartBuyerLogo.png";

const CombinedNavbar = ({ itemsInCart }) => {
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

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
                        {/* Smart Buyer Logo */}
                        <img src={SmartBuyerLogo} alt="Logo" style={{ height: "50px" }} />

                        {/* Desktop navigation links */}
                        {!isMobile && (
                            <>
                                {routes.map((route) => {
                                    // Check if the route should be shown in the menu
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
                                                {/* Render the route as a Button */}
                                                {route.path !== "/cart" ? (
                                                    <Button variant="contained" color="secondary">
                                                        {route.title}
                                                    </Button>
                                                ) : (
                                                    // Render the cart route with a Badge
                                                    <Badge badgeContent={itemsInCart} color="secondary">
                                                        <ShoppingCartIcon style={{ color: 'white' }} />
                                                    </Badge>
                                                )}
                                            </Link>
                                        );
                                    }
                                    return null;
                                })}
                            </>
                        )}

                        {/* Mobile menu button */}
                        {isMobile && (
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{ marginLeft: "auto" }}
                            >
                                Menu
                            </Button>
                        )}
                    </Stack>
                </Toolbar>
            </Container>
        </Box>
    );
};

export default CombinedNavbar;
