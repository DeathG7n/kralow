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
}

#work h2{
    margin: 0;
    font-size: 19px;
    font-weight: 400;
    padding: 0 280px;
    text-align: center;
}

#work p{
    font-size: 20px;
}
.work{
    display: flex;
    justify-content: center;
    gap: 40px;
    margin: 40px 0;
}

.work div:first-child{
    text-align: right;
    width: 30%;
    color: goldenrod;
    padding-left: 30px;
}
.work div:last-child{
    text-align: left;
    width: 50%;
}

.work span{
    width: 3px;
    border-radius: 1px;
    border: 1px solid #fff;
    height: 370px;
}

`