'use client'; // Indica que este componente é do lado do cliente

import React, { useState } from 'react';

export default function MeuComponente() {
  const [showContent, setShowContent] = useState(false);

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      minHeight: '100vh',
      background: 'linear-gradient(to right, #2f80ed, #000000)', // Gradiente azul escuro para preto
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
      boxSizing: 'border-box',
      overflowY: 'auto',
      paddingBottom: '20px',
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    highlight: {
      color: '#ff6347', // Destaque em cor diferente, agora removido!
    },
    button: {
      marginTop: '20px',
      padding: '10px 20px',
      fontSize: '1rem',
      backgroundColor: '#1a73e8', // Cor azul para o botão "Saiba Mais"
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#155a8a', // Cor do botão quando passar o mouse
    },
    content: {
      fontSize: '1.2rem',
      marginTop: '20px',
      lineHeight: '1.5',
    },
    contentHidden: {
      display: 'none',
    },
    balloon: {
      backgroundColor: '#1a73e8',
      color: '#fff',
      borderRadius: '15px',
      padding: '15px',
      margin: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
    buyButton: {
      marginTop: '30px',
      padding: '12px 25px',
      fontSize: '1.2rem',
      backgroundColor: '#004b87', // Azul escuro para o botão de "Comprar Agora"
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buyButtonHover: {
      backgroundColor: '#00335e', // Cor mais escura ao passar o mouse no "Comprar Agora"
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Você Está Prestes a Descobrir Como a <span style={{color: '#fff'}}>Inteligência Artificial</span> Pode Transformar Seu Mundo! 🚀
      </h1>

      {/* Mostrar ou esconder o conteúdo ao clicar no botão */}
      <button
        style={styles.button}
        onClick={() => setShowContent(!showContent)}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#1a73e8')}
      >
        Saiba Mais
      </button>

      {/* Conteúdo extra que aparece ao clicar */}
      <div style={showContent ? styles.content : styles.contentHidden}>
        <div style={styles.balloon}>
          🧠 Você quer saber como a IA pode ajudar a acelerar seus estudos?
        </div>
        <div style={styles.balloon}>
          💼 E como a IA pode transformar seu trabalho?
        </div>
        <div style={styles.balloon}>
          💸 Você sabia que a IA pode abrir novas fontes de renda?
        </div>
      </div>

      {/* Botão de "Comprar Agora" */}
      <button
        style={styles.buyButton}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buyButtonHover.backgroundColor)}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#004b87')}
        onClick={() => window.location.href = 'https://pay.kiwify.com.br/36vnFrK'} // Redireciona para o link de compra
      >
        Como Usar IA para Trabalhar, Estudar ou até Ganhar Dinheiro
      </button>
    </div>
  );
}
