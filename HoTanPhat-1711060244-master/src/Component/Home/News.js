import React, { Component } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';

let divStyle = {
    justifyContent: 'center'
}
let divFont = {
    fontFamily: "SF Regular"
}
export default class News extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            beforeChange: function (currentSlide, nextSlide) {
                console.log("before change", currentSlide, nextSlide);
            },
            afterChange: function (currentSlide) {
                console.log("after change", currentSlide);
            }
        };
        return (
            <div className="News">
                <TabContainer>
                    <Tabs defaultActiveKey="Movie" id="uncontrolled-tab-example" className="container" style={divStyle}>
                        <Tab eventKey="Movie" title="Điện Ảnh 24h">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="News-content">
                                            <Fade left>
                                                <img src="./img/news2.png" />
                                            </Fade>
                                            <LightSpeed left >
                                                <p className="News-Title">“Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành</p>
                                                <span>Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương tại 360 Giải Phóng!</span>
                                            </LightSpeed>
                                        </div>
                                    </div>
                                    <div className="col-6 News-content">
                                        <Fade right>
                                            <img src="./img/nees1.jpg" />
                                        </Fade>
                                        <LightSpeed right >
                                            <p className="News-Title">Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu </p>
                                            <span>Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi sao “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ trong một khung hình để ăn mừng thành tích ấn tượng </span>
                                        </LightSpeed>
                                    </div>
                                    <div className="col-6">
                                        <Fade bottom>
                                            <img src="./img/news3.jpg" />
                                        </Fade>
                                        <LightSpeed left >
                                            <p className="News-Title">NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI </p>
                                            <span className="News-span">Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã chính thức phát động cuộc thi thiết kế trang phục cho siêu anh hùng VINAMAN với tổng </span>
                                        </LightSpeed>
                                    </div>
                                    <div className="col-6">
                                        <Fade bottom>
                                            <img src="./img/news4.png" />
                                        </Fade>
                                        <LightSpeed right >
                                            <p className="News-Title">[ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị Antebellum</p>
                                            <span>Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác những mảng tối của xã hội trên nền một câu chuyện kinh dị, có sự tham gia của nhà sản xuất </span>
                                        </LightSpeed>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="Review" title="Review">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="News-content">
                                            <Fade left>
                                                <img src="./img/mm1.png" />
                                            </Fade>
                                            <LightSpeed left>
                                                <p className="News-Title">Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên kết</p>
                                                <span>Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám</span>
                                            </LightSpeed>
                                        </div>
                                    </div>
                                    <div className="col-6 News-content">
                                        <Fade right>
                                            <img src="./img/mm2.png" />
                                        </Fade>
                                        <LightSpeed right>
                                            <p className="News-Title">Review: Dinh Thự Oan Khuất (Ghost Of War)</p>
                                            <span>Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!</span>
                                        </LightSpeed>
                                    </div>
                                    <div className="col-6">
                                        <Fade bottom>
                                            <img src="./img/mm4.png" />
                                        </Fade>
                                        <LightSpeed left>
                                            <p className="News-Title">‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh</p>
                                            <span className="News-span">Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng tộc - nỗi đau gây nhức nhối nước Mỹ cho tới tận hôm nay.</span>
                                        </LightSpeed>
                                    </div>
                                    <div className="col-6">
                                        <Fade bottom>
                                            <img src="./img/mm5.png" />
                                        </Fade>
                                        <LightSpeed right>
                                            <p className="News-Title">American Sniper - Chính nghĩa hay phi nghĩa?</p>
                                            <span>American Sniper khắc họa một tay súng bắn tỉa “huyền thoại” của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu chuyện phim chậm rãi đưa người xem qua từng thời khắc khác nhau của Kyle, từ thửa nhỏ, thiếu niên, rồi gia nhập quân đội, rồi tham chiến. Từng khoảnh khắc bắt đầu nhẹ nhàng...</span>
                                        </LightSpeed>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                        <Tab eventKey="profile" title="Khuyến Mãi">
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <div className="News-content">
                                            <Fade left>
                                                <img src="./img/mm6.jpg" />
                                            </Fade>
                                            <LightSpeed left>
                                                <p className="News-Title">BHD 59K/VÉ CẢ TUẦN !!!</p>
                                                <span>Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.</span>
                                            </LightSpeed>
                                        </div>
                                    </div>
                                    <div className="col-6 News-content">
                                        <Fade right>
                                            <img src="./img/mm7.jpg" />
                                        </Fade>
                                        <LightSpeed right>
                                            <p className="News-Title">TIX 1K/VÉ NGẠI CHI GIÁ VÉ</p>
                                            <span>Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm 02 voucher thanh toán ZaloPay thả ga</span>
                                        </LightSpeed>
                                    </div>
                                    <div className="col-6">
                                        <Fade bottom>
                                            <img src="./img/mm8.png" />
                                        </Fade>
                                        <LightSpeed left>
                                            <p className="News-Title">ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX </p>
                                            <span className="News-span">ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX
                                        Hành trình tìm Ròm và Phúc chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua TIX.</span>
                                        </LightSpeed>
                                    </div>
                                    <div className="col-6">
                                        <Fade bottom>
                                            <img src="./img/mm9.jpg" />
                                        </Fade>
                                        <LightSpeed right>
                                            <p className="News-Title">BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN!</p>
                                            <span>Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá 59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc Mục Vé Phim trên ZaloPay.</span>
                                        </LightSpeed>
                                    </div>
                                </div>
                            </div>
                        </Tab>
                    </Tabs >
                </TabContainer >
                <div className="News-Footer"></div>
            </div >
        )
    }
}
