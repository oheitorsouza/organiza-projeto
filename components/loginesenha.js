import React, { useState, useEffect } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorBalloon, setShowErrorBalloon] = useState(false);

  const handleLogin = () => {
    // Validação do tamanho máximo do nome de usuário
    if (username.length > 10) {
      setErrorMessage('Nome de usuário não pode ter mais de 10 caracteres');
      setShowErrorBalloon(true);

      // Configurar um temporizador para ocultar o balão de erro após 3 segundos
      setTimeout(() => {
        setShowErrorBalloon(false);
        setErrorMessage('');
      }, 3000);

      return;
    }

    // Validação da senha para conter pelo menos 1 número
    if (!/\d/.test(password)) {
      setErrorMessage('A senha deve conter pelo menos 1 número');
      setShowErrorBalloon(true);

      // Configurar um temporizador para ocultar o balão de erro após 3 segundos
      setTimeout(() => {
        setShowErrorBalloon(false);
        setErrorMessage('');
      }, 3000);

      return;
    }

    // Validação do tamanho máximo da senha (10 caracteres)
    if (password.length > 10) {
      setErrorMessage('A senha não pode ter mais de 10 caracteres');
      setShowErrorBalloon(true);

      // Configurar um temporizador para ocultar o balão de erro após 3 segundos
      setTimeout(() => {
        setShowErrorBalloon(false);
        setErrorMessage('');
      }, 3000);

      return;
    }

    // Se todas as validações passarem, você pode continuar com o login
    // Coloque seu código de autenticação aqui

    // Limpar mensagem de erro
    setErrorMessage('');
  };

  useEffect(() => {
    // Configurar um temporizador para ocultar o balão de erro após 3 segundos
    const timer = setTimeout(() => {
      setShowErrorBalloon(false);
      setErrorMessage('');
    }, 3000);

    // Limpar o temporizador ao desmontar o componente
    return () => clearTimeout(timer);
  }, [showErrorBalloon]);

  return (
    <div style={{ marginTop: '50px' }}>
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '20px',
          width: '300px',
          margin: '0 auto',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        {showErrorBalloon && (
          <div
            style={{
              color: 'red',
              textAlign: 'center',
              marginBottom: '10px',
              fontSize: '14px', // Tamanho da fonte da mensagem de erro
            }}
          >
            {errorMessage}
          </div>
        )}
        <div>
          <label htmlFor="username">Usuário:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
            maxLength={10} // Definir o comprimento máximo
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '10px',
              border: '1px solid #ccc',
              borderRadius: '5px',
            }}
            maxLength={10} // Definir o comprimento máximo
          />
        </div>
        <div>
          <button
            onClick={handleLogin}
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#176B87',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Entrar
          </button>
        </div>
        <div>
          <a href="#" style={{ textAlign: 'center', textDecoration: 'none', color: '#176B87' }}>
            Esqueci minha senha
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;