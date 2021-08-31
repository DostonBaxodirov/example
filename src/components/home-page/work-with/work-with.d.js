import styled from "styled-components";
import back from '../../../assests/back1.jpg';
export const Wrapper = styled.div`
    width: 100%;
    height: 800px;
    background-image: url("${back}");
    background-size: cover;
`;
export const Back = styled.div`
    width: 100%;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,0.8);
`;
export const Box = styled.div`
    width: 70%;
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 40px;
    line-height: 60px;
    color: white;
`;
export const Description = styled.p`
    color: grey;
    font-size: 12px;
    font-weight: 400;
    margin-top: 30px;
    width: 80%;
    margin: 0 auto;
    color: white;
    line-height: 30px;
`;

export const Button = styled.button`
    background: blue;
    color: white;
    font-size: 8px;
    padding: 15px 50px;
    border: none;
    border-radius: 23px;
    margin-top: 60px;
`;