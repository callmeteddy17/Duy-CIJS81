import React from 'react';
import '../component/footer.css';
import logo from '../../src/assets/logo.png';

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-info">
                    <div className="main-footer1 main-footer">
                        <img src={logo} />
                        <p>
                            Hệ thống ngân hàng xuyên quốc gia đáng tin cậy. Dẫn đầu trong danh sách các ngân hàng được
                            người dùng bình chọn và được tin dùng bởi hàng triệu người dùng ở hầu hết các quốc gia trên
                            thế giới.
                        </p>
                    </div>
                    <div className="main-footer main-footer2">
                        <h1>Giới Thiệu</h1>
                        <p>Về chúng tôi</p>
                        <p>Dịch vụ</p>
                        <p>Tính năng</p>
                        <p>Bảng giá</p>
                    </div>
                    <div className="main-footer main-footer2">
                        <h1>Hỗ Trợ</h1>
                        <p>Câu hỏi thường gặp</p>
                        <p>Chính sách bảo mật</p>
                        <p>Điều khoản sử dụng</p>
                        <p>Liên hệ</p>
                    </div>
                    <div className="main-footer">
                        <h1>Liên Hệ</h1>
                        <p>Địa chỉ:227 Đường Nguyễn Văn Cừ, Phường 4, Quận 5, Hồ Chí Minh</p>
                        <p>Email:admin@whitefoo.com</p>
                        <p>Phone:(+84) 1234567890</p>
                    </div>
                </div>
                <p className="cpr">2020 WhiteFoo Corporation - Copyright lololol</p>
            </div>
        </>
    );
}

export default Footer;
