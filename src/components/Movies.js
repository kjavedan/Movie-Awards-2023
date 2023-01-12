import React, {useState} from 'react'
import Movie from './Movie'
import StyledMovies from '../styles/Movies.styled'

const Movies = ({movies, title}) => {
  
  const [eachCategoryMovies, setEachCategoryMovies] = useState(movies)

  const selectMovie = (e, id) => {
    console.log(id)
    console.log(title)
    console.log(eachCategoryMovies)

    setEachCategoryMovies(prevState => prevState.map(movie => movie.id === id ? {...movie, isHeld: !movie.isHeld} : {...movie, isHeld: false} ))
  }


    const movieElements = eachCategoryMovies.map(movie => <Movie 
      key={movie.id} 
      id={movie.id} 
      title={movie.title} 
      img={movie.img} 
      isHeld={movie.isHeld} 
      selectMovie={selectMovie} 
      />)




  return (
   <StyledMovies>
    {movieElements} 
   </StyledMovies>
  )
}

export default Movies