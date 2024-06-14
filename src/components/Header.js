import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import styled from 'styled-components';

const StyledAppBar = styled(AppBar)`
  background: linear-gradient(to right, #FFAEC9, #A349A4);
  height: 100px;
  display: flex;
  justify-content: center;
`;

const StyledTypography = styled(Typography)`
  font-family: Arial, sans-serif;
  font-size: 30px;
  color: #ffffff;
  text-align: center;
  width: 100%;
`;

function Header() {
    return (
        <StyledAppBar position="static">
            <Toolbar style={{ justifyContent: 'center' }}>
                <StyledTypography variant="h6">
                    WYSZUKIWARKA PRZEPISÓW
                </StyledTypography>
            </Toolbar>
        </StyledAppBar>
    );
}

export default Header;
