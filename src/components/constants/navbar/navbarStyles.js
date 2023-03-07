import styled from "styled-components";

export const Container = styled.div`
    
    width: 100vw;
    height: 100px;
    background: rgba(18,18,18,0.5);
    position: sticky;
    top: 0;
    z-index: 1;

    > .container{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 150px;
        position: relative;

        @media screen and (max-width: 900px){
            justify-content: flex-start;
        }
    }

    .logo{
        width: 200px;


        @media screen and (max-width: 900px){
            width: 150px;
        }

    }

    .container ul{
        display: flex;
        list-style-type: none;
        gap: 20px;

        @media screen and (max-width: 900px){
            
        }
    }

    .container li, a{
        text-decoration: none;
        color: #fff;
        font-weight: 600;
        font-size: 18px;

        @media screen and (max-width: 900px){
            color: #000;
            font-size: 14px;
        }
    }

    .btn{
        width: 150px;
        height: 50px;
        border-radius: 50px;
        border: 2px solid goldenrod;
        display: flex;
        align-items: center;
        justify-content: center;

        @media screen and (max-width: 900px){
            display: none;
        }
    }


    .hamburger{
        display: none;

        span{
            width: 30px;
            height: 5px;
            background-color: #fff;
        }

        @media screen and (max-width: 900px){
            display: block;
        }
    }
`