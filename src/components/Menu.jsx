import React from 'react';
import '../styles/Menu.scss';
import { categories, subscribe } from './Constants';
import {
    Link
} from 'react-router-dom';
/* import styled from 'styled-components'; */


class Menu extends React.Component {

    render() {
        return (
            <div id='NavMenu'>
                <div className="logo">
                    <Link to='/' style={{ textDecoration: "none", color: "#fff" }}>
                        <i class="bi bi-youtube"></i>
                        <span className='youtube'>YouTube
                            <sup>VN</sup>
                        </span>
                    </Link>
                </div>
                <div className="Menu">
                    <div className="line"></div>

                    {categories.map((category) => (
                        <div className="Menu-item">
                            <div className="logo-item">
                                <span className='icon'>{category.icon}</span>
                                <span className='name'>{category.name}</span>
                            </div>
                        </div>
                    ))}
                    <div className="line"></div>
                    <div className="subscribe">Kênh Đăng Ký</div>
                    {subscribe.map((subscribe) => (
                        <div className="Menu-item">
                            <div className="logo-item">
                                <img src={subscribe.avt} alt="" />
                                <span className='name'>{subscribe.channel}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )

    }
}


export default Menu;                   