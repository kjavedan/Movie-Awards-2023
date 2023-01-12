import styled from "styled-components";

export const StyledResult = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
min-height: 400px;
width: 90%;
background-color: #f4f4f4;
border-radius: 20px;
padding: 1rem;

h2{
    display: inline;
}
span{
    position: absolute;     
    right: 20px ;
    cursor: pointer;
    font-size: 2rem;
}

@media (min-width: 1250px) {
    width: 1000px;
    padding: 1rem 2rem;
}

`

export const CloseResult = styled.div`
position: fixed;
top: 0;
left: 0;
height: 100%;
width: 100%;
background-color: black;
opacity: .8;
`
