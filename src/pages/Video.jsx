import React from 'react';
import '../styles/Video.scss';
import styled from 'styled-components';
import thumb from '../images/thumb.jpeg';
import avatar from '../images/OnlineT.jpg';
import user from '../images/phamanhhung.png';
import { listbutton } from './Content/Listbutton';
import Newvideo from './Content/newvideo';

const Container = styled.div`
    position: relative;
    top: 56px;
    width: 100%;
    height: auto;
`;

class Video extends React.Component {

    render() {
        return (
            <Container>
                <div className="body">
                    <div className="left-body">
                        <img src={thumb} alt="" />
                        <div className="icon-body">
                            <div className="title">5S Online Tập 218 Biến thỏ thành cáo</div>
                            <div className="list-button">
                                {listbutton.map((listbtn) => (
                                    <div className="menu-item">
                                        <span className='icon'>{listbtn.icon}</span>
                                        <span className='name'>{listbtn.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className="channel">
                            <div className="adm">
                                <img src={avatar} alt="" />
                                <span>Online Tutorial <br /> <p>180.000 người đăng ký</p></span>
                            </div>
                            <button>ĐĂNG KÝ</button>
                        </div>
                        <div className="line"></div>
                        <div className="comment">
                            <p className="display">0 bình luận</p>
                            <div className="comment-line">
                                <img src={user} alt="" />
                                <input type="text" placeholder='Viết bình luận.....' />
                            </div>
                        </div>

                    </div>

                    <div className="right-body">
                        <Newvideo />
                        <Newvideo />
                        <Newvideo />
                        <Newvideo />
                        <Newvideo />
                        <Newvideo />
                        <Newvideo />
                        <Newvideo />
                        <Newvideo />
                        <Newvideo />
                        <Newvideo />
                        <Newvideo />
                        <Newvideo />
                        <Newvideo />
                        <Newvideo />
                        <Newvideo />
                    </div>
                </div>
            </Container >
        )
    }
}

export default Video;