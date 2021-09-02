import React from 'react';
import {
    FacebookOutlined,
    TwitterOutlined
} from '@ant-design/icons';
import pinterest from '../../../assests/pinterest.png';
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
                        <Icon><FacebookOutlined /></Icon>
                        <Icon><TwitterOutlined /></Icon>
                        <Icon><Img src={pinterest} for_icon={true}/></Icon>
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
