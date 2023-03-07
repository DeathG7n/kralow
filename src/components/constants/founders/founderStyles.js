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
}

#founders .note{
    font-size: 35px;
    margin-top: 40px;
    padding: 0 240px;
    text-align: center;
}

.card{
    display: flex;
    color: #fff;
    align-items: center;
    gap: 20px;
}

.card h2{
    font-size: 40px;
    width: 300px;
    margin: 10px;
}

.card p{
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 10px;
}

.card span{
    width: 20px;
    height: 1px;
    background-color: #fff;
}

.card1 div p{
    justify-content: flex-end;
}

.card1 div h2{
    text-align: right;
}

.card img{
    width: 400px;
}
`