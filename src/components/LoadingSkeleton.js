import Skeleton from 'react-loading-skeleton'
import React from 'react'
import Movie from './Movie'
import StyledCategory from './styles/Category.styled'
import StyledMovies from './styles/Movies.styled'

const LoadingSkeleton = () => {
  return (
    <StyledCategory>
      <h2><Skeleton width={150} /></h2>
      <StyledMovies>
        <Skeleton width={'100%'} height={350}> <Movie /></Skeleton>
        <Skeleton width={'100%'} height={350}> <Movie /></Skeleton>
        <Skeleton width={'100%'} height={350}> <Movie /></Skeleton>
      </StyledMovies>
    </StyledCategory>
  )
}

export default LoadingSkeleton