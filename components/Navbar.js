import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function ButtonAppBar() {
  const appBarStyle = {
    backgroundColor: '#fff', // Cor de fundo branca
  };

  const buttonStyle = {
    color: '#176B87', // Cor dos botões "Login" e "Criar sua conta"
  };

  const toolbarStyle = {
    minHeight: '70px', // Altura da Toolbar ajustada (altere conforme necessário)
  };

  const logoStyle = {
    width: '100px', 
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={appBarStyle}>
        <Toolbar style={toolbarStyle}>
          <img src="../logo organiza_resized.png" alt="Logo" style={logoStyle} />
          <Box sx={{ marginLeft: 'auto' }}>
            {/* Link para a página de login */}
            <Link href="/login">
              <Button color="inherit" style={buttonStyle}>
                Login
              </Button>
            </Link>
            
            {/* Link para a página de cadastro */}
            <Link href="/cadastro">
              <Button color="inherit" style={buttonStyle}>
                Criar sua conta
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}