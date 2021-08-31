import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 0 20px;
`;
export const ListBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

`;
export const MenuList = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0;
`;

export const MenuItem = styled.li`
    font-size: 8px;
    font-weight: 700;
    padding-left: 20px;
`;

export const Link = styled.a`
    color: black;
    text-decoration: none;
    cursor: pointer;
`;