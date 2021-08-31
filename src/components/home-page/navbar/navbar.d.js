import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 20px 50px 0 50px;
`;

export const LogoBox = styled.div`
    font-size: 15px;
    font-weight: 900;
    font-family: cursive;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ListBox = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;

`;
export const MenuList = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const MenuItem = styled.li`
    font-size: 8px;
    font-weight: 700;
    padding-left: 20px;
`;

export const Link = styled.a`
    color: black;
    text-decoration: none;
`;