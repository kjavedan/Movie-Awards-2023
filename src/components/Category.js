import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import Movies from './Movies'
import StyledCategory from '../styles/Category.styled'

const Category = ({title, movies}) => {

  return (
    <StyledCategory>
        <h2>{title}</h2>
        <Movies movies={movies} title={title}/>
    </StyledCategory>
  )
}

export default Category