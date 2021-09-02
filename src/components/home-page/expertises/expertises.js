import React from 'react';
import {  Img } from '../banner/banner.d';
import {
    Wrapper,
    Title,
    Label,
    ExpertisesBox,
    Card,
    CardBox,
    ImgBox,
    Text,
    Description,
    TextBox,
    Button,
} from './expertises.d';
import img from '../../../assests/noutbook.jpg'
const Expertises = () => {
    return (
        <Wrapper>
            <Title>Our Expertises</Title>
            <Label>loerm inssup dolor collre danielaon faron sidf loerm inssup dolor collre danielaon faron sidf loerm inssup dolor collre danielaon faron sidf </Label>
            <ExpertisesBox>
                <CardBox>
                    <Card>
                        <ImgBox>
                            <Img src={img}/>
                        </ImgBox>
                        <TextBox>
                            <Text>Reserch</Text>
                            <Description>loerm inssup dolor collre danielaon faron sidf loerm inssup dolor collre danielaon faron sidf loerm inssup dolor collre danielaon faron sidf </Description>
                        </TextBox>
                        <Button index={1}>FIND OUT MORE</Button>
                    </Card>
                    <Card>
                        <ImgBox>
                            <Img src={img}/>
                        </ImgBox>
                        <TextBox>
                            <Text>Content</Text>
                            <Description>loerm inssup dolor collre danielaon faron sidf loerm inssup dolor collre danielaon faron sidf loerm inssup dolor collre danielaon faron sidf </Description>
                        </TextBox>
                        <Button index={2}>FIND OUT MORE</Button>
                    </Card>
                    <Card>
                        <ImgBox>
                            <Img src={img}/>
                        </ImgBox>
                        <TextBox>
                            <Text>Product design</Text>
                            <Description>loerm inssup dolor collre danielaon faron sidf loerm inssup dolor collre danielaon faron sidf loerm inssup dolor collre danielaon faron sidf </Description>
                        </TextBox>
                        <Button index={3}>FIND OUT MORE</Button>
                    </Card>
                </CardBox>
            </ExpertisesBox>
        </Wrapper>
    );
}

export default Expertises;
