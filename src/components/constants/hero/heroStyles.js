import styled from "styled-components";

export const Container = styled.div`
.hero{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

.hero h1{
    font-size: 50px;
    color: #fff;
}

.hero p{
    font-size: 20px;
    margin-bottom: 20px;
    color: #fff;
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

    :hover{
        background-color: transparent;
        color: #fff;
        border: 2px solid goldenrod;
    }

    a{
        color: #000;
        text-decoration: none;

        :hover{
            background-color: transparent;
            color: #fff;
        }
    }
}
#marquee{
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin: 80px 0;
    gap: 40px;

    .marquee{
        width: 80%;
        white-space: nowrap;
        overflow: hidden;

        section{
            color: #000;
            padding: 10px 0;
            animation: animate 10s linear infinite;
            padding-left: 10%;
            display: flex;
            gap: 20px;
            align-items: center;

            div{
                background: rgba(41,41,41,.54);
                border-radius: 10px;
                border: 1px solid;
                width: 300px;
                height: 60px;
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 20px;
                img{
                    width: 50px;
                }
                p{
                    color: #fff;
                }

                .name{
                    font-weight: 600;
                }
            }
        }
    }

    @keyframes animate{
        100%{
            transform : translate(-100%, 0)
        }
    }

    .arrowdown{
        margin: 20px 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
`