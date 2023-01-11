import React from 'react'
import Movie from './Movie'
import StyledMovies from './styles/Movies.styled'

const Movies = ({movies}) => {

    const movieElements = movies.map(movie => <Movie key={movie.id} id={movie.id} title={movie.title} img={movie.img} />)

  return (
   <StyledMovies>
    {movieElements} 
   </StyledMovies>
  )
}

export default Movies