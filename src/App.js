import React, { useContext} from 'react'
import GlobalStyle from './styles/GlobalStyle'
import Container from './styles/Container.styled'
import Category from './components/Category'
import LoadingSkeleton from './components/LoadingSkeleton'
import SubmitBtn from './styles/SubmitBtn.styled'
import { Context } from './context/Context'
import Result from './components/Result'

const App = () => {
  
  const {categories, isLoading, submitResult, displayResult} = useContext(Context)
  
  const categoryElements = categories.map(category => <Category key={category.id} title={category.title} movies={category.movies}/>)
 
  return (
    <Container>
      <GlobalStyle />
      <h1>Select your favorite movies of 2023 :)</h1>
      {isLoading ? <LoadingSkeleton /> : categoryElements}
      <SubmitBtn onClick={submitResult}>submit ballot</SubmitBtn>
      {displayResult && <Result />}
    </Container>
  )
}

export default App