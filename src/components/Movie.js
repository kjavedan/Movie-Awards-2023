import React, {useState} from 'react'
import StyledMovie from '../styles/Movie.styled'

const Movie = ({id, title, img, isHeld, selectMovie}) => {

  return (
      <StyledMovie img={img} highlight={isHeld ? true : false}>
          <h3>{title}</h3>
          <button onClick={()=>selectMovie(id)}>select</button>
      </StyledMovie>
  )
}

export default Movie