import React from 'react'
import Movies from './Movies'
import StyledCategory from './styles/Category.styled'

const Category = ({title, movies}) => {
  return (
    <StyledCategory>
        <h2>{title}</h2>
        <Movies movies={movies} />
    </StyledCategory>
  )
}

export default Category