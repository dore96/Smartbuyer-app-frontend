import React from "react";
import {
    Box,
    Link,
    Container,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import  routes  from "../routes";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";

const Navbar = ({itemsInCart}) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
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
                    <Typography
                        variant="h6"
                        sx={{
                            mr: 2,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        Smart Buyer App
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {routes.map((page) => (
                                    <Link
                                        key={page.key}
                                        component={NavLink}
                                        to={page.path}
                                        color="black"
                                        underline="none"
                                        variant="button"
                                    >
                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{page.title}</Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
                    >
                        Smart Buyer App
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                marginLeft: "1rem",
                            }}
                        >
                            {routes.filter((page) => page.showInMenu).map((page) => (
                                <Link
                                    key={page.key}
                                    component={NavLink}
                                    to={page.path}
                                    color="black"
                                    underline="none"
                                    variant="button"
                                    sx={{ fontSize: "large", marginLeft: "2rem" }}
                                >
                                    {page.title !== 'cart' ? (
                                        <Button variant="contained" color="secondary">{page.title}</Button>
                                    ) : (
                                        <><Badge badgeContent={itemsInCart} color='secondary' sx={{ marginRight: '1rem' }}>
                                            <ShoppingCartIcon />
                                        </Badge>
                                        <Button variant="contained" color="secondary">{page.title}</Button></>
                                    )}
                                </Link>
                            ))}
                        </Box>
                    </Box>
                </Toolbar>
            </Container>
        </Box>
    );
};

export default Navbar;