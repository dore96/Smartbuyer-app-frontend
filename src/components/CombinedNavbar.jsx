import React from "react";
import {
    Box,
    Link,
    Container,
    Toolbar,
    Typography,
    Button,
    Drawer,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import routes from "../routes";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";

const CombinedNavbar = ({ itemsInCart }) => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);

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
                    <Typography variant="h6">
                        Smart Buyer App
                    </Typography>
                    {routes
                        .filter((page) => page.showInMenu)
                        .map((page) => (
                            <Link
                                key={page.key}
                                component={NavLink}
                                to={page.path}
                                color="black"
                                underline="none"
                                variant="button"
                                sx={{ fontSize: "large", marginLeft: "2rem" }}
                            >
                                {page.title !== "cart" ? (
                                    <Button variant="contained" color="secondary">
                                        {page.title}
                                    </Button>
                                ) : (
                                    <>
                                        <Badge
                                            badgeContent={itemsInCart}
                                            color="secondary"
                                            sx={{ marginRight: "1rem" }}
                                        >
                                            <ShoppingCartIcon />
                                        </Badge>
                                        <Button variant="contained" color="secondary">
                                            {page.title}
                                        </Button>
                                    </>
                                )}
                            </Link>
                        ))}
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleDrawerCategoryClick("Categories")}
                        sx={{ marginLeft: "1rem" }}
                    >
                        Shop By Categories
                    </Button>
                    <Drawer
                        anchor="left"
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
                                        <ListItemText primary={page.title.toUpperCase()} sx={{ textTransform: "uppercase" }} />
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
