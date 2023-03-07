import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px;
    p{
        margin: 5px;
    }

    @media screen and (max-width: 900px){
        font-size: 14px;
        text-align: center;
    }
`