import React from "react";
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
} from "@mui/material";

const CartCalculationResults = ({ calculatedData, onClose }) => {

    if (!calculatedData) {
        return null;
    }

    const cheapestStores = calculatedData.cheapest_stores;

    return (
        <Modal open={true} onClose={onClose}>
            <Paper
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    maxWidth: "80%",
                    maxHeight: "80%",
                    overflow: "auto",
                }}
            >
                <Typography variant="h5" align="center" gutterBottom>
                    Cheapest Stores
                </Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Store Name</TableCell>
                                <TableCell>Subchain Name</TableCell>
                                <TableCell>City</TableCell>
                                <TableCell>Total Amount</TableCell>
                                <TableCell>Zipcode</TableCell>
                                <TableCell>Products</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cheapestStores.map((store, index) => (
                                <TableRow key={index}>
                                    <TableCell>{store.storename}</TableCell>
                                    <TableCell>{store.subchainname}</TableCell>
                                    <TableCell>{store.city}</TableCell>
                                    <TableCell>{store.total_amount}</TableCell>
                                    <TableCell>{store.zipcode}</TableCell>
                                    <TableCell>
                                        {store.products.map((product, productIndex) => (
                                            <div key={productIndex}>
                                                <div>{product.product_name}</div>
                                                <div>Quantity: {product.quantity}</div>
                                                <div>Price: {product.product_price}</div>
                                            </div>
                                        ))}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button onClick={onClose}>Close</Button>
            </Paper>
        </Modal>
    );
};

export default CartCalculationResults;
