import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Movies from './Movies'
import StyledCategory from '../styles/Category.styled'

const Category = ({title, movies}) => {


  const [result, setResult] = useState([])

  return (
    <StyledCategory>
        <h2>{title}</h2>
        <Movies movies={movies} title={title}/>
    </StyledCategory>
  )
}

export default Category