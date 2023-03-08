import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;

    #feedback{
        width: 45%;

        @media screen and (max-width: 900px){
            width: 90%;
        }

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

                @media screen and (max-width: 900px){
                    font-size: 40px;
                    text-align: center;
                }
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
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: fit-content;
                    padding: 10px 30px;
                    border-radius: 20px;

                    @media screen and (max-width: 900px){
                        font-size: 13px;
                        padding: 10px 20px;
                    }
                }
            }

            .form{
                width: 90%;
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: 10px 0;

                @media screen and (max-width: 900px){
                    width: 98%;
                }

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
                    width: 100%;
                    margin: 5px 0 10px 0;

                    option{
                        color: #000;
                    }

                    @media screen and (max-width: 900px){
                        font-size: 14px;
                    }
                    

                    ::placeholder{
                        font-size: 19px;
                        color: #fff;
                        font-weight: 400;

                        @media screen and (max-width: 900px){
                            font-size: 14px;
                        }
                    }

                    :focus{
                        text-indent: 20px;
                        border: 1px solid #fff;
                        border-radius: 5px;
                    }
                }
                /* Chrome, Safari, Edge, Opera */
                    input::-webkit-outer-spin-button,
                    input::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                    }

                    /* Firefox */
                    input[type=number] {
                    -moz-appearance: textfield;
                    }

                .btns{

                    @media screen and (max-width: 900px){
                        gap: 5px;
                    }

                    div{
    
                        @media screen and (max-width: 900px){
                            font-size: 13px;
                            padding: 10px 0;
                            width: 140px;
                        }
                    }
                }
            }
            .file{
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 30px;


                input{
                    display: none;
                }
                label{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: fit-content;
                    padding: 10px 30px;
                    border-radius: 20px;
                    background-color: #fdeab9;
                    color: #000;

                    @media screen and (max-width: 900px){
                        font-size: 13px;
                        padding: 10px 20px;
                    }
                }
                p{
                    font-size: 12px;
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

                    @media screen and (max-width: 900px){
                        width: 15px;
                        height: 15px;
                    }
                }

                @media screen and (max-width: 900px){
                    font-size: 13px;
                }
            }
        }
        
    }
`

export const ErrorText = styled.span`
    color: red;
    font-size: 18px;
    align-self: flex-start;
    margin-bottom: 5px;
`