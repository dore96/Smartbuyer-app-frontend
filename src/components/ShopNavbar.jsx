import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Typography} from '@mui/material';
import { NavLink } from 'react-router-dom';
import routes from "../routes";

function ShopNavbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" color="secondary">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="text"
                        component={NavLink}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Categories
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {routes.map((page) => (
                                <MenuItem key={page.key} onClick={handleCloseNavMenu}>
                                    <Button
                                        variant="text"
                                        component={NavLink}
                                        to={page.path}
                                        sx={{ justifyContent: 'center', width: '100%', py: 2 }}
                                    >
                                        {page.title}
                                    </Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Button variant="contained" color="secondary"
                            component={NavLink}
                            to=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                    >
                        Categories
                    </Button>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
                        {routes
                            .filter((route) => !route.showInMenu)
                            .map((route) => (
                                <Button variant="contained" color="secondary"
                                        key={route.key}
                                        onClick={handleCloseNavMenu}
                                        component={NavLink}
                                        to={route.path}
                                        sx={{ mx: 1.5,my: 2, color: 'white', display: 'block' }}
                                >
                                    {route.title}
                                </Button>
                            ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {routes.map((page) => (
                                <MenuItem key={page.key} onClick={handleCloseUserMenu}>
                                    <Button variant="contained" color="secondary"
                                            component={NavLink}
                                            to={page.path}
                                            sx={{ justifyContent: 'center', width: '100%', py: 2 }}
                                    >
                                        {page.title}
                                    </Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ShopNavbar;
