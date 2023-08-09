import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

// Define the columns for the cart table
const fields = [
    { field: 'id', headerName: 'Serial Number', width: 150 },
    { field: 'category', headerName: 'Product Category', width: 150 },
    { field: 'name', headerName: 'Product Name', width: 150 },
    { field: 'quantity', headerName: 'Quantity', type: 'number', width: 90 },
    { field: 'price', headerName: 'Price Per Unit', type: 'number', width: 120 },
    { field: 'totalPrice', headerName: 'Total Price', type: 'number', width: 120 },
];

// CartTable component
const CartTable = ({ cartProducts, handleDeleteFromCart }) => {
    // State to store the selected rows in the table
    const [selectedRows, setSelectedRows] = React.useState([]);

    // Event handler for row selection change
    const handleSelectionModelChange = (newSelectionModel) => {
        setSelectedRows(newSelectionModel);
    };

    // Event handler for delete button click
    const handleDeleteClick = () => {
        handleDeleteFromCart(selectedRows);
    };

    return (
        <Box sx={{ flexGrow: 1, width: '100%', backgroundColor: 'whitesmoke', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flexGrow: 1, overflowX: 'auto' }}>
                <div style={{ height: 400, minWidth: '100%' }}>
                    <DataGrid
                        rows={cartProducts}
                        columns={fields}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                        selectionModel={selectedRows}
                        onRowSelectionModelChange={handleSelectionModelChange}
                    />
                </div>
            </div>
            <Button onClick={handleDeleteClick}
                    sx={{
                        backgroundColor: 'secondary.main',
                        color: 'white',
                        '&:hover': { backgroundColor: 'secondary.dark', },
                        marginBottom: '16px',
                    }}
            >
                Delete selected items    from Cart
            </Button>
        </Box>
    );
};

export default CartTable;
