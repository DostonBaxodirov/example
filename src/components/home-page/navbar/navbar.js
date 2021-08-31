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
                    <MenuItem><Link>HOME</Link></MenuItem>
                    <MenuItem><Link>INTRO</Link></MenuItem>
                    <MenuItem><Link>EXPERTISES</Link></MenuItem>
                    <MenuItem><Link>WORK</Link></MenuItem>
                    <MenuItem><Link>PLANS</Link></MenuItem>
                    <MenuItem><Link>NEWS</Link></MenuItem>
                </MenuList>
                <MenuList>
                    <MenuItem><Link>SIGN IN</Link></MenuItem>
                    <MenuItem><Link>SIGN UP</Link></MenuItem>
                </MenuList>
            </ListBox>
        </Wrapper>
    );
}

export default Navbar;
