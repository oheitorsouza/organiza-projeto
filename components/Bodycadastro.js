import React, { useState } from 'react';
import { Container, Paper, TextField, Button, Typography } from '@mui/material';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = () => {
    // Validações (você pode adicionar mais validações aqui)
    if (!email || !password) {
      setErrorMessage('Preencha todos os campos.');
      return;
    }

    // Lógica de cadastro aqui (por exemplo, chamar uma API)

    // Limpar mensagem de erro
    setErrorMessage('');
  };

  return (
    <Container maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', background: '#64CCC5' }}>
        <Typography variant="h5" align="center" style={{ color: '#053B50' }}>
          Cadastro
        </Typography>
        {errorMessage && (
          <Typography variant="body2" align="center" style={{ color: 'red', margin: '10px 0' }}>
            {errorMessage}
          </Typography>
        )}
        <TextField
          fullWidth
          label="Email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ background: 'white' }}
        />
        <TextField
          fullWidth
          label="Senha"
          variant="outlined"
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ background: 'white' }}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSignup}
          style={{ background: '#053B50', color: 'white', marginTop: '10px' }}
        >
          Cadastrar
        </Button>
      </Paper>
    </Container>
  );
};

export default Signup;