import styled from "styled-components";

const StyledMovie = styled.div`
background-color: lightgray;
height: 250px;
min-width: 250px;
border-radius: 10px;
display: flex;
align-items: center;
justify-content: space-around;
flex-direction: column;
transition: all .2s ease-in-out;

&:hover{
    transform: scale(103%);
}  

button{
    padding: 1rem 5rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    &:hover{
        background-color: gray;
    }
}

`
export default StyledMovie