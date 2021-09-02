import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    text-align: center;

`;

export const Title = styled.h1`
    font-size: 25px;
`;
export const Label = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin-top: 30px;
    width: 50%;
    margin: auto;
`;

export const ExpertisesBox = styled.div`
    width: 75%;
    margin: 100px auto;
`;

export const CardBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Card = styled.div`
    width: 33.3333%;
    text-align: center;

`;

export const ImgBox = styled.div`
    width: 60%;
    margin: 0 auto;
`;

export const Text = styled.h3`
    font-size: 20px;
`;

export const Description = styled.p`
    font-size: 13px;
    font-weight: 400;
`;
export const TextBox = styled.div`
    width: 60%;
    margin: 0 auto;

`;
export const Button = styled.button`
    background: ${props=>props.index % 2 === 0 ? 'black' : 'white'};
    color: ${props=>props.index % 2 === 0 ? 'white' : 'black'};
    font-size: 8px;
    padding: 15px 50px;
    border: ${props=>props.index % 2 === 0 ? 'none' : '2px solid black'};
    border-radius: 23px;
    margin-top: 50px;
    cursor: pointer;
`;