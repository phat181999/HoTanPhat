// import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
// import Slider from "react-slick";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';
// export default class Film1 extends Component {
//     render() {
//         const settings = {
// 			className: "center",
// 			centerMode: true,
// 			infinite: true,
// 			centerPadding: "60px",
// 			slidesToShow: 3,
// 			speed: 500
// 		  };
		  
// 		const { movie } = this.props;
//         return (
//             <Swiper
// 				spaceBetween={50}
// 				slidesPerView={3}
// 				onSlideChange={() => console.log('slide change')}
// 				onSwiper={(swiper) => console.log(swiper)}
// 			>
// 				<SwiperSlide> <div className="card"  >
// 					<img className="card-img-top" src={movie.hinhAnh} alt="" />
// 					<div className="card-body">
// 						<h4 className="card-title ">{movie.tenPhim}</h4>
// 						<Link className="btn btn-success container" to={`/detail/${movie.maPhim}`}>
// 							MUA VÉ
// 			 			</Link>
// 					</div>
// 				</div></SwiperSlide>
// 			</Swiper>
//         )
//     }
// }
