import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  

  @media (min-width: 688px) {
  h1{
    font-size: 2.5em;
  }
  h2{
    font-size: 2em;
  }
  h3{
    font-size: 1.75em;
  }
  h4{
    font-size: 1.5em;
  }
  h5{
    font-size: 1.25em;
  }
  h6{
    font-size: 1em;
  }
  p{
    font-size: 1em;
  }
  }
  @media (min-width: 992px) {
  
  h4{
    font-size: 1.75em;
  }
  h5{
    font-size: 1.5em;
  }
  h6{
    font-size: 1.25em;
  }
  p{
    font-size: 1em;
  }
  }
}
`

export default GlobalStyle