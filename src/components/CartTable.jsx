import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const fields = [
    { field: 'id', headerName: 'Serial Number', width: 150 },
    { field: 'category', headerName: 'Product Category', width: 150 },
    { field: 'name', headerName: 'Product Name', width: 150 },
    { field: 'quantity', headerName: 'Quantity', type: 'number',width: 90 },
    { field: 'price', headerName: 'Total Price', type: 'number', width: 120},
];

const CartTable = ({cartProducts}) => {
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
            />
        </div>
    );
}
export default CartTable