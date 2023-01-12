import React, { useContext } from 'react'
import {StyledResult, CloseResult} from '../styles/Result.styled'
import {GrClose} from 'react-icons/gr'
import { Context } from '../context/Context'
import ResultRow from './ResultRow'

const Result = () => {

    const {result, setDisplayResult} = useContext(Context)

    console.log(result)

    const resultItems = result.map(item => <ResultRow title={item.title} name={item.movie.name} img={item.movie.img} />)
    console.log(resultItems)
  return (
    <>
    <CloseResult onClick={()=> setDisplayResult(false)}></CloseResult>
        <StyledResult>
            <h2>Ballot result</h2>
            <span onClick={()=> setDisplayResult(false)}><GrClose /></span>
            {resultItems}
        </StyledResult>
    </>
  )
}

export default Result