import React from 'react';
import Input from './Input';

function Register() {
    return (
        <div className="register-form">
            <h2>ĐĂNG KÝ</h2>
            <form>
                <Input className="first-name" type="text" placeholder="Họ" />
                <Input className="last-name" type="text" placeholder="Tên" />
                <Input className="phone-number" type="number" placeholder="Số điện thoại" />
                <Input className="dob" type="date" placeholder="Ngày sinh" />
                <Input className="user-name" type="text" placeholder="Tên người dùng" />
                <Input className="adress" type="text" placeholder="Địa chỉ" />
                <Input className="email" type="email" placeholder="Địa chỉ email" />
                <Input className="password" type="password" placeholder="Mật khẩu" />
                <Input className="password-check" type="password" placeholder="Xác nhận" />
                <button id="log-in">Đăng Nhập</button>
                <button id="registed" type="submit">
                    Đăng Ký
                </button>
            </form>
        </div>
    );
}

export default Register;
