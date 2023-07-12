import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const SiteMap = () => {
    const links = [
        {
            to: "/",
            label: "Home",
        },
        {
            to: "/about",
            label: "About",
        },
        {
            to: "/shop",
            label: "Shop",
        },
        {
            to: "/cart",
            label: "Cart",
        },
        {
            to: "/contact",
            label: "Contact",
        },
    ];

    return (
        <List style={{ display: "flex", flexDirection: "row" }}>
            {links.map((link) => (
                <ListItem key={link.to} button component={Link} to={link.to}>
                    <ListItemText primary={link.label} />
                </ListItem>
            ))}
        </List>
    );
};

export default SiteMap;
