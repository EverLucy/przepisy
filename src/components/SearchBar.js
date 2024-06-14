import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  background-color: #C2BAE0;
  margin: 20px 0;
  border-radius: 5px;
`;

function SearchBar(props) {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        props.onSearch(query);
    };

    return (
        <Box display="flex" justifyContent="center">
            <StyledTextField
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Wyszukaj przepis"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleSearch}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
                fullWidth
                variant="outlined"
            />
        </Box>
    );
}

export default SearchBar;
