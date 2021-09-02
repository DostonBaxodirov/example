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
    width: 50%;
    padding-left: 30px;
`;
export const Icons = styled.ul`
    list-style-type: none;
    margin-top: 60px;
    padding: 0;
`;
export const Icon = styled.li`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid black;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-child(2){
        background: black;
        svg{
            color: white;
        }
    }
`;

export const Img = styled.img`
    width: ${props => props.for_icon ? '60%' : '100%'};
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
    margin-top: 50px;
`;

export const Button = styled.button`
    background: black;
    color: white;
    font-size: 8px;
    padding: 15px 50px;
    border: none;
    border-radius: 23px;
    margin-top: 50px;
`;
export const ImgBox = styled.div`
    width: 40%;
    padding-top: 250px;
`;
export const ImgCard = styled.div`
    width: 80%;
    float: right;
    
`;