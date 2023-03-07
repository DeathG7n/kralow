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
            justify-content: space-around;
            gap: 0;
        }
    }

    .logo{
        width: 200px;


        @media screen and (max-width: 900px){
            width: 150px;
        }

    }

    .nav{
        display: flex;
        list-style-type: none;
        gap: 20px;

        @media screen and (max-width: 900px){
            display: none;
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

        @media screen and (max-width: 900px){
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5px;
            width: 40px;
            height: 30px;
            cursor: pointer;

            span{
                width: 20px;
                height: 1px;
                border-radius: 5px;
                background-color: #fff;
                border: 1px solid #fff;
            }
        }
    }
    .sm-nav{
        display: none;
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        z-index: 100;
        background-color: #000;

        @media screen and (max-width: 900px){
            // display: flex;
            flex-direction: column;
            align-items: center;
            gap: 60px;
            

            div{
                ul{
                    width: 70vw;
                    list-style-type: none;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 50vh;
                    gap: 30px;
                    padding: 0;

                    li,a{
                        color: #fff;
                        font-size: 20px;
                    }
                }
            }

            .btn{
                width: 150px;
                height: 50px;
                border-radius: 50px;
                border: 2px solid goldenrod;
                display: flex;
                align-self: center;
                align-items: center;
                justify-content: center;

                li,a{
                    color: #fff;
                }
            }

            .close{
                    width: 50px;
                    height: 50px;
                    cursor: pointer;
                    border: 1px solid;
                    position: absolute;
                    right: 30px;
                    top: 30px;
        
                    div{
                        width: 20px;
                        height: 1px;
                        border-radius: 5px;
                        background-color: #fff;
                        border: 1px solid #fff;

                        // :first-child{
                        //     translate
                        // }
                    }
            }
        }
    }
`