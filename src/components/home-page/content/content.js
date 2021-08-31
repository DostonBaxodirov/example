import React from 'react';
import { Img,Button } from '../banner/banner.d';
import {
    Wrapper,
    TextBox,
    Title,
    Description,
    ImgBox,
} from './content.d';
import img from '../../../assests/imgcontent.jpg'
const Content = () => {
    return (
        <Wrapper>
            <TextBox>
                <Title>Delighting customers in over 200 cities in the world.</Title>
                <Description>Delighting customers in over 200 cities in the world.Delighting customers in over 200 cities in the world.Delighting customers in over 200 cities in the world.</Description>
                <Button>FIND OUT MORE</Button>
            </TextBox>
            <ImgBox>
                <Img src="https://picsum.photos/420/400"/>
            </ImgBox>
        </Wrapper>
    );
}

export default Content;
