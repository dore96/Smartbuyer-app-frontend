import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from "@mui/material/Button";

const fields = [
    { field: 'id', headerName: 'Serial Number', width: 150 },
    { field: 'category', headerName: 'Product Category', width: 150 },
    { field: 'name', headerName: 'Product Name', width: 150 },
    { field: 'quantity', headerName: 'Quantity', type: 'number', width: 90 },
    { field: 'price', headerName: 'Price Per Unit', type: 'number', width: 120 },
    { field: 'totalPrice', headerName: 'Total Price', type: 'number', width: 120 },
];

const CartTable = ({ cartProducts, handleDeleteFromCart }) => {
    const [selectedRows, setSelectedRows] = React.useState([]);
    const handleSelectionModelChange = (newSelectionModel) => {
        setSelectedRows(newSelectionModel);
    };
    const handleDeleteClick = () => {
        handleDeleteFromCart(selectedRows);
    };

    return (
        <div style={{ height: 400, width: '100%' }}>
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
                onRowSelectionModelChange = {handleSelectionModelChange}
            />
            <Button onClick={handleDeleteClick}>
                Delete from Cart
            </Button>
        </div>
    );
};

export default CartTable;
