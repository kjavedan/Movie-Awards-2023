import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Movies from './Movies'
import StyledCategory from './styles/Category.styled'

const Category = ({title, movies, isLoading}) => {

  console.log(isLoading)
  console.log(title)

  return (
    <StyledCategory>
        <h2>{title || <Skeleton />}</h2>
        <Movies movies={movies} />
    </StyledCategory>
  )
}

export default Category