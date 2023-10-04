import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material';
import { Palette } from '@mui/icons-material';

const Theme = createTheme({
  palette: {
    primary: {
      main: '#053B50',
    },
  },
});


export default function DenseAppBar() {
  return (
    <ThemeProvider theme={Theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ height: '80px' }}>
        <Toolbar variant="dense" sx={{ display: 'flex' }}>
          {/* Centralize a imagem usando display flex /}
          {/ Substitua a linha abaixo pela sua imagem de logotipo */}
          <img src="../logoarthur.png" alt="Logo" style={{ width: '200px', height: '40px', marginTop: '20px' }} />
        </Toolbar>
      </AppBar>
    </Box>
  </ThemeProvider>


);
}