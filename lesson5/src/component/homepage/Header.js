import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './header.css';

function Header() {
    const menu = [
        {
            name: 'Trang chủ',
            link: '/',
        },
        {
            name: 'Thông tin',
            link: '',
        },
        {
            name: 'Hỏi đáp',
            link: '',
        },
        {
            name: 'Liên hệ',
            link: '',
        },
        {
            name: 'Thành viên',
            link: ' ',
        },
    ];
    return (
        <div className="menu-header">
            <Link to="/">
                <img src={logo} alt="/" />
            </Link>

            <div className="right-menu">
                {menu.map((tab, index) => {
                    return (
                        <Link to={tab.link}>
                            <div key={index} className="menu">
                                <p>{tab.name}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
            <label className="menu-bar" htmlFor="open">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                </svg>
            </label>

            <input id="open" type="checkbox" />
            <label className="blur-background" htmlFor="open"></label>
            <div className="nav-right-menu">
                <label className="nav-close" htmlFor="open">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                    </svg>
                </label>
                {menu.map((tab, index) => {
                    return (
                        <Link to={tab.link}>
                            <div key={index} className="nav-menu">
                                <p>{tab.name}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default Header;
