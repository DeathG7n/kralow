import styled from "styled-components";

export const Container = styled.div`
    
    width: 100vw;
    height: 100px;
    background-color: rgba(0, 0 , 0 , 0.1);
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
    }

    .logo{
        width: 200px;

    }

    .container ul{
        display: flex;
        list-style-type: none;
        gap: 20px;
    }

    .container li, a{
        text-decoration: none;
        color: #fff;
        font-weight: 600;
        font-size: 18px;
    }

    .btn{
        width: 150px;
        height: 50px;
        border-radius: 50px;
        border: 2px solid goldenrod;
        display: flex;
        align-items: center;
        justify-content: center;
    }


    .hamburger{
        display: none;
    }
`