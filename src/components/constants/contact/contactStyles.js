import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    #feedback{
        width: 45%;

        form{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            padding: 40px;
            background: rgba(41,41,41,.54);
            h1{
                font-size: 50px;
                margin-bottom: 0px;
            }
            p{
                font-size: 24px;
            }
            .btns{
                display: flex;
                gap: 20px;
                justify-content: center;
                align-items: center;
                border-radius: 20px;
                width: fit-content;
                margin: 30px 30px 0 30px;
                background-color: #000;

                div{
                    width: fit-content;
                    padding: 10px 30px;
                    border-radius: 20px;
                }
            }

            .form{
                width: 90%;
                display: flex;
                flex-direction: column;
                gap: 30px;

                input, select{
                    height: 50px;
                    font-size: 19px;
                    background-color: transparent;
                    border:none;
                    border-bottom: 1px solid #fff;
                    outline: none;
                    transition: all .2s linear;
                    color: #fff;
                    font-weight: 400;
                    

                    ::placeholder{
                        font-size: 19px;
                        color: #fff;
                        font-weight: 400;
                    }

                    :focus{
                        text-indent: 20px;
                        border: 1px solid #fff;
                        border-radius: 5px;
                    }
                }
            }
            .btn{
                width: 150px;
                height: 60px;
                border-radius: 50px;
                background-color: goldenrod;
                color: #000;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-top: 30px;
            
                a{
                    text-decoration: none;
                    color: #000;
                }
            }
            .check{
                display: flex;
                align-self: flex-start;
                align-items: center;
                margin-top: 20px;
                gap: 10px;
                input{
                    width: 25px;
                    height:25px;
                    border-radius: 100%;
                    accent-color: goldenrod;
                }
            }
        }
        
    }
`