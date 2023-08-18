import React, { useState } from "react";
import {
    Modal,
    Paper,
    Button,
    Typography,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    useTheme,
    IconButton,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon, ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";

const CartCalculationResults = ({ calculatedData, onClose,city }) => {
    const [expanded, setExpanded] = useState(null);
    const theme = useTheme();

    if (!calculatedData) {
        return null;
    }
    const handleAccordionChange = (index) => {
        setExpanded(expanded === index ? null : index);
    };


    const cheapestStores = calculatedData.cheapest_stores;

    return (
        <Modal open={true} onClose={onClose}>
            <Paper
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    maxWidth: "80%",
                    maxHeight: "80%",
                    overflow: "auto",
                    backgroundColor: theme.palette.secondary.main,
                    color: theme.palette.secondary.contrastText,
                    padding: "1rem",
                }}
            >
                <Typography variant="h5" align="center" gutterBottom color="primary.contrastText">
                    מחירי העגלה שלך הזולות ביותר ב{city}
                </Typography>
                {cheapestStores.map((store, index) => (
                    <Accordion key={index} expanded={expanded === index} onChange={() => handleAccordionChange(index)}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ backgroundColor: theme.palette.secondary.dark }}>
                            <Typography
                                color="primary.contrastText"
                                sx={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}
                            >
                                <span style={{ display: "flex", alignItems: "center" }}>
                                    <IconButton size="small" aria-label="Add to cart" sx={{ marginRight: "0.5rem" }}>
                                        <ShoppingCartIcon />
                                    </IconButton>
                                    <span>
                                      ₪ מחיר: {store.total_amount}
                                    </span>
                                </span>
                                <span>
                                         {store.storename}
                                </span>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div style={{ textAlign: "center", margin: "1rem 0" }}>
                                <Typography>
                                     רשת: {store.chainname}
                                </Typography>
                                <Typography>
                                    תת רשת: {store.subchainname}
                                </Typography>
                                {store.zipcode && (
                                    <Typography>
                                        מיקוד: {store.zipcode}
                                    </Typography>
                                )}
                            </div>
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>שם המוצר</TableCell>
                                            <TableCell>כמות</TableCell>
                                            <TableCell>מחיר פריט</TableCell>
                                            <TableCell>מחיר</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {store.products.map((product, productIndex) => (
                                            <TableRow key={productIndex}>
                                                <TableCell>{product.product_name}</TableCell>
                                                <TableCell>{product.quantity}</TableCell>
                                                <TableCell>{(product.product_price).toFixed(2)}</TableCell>
                                                <TableCell>{(product.product_price * product.quantity).toFixed(2)}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            {store.missing_item_codes.length > 0 && (
                                <div>
                                    <Typography variant="h6" sx={{ textAlign: "right" ,marginTop: "2rem"}}>
                                        :מוצרים חסרים
                                    </Typography>
                                    <ul style={{ textAlign: "right", direction: "rtl" }}>
                                        {store.missing_item_codes.map((missingItem, missingIndex) => (
                                            <li key={missingIndex}>{missingItem}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                        </AccordionDetails>
                    </Accordion>
                ))}
                <Button
                    onClick={onClose}
                    sx={{
                        backgroundColor: theme.palette.secondary.dark,
                        color: theme.palette.secondary.contrastText,
                        marginTop: "1rem",
                    }}
                >
                    Close
                </Button>
            </Paper>
        </Modal>
    );
};

export default CartCalculationResults;
