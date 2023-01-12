import React, { useEffect, useState } from 'react'
import GlobalStyle from './styles/GlobalStyle'
import Container from './styles/Container.styled'
import Category from './components/Category'
import LoadingSkeleton from './components/LoadingSkeleton'

const App = () => {
  
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const categoryElements = categories.map(category => <Category key={category.id} title={category.title} movies={category.movies}/>)
 
  useEffect(()=> {
    fetch('https://api.jsonbin.io/v3/b/63bf2d65dfc68e59d57fef4a')
    .then(res => res.json())
    .then(res => {
      setCategories(res.record.data)
      setIsLoading(false)
    })
    }, [])

  return (
    <Container>
      <GlobalStyle />
      <h1>Select your favorite movies of 2023 :)</h1>
      {isLoading ? <LoadingSkeleton /> : categoryElements}
    </Container>
  )
}

export default App