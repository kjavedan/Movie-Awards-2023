import React, {useContext, useEffect, useState} from 'react'
import Movie from './Movie'
import StyledMovies from '../styles/Movies.styled'
import { Context } from '../context/Context'

const Movies = ({movies, title}) => {
  
  const [eachCategoryMovies, setEachCategoryMovies] = useState(movies)
  const {updateResult} = useContext(Context)
  
  const selectMovie = id => {
    setEachCategoryMovies(prevState => prevState.map(movie => movie.id === id ? {...movie, isHeld: !movie.isHeld} : {...movie, isHeld: false}))
  }
    const movieElements = eachCategoryMovies.map(movie => <Movie 
      key={movie.id} 
      id={movie.id} 
      title={movie.title} 
      img={movie.img} 
      isHeld={movie.isHeld} 
      selectMovie={selectMovie} 
      />)

      useEffect(()=> {
        updateResult(title, eachCategoryMovies)
      },[eachCategoryMovies])

  return (
   <StyledMovies>
    {movieElements} 
   </StyledMovies>
  )
}

export default Movies