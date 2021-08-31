import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    min-height: 800px;
    background-image: url("https://picsum.photos/800/1800");

    background-repeat: no-repeat;
    background-size: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextBox = styled.div`
    width: 220px;
    text-align: left;
`;

export const Title = styled.h1`
    font-size: 25px;
    line-height: 40px;
    color: #FFFF;
`;
export const Description = styled.p`
    color: #FFFF;
    font-size: 14px;
    font-weight: 400;
    margin-top: 30px;
`;

export const ImgBox = styled.div`
    width: 420px;
    height: 400px;
    background-color: red;
    margin-left: 30px;
`;

