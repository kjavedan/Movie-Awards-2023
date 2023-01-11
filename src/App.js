import React from 'react'
import GlobalStyle from './assets/GlobalStyle'
import Container from './components/styles/Container'
import Category from './components/Category'

const App = () => {
  return (
    <Container>
      <h1>Select your favorite movies of 2023 :)</h1>
      <GlobalStyle />
      <Category />
      <Category />
    </Container>
  )
}

export default App