import styled from "styled-components";

export const Container = styled.div`
#about{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 200px 0;

    @media screen and (max-width: 900px){
        flex-direction: column;
        align-items: center;
    }
}

#about div{
    width: 45%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 900px){
        width: 100%;
    }
}

#about div h1{
    font-size: 50px;
    padding: 0 60px;
    margin: 0;

    @media screen and (max-width: 900px){
        font-size: 40px;
        padding: 0 20px;
        text-align: center;
    }
}

#about div p{
    font-size: 20px;
    padding: 0 60px;
    
    @media screen and (max-width: 900px){
        font-size: 16px;
        padding: 0 20px;
        text-align: center;
    }
}

#about div> img{
    width: 70%;
    align-self: flex-end;
    margin-right: 60px;
}
`