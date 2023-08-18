import React, {useState} from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Button, Drawer, List, ListItem, ListItemText, useMediaQuery, Grid } from "@mui/material";
import routes from "../routes";
import { NavLink } from "react-router-dom";
const SearchBar = ({ onSearch, products }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    // Handler for closing the drawer
    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    // Handler for clicking on the category drawer
    const handleDrawerCategoryClick = (category) => {
        setDrawerOpen(true);
    };

    const options = products.map((product) => ({
        id: product.id,
        label: product.name,
        category: product.category
    }));

    const getOptionLabel = (option) => {
        if (typeof option === 'string') {
            return option; // If the option is a string, return it as-is
        }
        if (option.label) {
            return option.label; // If the option has a label property, return it
        }
        return ''; // Return an empty string if the option doesn't have a valid label
    };

    const groupByCategory = (option) => option.category;

    return (
        <Grid container spacing={2} alignItems="center">
            {/* Shop By Categories Button */}
            <Grid item xs={12} sm={6} md={2} sx={{ marginTop: isMobile ? '10px' : 0 }}>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDrawerCategoryClick("Categories")}
                    fullWidth={isMobile}
                    sx={{ display: 'inline-block' }}
                >
                    Shop By Categories
                </Button>
            </Grid>
            {/* Search Field */}
            <Grid item xs={12} sm={6} md={10}>
                <Autocomplete
                    freeSolo
                    options={options}
                    groupBy={groupByCategory}
                    getOptionLabel={getOptionLabel}
                    filterOptions={(options, state) =>
                        options.filter((option) =>
                            option.label.toLowerCase().includes(state.inputValue.toLowerCase())
                        )
                    }
                    onInputChange={(event, value) => onSearch(value)}
                    renderInput={(params) => (
                        <TextField {...params} label="Search Product" variant="outlined" />
                    )}
                />
            </Grid>
            {/* Drawer for mobile navigation */}
            <Drawer
                anchor={isMobile ? "top" : "left"}
                open={drawerOpen}
                onClose={handleDrawerClose}
            >
                <List>
                    {/* Generate list items for each route */}
                    {routes
                        .filter((page) => page.shoppingRout)
                        .map((page) => (
                            <ListItem
                                key={page.key}
                                button
                                component={NavLink}
                                to={page.path}
                                onClick={handleDrawerClose}
                            >
                                {/* List item text */}
                                <ListItemText
                                    primary={page.title.toUpperCase()}
                                    sx={{ textTransform: "uppercase" }}
                                />
                            </ListItem>
                        ))}
                </List>
            </Drawer>
        </Grid>
    );
};

export default SearchBar;
