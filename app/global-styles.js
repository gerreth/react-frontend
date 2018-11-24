import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *  {
    box-sizing: border-box;
  }

  html,
  body {
    font-size: 16px;
    font-weight: 700;
    height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently */
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-family: 'Raleway';
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-family: 'Raleway';
  }

  a, button {
    color: #333;
    font-weight: 700;
    text-decoration: none;
  }

  button:active {
outline: none;
border: none;
}

button:focus {outline:0;}

  #app {
    background-color: #fcfcfc;
    height: 100%;
    width: 100%;
  }

  p,
  label {
    ${'' /* font-family: Georgia, Times, 'Times New Roman', serif; */}
    line-height: 1.5em;
  }

  .band-enter {
    transform: translate(100%);
  }
  .band-enter.band-enter-active {
    transform: translate(0%);
    transition: transform 1000ms ease-in-out;
  }
  .band-leave {
    transform: translate(0%);
  }
  .band-leave.band-leave-active {
    transform: translate(-100%);
    transition: transform 1000ms ease-in-out;
  }
`;

export default GlobalStyle;
