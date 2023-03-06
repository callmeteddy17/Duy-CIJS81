import React from 'react';
import '../component/center.css';
import Container from './Container';

function Center() {
    return (
        <>
            <div className="main-box">
                <h1>Thanh toán không thể đơn giản hơn</h1>
                <p>Hệ thống ngân hàng Internet hiện đại được tạo ra dành cho bạn</p>
                <div className="start-to-use">BẮT ĐẦU</div>
            </div>
            <Container />
        </>
    );
}

export default Center;
