import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';

const buttons = [
  <Button
    key="one"
    style={{
      border: 'none',
      color: '#63a69f', // Cor do texto (azul claro)
      margin: '8px', // Espaçamento lateral entre os botões
    }}
  >
    A Empresa
  </Button>,
  <Button
    key="two"
    style={{
      border: 'none',
      color: '#63a69f', // Cor do texto (azul claro)
      margin: '8px', // Espaçamento lateral entre os botões
    }}
  >
    Produtos
  </Button>,
  <Button
    key="three"
    style={{
      border: 'none',
      color: '#63a69f', // Cor do texto (azul claro)
      margin: '8px', // Espaçamento lateral entre os botões
    }}
  >
    Planos e Preços
  </Button>,
  <Button
    key="four"
    style={{
      border: 'none',
      color: '#63a69f', // Cor do texto (azul claro)
      margin: '8px', // Espaçamento lateral entre os botões
    }}
  >
    Mercado Financeiro
  </Button>,
  <Button
    key="five"
    style={{
      border: 'none',
      color: '#63a69f', // Cor do texto (azul claro)
      margin: '8px', // Espaçamento lateral entre os botões
    }}
  >
    Suporte
  </Button>,
  <Button
    key="six"
    style={{
      border: 'none',
      color: '#63a69f', // Cor do texto (azul claro)
      margin: '8px', // Espaçamento lateral entre os botões
    }}
  >
    Blog
  </Button>,
];

export default function GroupSizesColors() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
        background: '#053B50', // Cor de fundo para a caixa (Box)
        padding: '0px', // Espaçamento interno (altura vertical mais fina)
      }}
    >
      <ButtonGroup size="large" aria-label="large button group">
        {buttons}
      </ButtonGroup>
    </Box>
  );
}