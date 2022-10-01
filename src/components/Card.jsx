import React from "react";
import styled from 'styled-components';
import avt from '../images/OnlineT.jpg';
import '../styles/Card.scss';
import thumb from '../images/thumb.jpeg';

import {
    Link
} from 'react-router-dom';

const Container = styled.div`
    width: 25%;
`;
class Card extends React.Component {


    render() {

        let { arr } = this.props;

        return (
            <Container>
                <Link to='/video/youtube' style={{ textDecoration: 'none' }}>
                    <div className="card">
                        <div className="card-thumb">
                            <img src={thumb} alt="" />
                        </div>
                        <div className="card-info">
                            <img className="card-avt" src={avt} alt="" />
                            <div className="title">
                                {arr.map((item, index) => {
                                    return (
                                        <>
                                            <p>{item.title}</p>
                                            <p className="channel">{item.channel}</p>
                                            <p className="view">{item.view}</p>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </Link>
            </Container>
        )
    }
}
export default Card;