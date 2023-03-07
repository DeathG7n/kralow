import styled from "styled-components";

export const Container = styled.div`
    #objectives{
        width: 100vw;
        margin: 80px 0;

        h1{
            text-align: center;
            font-size: 50px;
            margin: 100px 0;

            @media screen and (max-width: 900px){
                font-size: 40px;
                padding: 0 20px;
                text-align: center;
            }
        }
    }

.obj{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    @media screen and (max-width: 900px){
        flex-direction: column;
    }
}

.obj .box{
    display: flex;
    width: 500px;
    height: 160px;
    background-color: rgba(41,41,41,.54);
    border-radius: 10px;
    color: #fff;
    position: relative;

    @media screen and (max-width: 900px){
        width: 50%;
        height: auto;
        flex-direction: column;
    }
}

.text{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    padding: 0 30px;

    @media screen and (max-width: 900px){
        font-size: 16px;
        padding: 0 10px;
        margin-top: -50px;
    }
}
.box-img img{
    position: relative;
    transform: translateY(-40px);

    @media screen and (max-width: 900px){
        width: 150px;
        transform: translateY(-30px);
    }
}
`