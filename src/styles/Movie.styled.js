import styled from "styled-components";

const StyledMovie = styled.div`
height: 350px;
min-width: 350px;
border: ${({highlight}) => highlight && '5px solid red'};
border-radius: 22px;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: column;
transition: all .2s ease-in-out;
text-align: center;
padding: .5rem;

/* movie background */
background-image: url(${({img}) => img});
background-position: center;
background-size: cover;

&:hover{
    transform: scale(103%);
}  

/* movie title */
h3{
    opacity: .8;
    background-color: white;
    padding: .5rem 1.5rem;
    border-radius: 15px;
    
}
/* movie button */
button{
    padding: 1rem 3rem;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    background-color: white;
    color: rgb(67, 66, 66);
    font-size: 1rem;
    
    &:hover{
        background-color: lightgray;
    }
}

`
export default StyledMovie