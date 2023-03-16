import React from 'react';
import { Link } from 'react-router-dom';
import './center.css';
import Container from './Container';

function Center() {
    return (
        <>
            <div className="main-box">
                <h1>Thanh toán không thể đơn giản hơn</h1>
                <p>Hệ thống ngân hàng Internet hiện đại được tạo ra dành cho bạn</p>
                <Link to="/register">
                    <div className="start-to-use">BẮT ĐẦU</div>
                </Link>
            </div>
            <Container />
        </>
    );
}

export default Center;
