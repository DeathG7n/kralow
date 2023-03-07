import styled from "styled-components";

export const Container = styled.div`
#founders{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    margin: 70px 0;
    color: #fff;
}

#founders h1{
    font-size: 50px;
    color: #fff;
    margin-bottom: 20px;

    @media screen and (max-width: 900px){
        font-size: 40px;
        text-align: center;
    }
}

#founders .note{ 
    font-size: 35px;
    margin-top: 40px;
    padding: 0 240px;
    text-align: center;

    @media screen and (max-width: 900px){
        font-size: 20px;
        margin: 0;
        padding: 0;
    }
}

.card{
    display: flex;
    color: #fff;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 900px){
        flex-direction: column;
    }
}

.card h2{
    font-size: 40px;
    width: 300px;
    margin: 10px;

    @media screen and (max-width: 900px){
        font-size: 30px;
    }
}

.card p{
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 10px;

    @media screen and (max-width: 900px){
        font-size: 16px;
        align-self: center;
        margin: 0;
    }
}

.card span{
    width: 20px;
    height: 1px;
    background-color: #fff;

    @media screen and (max-width: 900px){
        display: none;
    }
}

.card1{
    @media screen and (max-width: 900px){
        flex-direction: column-reverse;
    }
}

.card1 div p{
    justify-content: flex-end;
}

.card1 div h2{
    text-align: right;
}

.card img{
    width: 400px;

    @media screen and (max-width: 900px){
        width: 300px;
    }
}
`