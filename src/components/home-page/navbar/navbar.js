import React from 'react';
import {
    Wrapper,
    LogoBox,
    MenuList,
    MenuItem,
    Link,
    ListBox
} from './navbar.d';
const Navbar = () => {
    return (
        <Wrapper>
            <LogoBox>MI BUSINESS</LogoBox>
            <ListBox>
                <MenuList>
                    <MenuItem><Link href="https://unsplash.com">HOME</Link></MenuItem>
                    <MenuItem><Link href="https://unsplash.com">INTRO</Link></MenuItem>
                    <MenuItem><Link href="https://unsplash.com">EXPERTISES</Link></MenuItem>
                    <MenuItem><Link href="https://unsplash.com">WORK</Link></MenuItem>
                    <MenuItem><Link href="https://unsplash.com">PLANS</Link></MenuItem>
                    <MenuItem><Link href="https://unsplash.com">NEWS</Link></MenuItem>
                </MenuList>
                <MenuList>
                    <MenuItem><Link href="https://unsplash.com">SIGN IN</Link></MenuItem>
                    <MenuItem><Link href="https://unsplash.com">SIGN UP</Link></MenuItem>
                </MenuList>
            </ListBox>
        </Wrapper>
    );
}

export default Navbar;
