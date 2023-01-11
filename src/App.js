import React from 'react'
import GlobalStyle from './assets/GlobalStyle'
import Container from './components/styles/Container'
import Category from './components/Category'
import { cateoies } from './data'

const App = () => {

  const categoryElements = cateoies.map(category => <Category key={category.id} title={category.title} movies={category.movies} />)

  return (
    <Container>
      <GlobalStyle />
      <h1>Select your favorite movies of 2023 :)</h1>
      {categoryElements}
    </Container>
  )
}

export default App