import React from 'react';
import { Typography, Container, Grid, Button } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: '#fff',
      textAlign: 'center',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '10px 0',
    }}>
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={2}>
            <Button
              variant="text"
              style={{ color: 'white', textAlign: 'left' }}
              onClick={() => window.alert('Texto 1 clicado')}>
              Termos e Condições
            </Button>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              variant="text"
              style={{ color: 'white', textAlign: 'left' }}
              onClick={() => window.alert('Texto 2 clicado')}>
              Segurança
            </Button>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              variant="text"
              style={{ color: 'white', textAlign: 'left' }}
              onClick={() => window.alert('Texto 3 clicado')}>
              Privacidade
            </Button>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              variant="text"
              style={{ color: 'white', textAlign: 'left' }}
              onClick={() => window.alert('Texto 4 clicado')}>
              Ferramentas e Calculadoras
            </Button>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              variant="text"
              style={{ color: 'white', textAlign: 'left' }}
              onClick={() => window.alert('Texto 5 clicado')}>
              Acessibilidade
            </Button>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Button
              variant="text"
              style={{ color: 'white', textAlign: 'left' }}
              onClick={() => window.alert('Texto 6 clicado')}>
              Redes Sociais
            </Button>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;