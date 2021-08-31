import styled from "styled-components";


export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    margin-top: 100px;
`;

export const TextBox = styled.div`
    width: 60%;
    display: flex;
    align-items: flex-start;
`;

export const IconsBox = styled.div`
    width: 40%;
    padding-left: 50px;
`;
export const Icons = styled.ul`
    list-style-type: none;
    margin-top: 60px;
    padding: 0;
`;
export const Icon = styled.li`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 1px solid black;
    margin-top: 20px;
    &:nth-child(2){
        background: black;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: max-content;
`;

export const TextCard = styled.div`

`;

export const Title = styled.h1`
    font-size: 50px;
    line-height: 60px;
`;
export const Description = styled.p`
    color: grey;
    font-size: 12px;
    font-weight: 400;
    margin-top: 30px;
`;

export const Button = styled.button`
    background: black;
    color: white;
    font-size: 8px;
    padding: 15px 50px;
    border: none;
    border-radius: 23px;
    margin-top: 60px;
`;
export const ImgBox = styled.div`
    width: 40%;
    padding-top: 250px;
`;
export const ImgCard = styled.div`
    width: 80%;
    float: right;
    
`;