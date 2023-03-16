import React from 'react';
import './container.css';

const containerInfo = [
    {
        pic: '',
        id: '10',
        tille: 'Tiết kiệm',
        dis: 'Chuyển tiền trong và ngoài ngân hàng một cách dễ dàng và nhanh chóng với mức phí phù hợp.',
        link: '/d',
    },
    {
        pic: '',
        id: '11',
        tille: 'Chất Lượng',
        dis: 'Các dịch vụ của WhiteFoo Bank sẽ mang đến cho bạn những gì tốt nhất hiện có, và nhiều ưu đãi.',
        link: '/c',
    },
    {
        pic: '',
        id: '12',
        tille: 'Nhanh Chóng',
        dis: 'Giao dịch diễn ra chưa đến 5 giây kể từ lúc xác nhận thanh toán, chuyển trực tiếp đến người nhận.',
        link: '/b',
    },
    {
        pic: '',
        id: '13',
        tille: 'Bảo Mật',
        dis: 'Thông tin giao dịch luôn được mã hóa để giúp dữ liệu của bạn luôn được an toàn, không bị đánh cắp.',
        link: '/a',
    },
];

function Container() {
    return (
        <div className="main-container">
            <div className="container">
                {containerInfo.map((info, index) => {
                    return (
                        <div className="box" key={index}>
                            <h3 className="title" key={info.id}>
                                {info.tille}
                            </h3>
                            <div className="dis" key={info.tille}>
                                {info.dis}
                            </div>
                            <div className="learn-more" key={info.link}>
                                Xem Thêm
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Container;
