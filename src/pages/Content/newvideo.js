import React from "react";
import thumb from '../../images/thumb.jpeg'
import styled from "styled-components";


const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 10px;
    cursor: pointer;
`;

const Image = styled.img`
    width: 40%;
`;

const Content = styled.div`
    width: 60%;
    margin-left: 5px;
    overflow: hidden;
`;

const Title = styled.div`
    font-size: 15px;
    font-weight: 500;
`;

const Channel = styled.div`
    font-size: 13px;
    opacity: .7;
`;

const Views = styled.div`
    font-size: 13px;
    opacity: .7;
`;


class Newvideo extends React.Component {
    render() {
        return (
            <Container>
                <Image src={thumb} />
                <Content>
                    <Title>Top CSS & Javascript Effects</Title>
                    <Channel>Online Tutorial</Channel>
                    <Views>260.462 lượt xem</Views>
                </Content>
            </Container>
        )
    }
}

export default Newvideo;