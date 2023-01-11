import React from 'react'
import StyledMovie from './styles/Movie.styled'

const Movie = ({id, title, img}) => {

  return (
    <StyledMovie img={img}>
        <h3>{title}</h3>
        <button>select</button>
    </StyledMovie>
  )
}

export default Movie