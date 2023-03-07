import styled from "styled-components";

export const Container = styled.div`
#work{
    color: #fff;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .btn{
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
    }
}

#work h1{
    font-size: 50px;
    margin: 50px 0 0 0 ;

    @media screen and (max-width: 900px){
        font-size: 40px;
        text-align: center;
    }
}

#work h2{
    margin: 0;
    font-size: 19px;
    font-weight: 400;
    padding: 0 280px;
    text-align: center;


    @media screen and (max-width: 900px){
        font-size: 16px;
        padding: 0 20px;
    }
}

#work p{
    font-size: 20px;

    @media screen and (max-width: 900px){
        font-size: 18px;   
    }
}
.work{
    display: flex;
    justify-content: center;
    gap: 40px;
    margin: 40px 0;
    position: relative;

    @media screen and (max-width: 900px){
        gap: 10px;
        justify-content: flex-start;
        padding: 0 10px;
    }

    .sm-work{
        display: none;
        width: 90%;
        p:nth-child(odd){
            color: goldenrod;
            text-align: right;
        }

        @media screen and (max-width: 900px){
            display: block;
        }
    }
}

.work div:first-child{
    text-align: right;
    width: 30%;
    color: goldenrod;
    padding-left: 30px;
    
    @media screen and (max-width: 900px){
        display: none;
    }

}
.work .box{
    text-align: left;
    width: 50%;

    @media screen and (max-width: 900px){
        display: none;
    }
}

.work span{
    width: 3px;
    border-radius: 1px;
    border: 1px solid #fff;
    height: 370px;

    @media screen and (max-width: 900px){
        height: 700px;
    }
}

`