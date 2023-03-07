import styled from "styled-components";

export const Container = styled.div`
#whom{
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 900px){
        flex-direction: column;
    }
}

#whom div{
    width: 45%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;

    @media screen and (max-width: 900px){
        width: 90%;
    }
}

#whom div h1{
    font-size: 50px;
    @media screen and (max-width: 900px){
        text-align: center;
    }
}

#whom div p{
    font-size: 20px;
    padding-right: 80px;

    @media screen and (max-width: 900px){
        padding: 20px;
        text-align: center;
    }
}

#whom div> img{
    width: 70%;
    align-self: flex-end;
    margin-right: 60px;
}

#whom .btn{
    width: 150px;
    height: 60px;
    border-radius: 50px;
    background-color: goldenrod;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;

    a{
        text-decoration: none;
        color: #000;
    }

    @media screen and (max-width: 900px){
        align-self: center;
    }
}
`