import React, {useState} from 'react'
import StyledMovie from '../styles/Movie.styled'

const Movie = ({id, title, img, isHeld, selectMovie}) => {

  
  const [heldMovieId, setHeldMovieId] = useState()

  

  return (
      <StyledMovie img={img} highlight={isHeld ? true : false}>
          <h3>{title}</h3>
          <button onClick={(e)=>selectMovie(e, id)}>select</button>
      </StyledMovie>
  )
}

export default Movie