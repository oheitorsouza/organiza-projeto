import React from 'react';

const ImagesComponent = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: '20px',
        marginLeft: '380px',
        marginTop: '-360px',
      }}
    >
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <div style={{ marginRight: '20px', textAlign: 'center', backgroundColor: '#64CCC5', borderRadius: '20px', padding: '10px' }}>
          <a
            href="https://medium.com/@nataliamourv/estat%C3%ADstica-para-investidores-parte-1-9c922f3302f6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img1.png"
              alt="Imagem 1"
              style={{
                width: '180px', // Reduzindo a largura
                height: '120px', // Reduzindo a altura
                cursor: 'pointer',
                /* Você pode adicionar estilos adicionais para esta imagem aqui */
              }}
            />
          </a>
          <p>Estatísticas de Investimento</p>
        </div>
        <div style={{ marginRight: '20px', textAlign: 'center', backgroundColor: '#64CCC5', borderRadius: '20px', padding: '10px' }}>
          <a
            href="https://www.coopersystem.com.br/5-tendencias-tecnologicas-para-o-mercado-financeiro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img2.png"
              alt="Imagem 2"
              style={{
                width: '180px', // Reduzindo a largura
                height: '120px', // Reduzindo a altura
                cursor: 'pointer',
                /* Você pode adicionar estilos adicionais para esta imagem aqui */
              }}
            />
          </a>
          <p>Tendências Tecnológicas</p>
        </div>
      </div>

      <div style={{ display: 'flex' }}>
        <div style={{ marginRight: '20px', textAlign: 'center', backgroundColor: '#64CCC5', borderRadius: '20px', padding: '10px' }}>
          <a
            href="https://www.ibge.gov.br/explica/inflacao.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img3.png"
              alt="Imagem 3"
              style={{
                width: '180px', // Reduzindo a largura
                height: '120px', // Reduzindo a altura
                cursor: 'pointer',
                /* Você pode adicionar estilos adicionais para esta imagem aqui */
              }}
            />
          </a>
          <p>Inflação</p>
        </div>
        <div style={{ marginRight: '20px', textAlign: 'center', backgroundColor: '#64CCC5', borderRadius: '20px', padding: '10px' }}>
          <a
            href="https://portaldobitcoin.uol.com.br/cotacao-bitcoin/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img4.png"
              alt="Imagem 4"
              style={{
                width: '180px', // Reduzindo a largura
                height: '120px', // Reduzindo a altura
                cursor: 'pointer',
                /* Você pode adicionar estilos adicionais para esta imagem aqui */
              }}
            />
          </a>
          <p>Bitcoin</p>
        </div>
      </div>
    </div>
  );
};

export default ImagesComponent;