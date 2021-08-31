import React from 'react';
import {
    Wrapper,
    ListBox,
    MenuItem,
    Link,
    MenuList,
    Icon
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
                    <MenuItem><Icon index={1}></Icon></MenuItem>
                    <MenuItem><Icon index={2}></Icon></MenuItem>
                    <MenuItem><Icon index={3}></Icon></MenuItem>
                    <MenuItem><Icon index={4}></Icon></MenuItem>
                </MenuList>
            </ListBox>
        </Wrapper>
    );
}

export default FooterMenu;
