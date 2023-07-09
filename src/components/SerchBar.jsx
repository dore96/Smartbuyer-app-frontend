import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { Button, Drawer, List, ListItem, ListItemText, useMediaQuery, Box } from "@mui/material";
import routes from "../routes";
import { NavLink } from "react-router-dom";

const SearchBar = ({ onSearch, products }) => {
    const [drawerOpen, setDrawerOpen] = React.useState(false);
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

    const groupByCategory = (option) => option.category;

    return (
        <Box  spacing={2}>
            <Autocomplete
                freeSolo
                options={options}
                groupBy={groupByCategory}
                getOptionLabel={(option) => option.label}
                filterOptions={(options, state) =>
                    options.filter((option) =>
                        option.label.toLowerCase().includes(state.inputValue.toLowerCase())
                    )
                }
                onInputChange={(event, value) => onSearch(value)}
                renderInput={(params) => (
                    <TextField {...params} label="Search Product" variant="outlined"/>
                )}
            />
            {/* Shop By Categories Button */}
            <Button
                variant="contained"
                color="secondary"
                onClick={() => handleDrawerCategoryClick("Categories")}
            >
                Shop By Categories
            </Button>

            {/* Drawer for mobile navigation */}
            <Drawer
                anchor={isMobile ? "top" : "left"}
                open={drawerOpen}
                onClose={handleDrawerClose}
            >
                <List>
                    {/* Generate list items for each route */}
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
                                {/* List item text */}
                                <ListItemText
                                    primary={page.title.toUpperCase()}
                                    sx={{ textTransform: "uppercase" }}
                                />
                            </ListItem>
                        ))}
                </List>
            </Drawer>

        </Box>
    );
};

export default SearchBar;
