import React from 'react'
import '../styles/Navbar.scss'
import avatar from '../images/phamanhhung.png'




class NavBar extends React.Component {

    render() {
        return (
            <div className="NavigationBar">
                <div className="search">
                    <input type="text" placeholder='Tìm Kiếm...' />
                    <button className='btn-search'><i className="bi bi-search"></i></button>
                    <button className='mic-search'><i className="bi bi-mic-fill"></i></button>
                </div>
                <div className="option">
                    <span className='add'>
                        <i class="bi bi-camera-fill"></i>
                    </span>
                    <span className='notification'>
                        <i class="bi bi-bell-fill"></i>
                    </span>
                    <span id='ilndividua'>
                        <img src={avatar} alt="" />
                    </span>
                </div>
            </div>
        )

    }
}

export default NavBar