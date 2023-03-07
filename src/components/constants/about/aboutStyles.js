import styled from "styled-components";

export const Container = styled.div`
#about{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 200px 0;
}

#about div{
    width: 45%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

#about div h1{
    font-size: 50px;
    padding: 0 60px;
    margin: 0;
}

#about div p{
    font-size: 20px;
    padding: 0 60px;
}

#about div> img{
    width: 70%;
    align-self: flex-end;
    margin-right: 60px;
}
`