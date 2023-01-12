import React from 'react'
import StyledRow from '../styles/ResultRow.styled'

const ResultRow = ({title, name, img}) => {

  return (
    <StyledRow>
        <h5>{title} :</h5>
        <p>{name ? name : 'not selected'}</p>
        {img && <img src={img} alt="movie image" />}
    </StyledRow>
  )
}

export default ResultRow