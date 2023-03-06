import React from 'react';
import logo from '../../src/assets/logo.png';
import '../component/header.css';

function Header() {
    const menu = [
        {
            name: 'Trang chủ',
            link: '',
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
            <img src={logo} alt="/" />
            <div className="right-menu">
                {menu.map((tab, index) => {
                    return (
                        <div key={index} className="menu">
                            <p>{tab.name}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Header;
