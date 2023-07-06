import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const SearchBar = ({ onSearch, products }) => {
    const options = products.map((product) => ({
        id: product.id,
        label: product.name
    }));

    return (
        <Autocomplete
            freeSolo
            options={options}
            getOptionLabel={(option) => option.label}
            filterOptions={(options, state) =>
                options.filter((option) =>
                    option.label.toLowerCase().includes(state.inputValue.toLowerCase())
                )
            }
            onInputChange={(event, value) => onSearch(value)}
            renderInput={(params) => (
                <TextField {...params} label="חיפוש מוצר" variant="outlined"/>
            )}
        />
    );
};

export default SearchBar;
