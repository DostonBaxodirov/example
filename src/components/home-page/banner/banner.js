import React from 'react';
import {
    Wrapper,
    TextBox,
    IconsBox,
    Icons,
    Icon,
    Img,
    TextCard,
    Title,
    Description,
    Button,
    ImgBox,
    ImgCard
} from './banner.d';
import img from '../../../assests/mi-business-designvv.jpg'
const Banner = () => {
    return (
        <Wrapper>
            <TextBox>
                <IconsBox>
                    <Icons>
                        <Icon><Img/></Icon>
                        <Icon><Img/></Icon>
                        <Icon><Img/></Icon>
                    </Icons>
                </IconsBox>
                <TextCard>
                    <Title>How do you design content for every language</Title>
                    <Description>lfadjkfaj dlfajdlfk ja fjadlfk jadlfj dfjadlfj adjflajf adf jadlfj af fdj  aldfkjaldfj aldfj adflkjaflkj aldfkjafk jadfkja fkajdfjk adfj </Description>
                    <Button>Work with us</Button>
                </TextCard>
            </TextBox>
            <ImgBox>
            <ImgCard>
                <Img src={img}/>
            </ImgCard>
            </ImgBox>
        </Wrapper>
    );
}

export default Banner;
