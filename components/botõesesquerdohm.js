import React from 'react';
import { FaMoneyBill, FaClock, FaUser, FaChartLine } from 'react-icons/fa'; // Importe os ícones que deseja usar

const ButtonGroup = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Alinhamento à esquerda
        marginTop: '20px', // Espaçamento superior
        marginLeft: '200px', // Margem à esquerda para centralizar
        marginRight: '50px', // Margem à direita para mover os botões para a direita
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start', // Alinhamento dos botões à esquerda
        }}
      >
        <button
          style={{
            width: '150px', // Largura igual para criar um botão quadrado
            height: '165px', // Altura igual para criar um botão quadrado
            fontSize: '18px',
            margin: '10px',
            borderRadius: '10px', // Bordas mais arredondadas
            border: '1px solid #000', // Borda preta
            backgroundColor: '#ccc', // Fundo cinza
            textTransform: 'uppercase', // Transforma o texto em maiúsculas
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Alinhamento dos itens no centro
            justifyContent: 'center', // Alinhamento vertical no centro
          }}
        >
          <FaMoneyBill size={40} style={{ marginBottom: '10px' }} /> {/* Ícone */}
          Acompanhe Seus Gastos
        </button>
        <button
          style={{
            width: '150px', // Largura igual para criar um botão quadrado
            height: '165px', // Altura igual para criar um botão quadrado
            fontSize: '18px',
            margin: '10px',
            borderRadius: '10px', // Bordas mais arredondadas
            border: '1px solid #000', // Borda preta
            backgroundColor: '#ccc', // Fundo cinza
            textTransform: 'uppercase', // Transforma o texto em maiúsculas
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Alinhamento dos itens no centro
            justifyContent: 'center', // Alinhamento vertical no centro
          }}
        >
          <FaClock size={40} style={{ marginBottom: '10px' }} /> {/* Ícone */}
          Otimize Seu Tempo
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start', // Alinhamento dos botões à esquerda
        }}
      >
        <button
          style={{
            width: '150px', // Largura igual para criar um botão quadrado
            height: '165px', // Altura igual para criar um botão quadrado
            fontSize: '18px',
            margin: '10px',
            borderRadius: '10px', // Bordas mais arredondadas
            border: '1px solid #000', // Borda preta
            backgroundColor: '#ccc', // Fundo cinza
            textTransform: 'uppercase', // Transforma o texto em maiúsculas
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Alinhamento dos itens no centro
            justifyContent: 'center', // Alinhamento vertical no centro
          }}
        >
          <FaUser size={40} style={{ marginBottom: '10px' }} /> {/* Ícone */}
          Experiência Personalizada
        </button>
        <button
          style={{
            width: '150px', // Largura igual para criar um botão quadrado
            height: '165px', // Altura igual para criar um botão quadrado
            fontSize: '18px',
            margin: '10px',
            borderRadius: '10px', // Bordas mais arredondadas
            border: '1px solid #000', // Borda preta
            backgroundColor: '#ccc', // Fundo cinza
            textTransform: 'uppercase', // Transforma o texto em maiúsculas
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Alinhamento dos itens no centro
            justifyContent: 'center', // Alinhamento vertical no centro
          }}
        >
          <FaChartLine size={40} style={{ marginBottom: '10px' }} /> {/* Ícone */}
          Tendência Financeira
        </button>
      </div>
    </div>
  );
};

export default ButtonGroup;