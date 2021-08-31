import React from 'react';
import {
    Wrapper,
    ListBox,
    MenuItem,
    Link,
    MenuList
} from './footer-menu.d';
const FooterMenu = () => {
    return (
        <Wrapper>
            <ListBox>
                <MenuList>
                    <MenuItem><Link href="youtube.com">HOME</Link></MenuItem>
                    <MenuItem><Link href="youtube.com">INTRO</Link></MenuItem>
                    <MenuItem><Link href="youtube.com">EXPERTISES</Link></MenuItem>
                    <MenuItem><Link href="youtube.com">WORK</Link></MenuItem>
                    <MenuItem><Link href="youtube.com">PLANS</Link></MenuItem>
                    <MenuItem><Link href="youtube.com">NEWS</Link></MenuItem>
                </MenuList>
                <MenuList>
                    <MenuItem><Link href="youtube.com">SIGN IN</Link></MenuItem>
                    <MenuItem><Link href="youtube.com">SIGN UP</Link></MenuItem>
                </MenuList>
            </ListBox>
        </Wrapper>
    );
}

export default FooterMenu;
