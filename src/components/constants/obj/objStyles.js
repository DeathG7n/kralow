import styled from "styled-components";

export const Container = styled.div`
    #objectives{
        width: 100vw;
        margin: 80px 0;

        h1{
            text-align: center;
            font-size: 50px;
            margin: 100px 0;
        }
    }

.obj{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
}

.obj .box{
    display: flex;
    width: 500px;
    height: 160px;
    background-color: rgba(41,41,41,.54);
    border-radius: 10px;
    color: #fff;
    position: relative;
}

.text{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    padding: 0 30px;
}
.box-img img{
    position: relative;
    transform: translateY(-40px);
}
`