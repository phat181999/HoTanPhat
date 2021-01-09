import React, { Component } from 'react';
import Slider from 'react-slick';
const divStyle={
	backgroundColor: '#fff'
}
export default class Event extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			pauseOnHover: true
		};

		return (
			<div className="Event">
				<div className="container">
					<div className="row">
						<div className="col-sm-4 col-xs-12">
							<p class="textLeft">
								Ứng dụng tiện lợi dành cho người yêu điện ảnh
						</p>
							<br />
							<p class="textSmallLeft">
								Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và đổi quà hấp dẫn.
					</p>
							<button class="buttonLeft" >
								App miễn phí - Tải về ngay!
					</button>
						</div>
						<div className="col-sm-4 col-xs-12">
							<div className="container">
								<div className="row">
									<h4 class="title">ĐỐI TÁC</h4>
									<div className="col-sm-12 col-xs-12 Icon-img">
										<img src="./img/icon1.png" style={divStyle}/>
										<img src="./img/icon2.png" />
										<img src="./img/icon3.png" />
										<img src="./img/icon4.png" />
										<img src="./img/icon5.png" />
									</div>
									<div className="col-sm-12 col-xs-12 Icon-img">
										<img src="./img/icon6.png" style={divStyle}/>
										<img src="./img/icon7.png" />
										<img src="./img/icon8.png" />
										<img src="./img/icon8.png" />
										<img src="./img/icon10.png" />
									</div>
									<div className="col-sm-12 col-xs-12 Icon-img">
										<img src="./img/icon11.png" style={divStyle}/>
										<img src="./img/icon12.png" />
										<img src="./img/icon13.png" />
										<img src="./img/icon21.png" />
										<img src="./img/icon20.png" />
									</div>
									<div className="col-sm-12 col-xs-12 Icon-img">
										<img src="./img/icon17.png" style={divStyle}/>
										<img src="./img/icon17.png" />
										<img src="./img/icon18.png" />
										<img src="./img/icon19.png" />
										<img src="./img/icon20.png" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-4 col-xs-12">
							<div Class="col-xs-6">
								<p class="title">MOBILE APP</p>
								<img src="./img/apple-logo.png"/>
								<img src="./img/android-logo.png"/>
							</div>
							<div Class="col-xs-6">
								<p class="title">SOCIAL</p>
								<img src="./img/zalo-logo.png"/>
								<img src="./img/facebook-logo.png"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
