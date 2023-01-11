import React from 'react'
import Movies from './Movies'
import StyledCategory from './styles/Category.styled'

const Category = () => {
  return (
    <StyledCategory>
        <h2>Comedy</h2>
        <Movies />
    </StyledCategory>
  )
}

export default Category