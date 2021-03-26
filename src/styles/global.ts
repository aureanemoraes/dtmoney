import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  // Criando variáveis
  :root {
    --red: #E52E40;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #33CC95;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #f0f2f5;
    --shape: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // font-size: 16px (defaul desktop)
  // 1 rem = tamanho default da font do ambiente (desktop, mobile)
  html {
    @media (max-width: 1080px) {
      font-size: 93.75% // 14px
    }

    @media (max-width: 720px) {
      font-size: 87.5% // 14px
    }
  }

  body {
    background: var(--background);
    --webkit-font-smoothing: antialiased; // Fontes mais nítidas em browsers com a engine da google
  }

  // é necessário definir as fontes especificamente para as demais tags além do body
  // pois se colocar apenas no body não seria aplicado a essas tags também
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center; // vertical
    justify-content: center; // horizontal
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;