import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../ShareALL/action/index';
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer';

let divTrailer = {
	height: '240px',
	width: '580px',
	marginLeft: "14px"
}
const Trailer = { 
	marginLeft: "14px"
}
let divStyleImg={
	height: '207px',
	width: '85%',
	
}
let divContent = {
	justifyContent: 'center'
}
const divName = {
	// color: 'white',
	textAlign: 'center'
}
let ActorFilm={
	marginTop: "41px"
}

class DetailMovie extends Component {
	componentDidMount() {
		let id = this.props.match.params.id;
		this.props.getDetail(id);
	}
	renderTable = () => {
		const { movie } = this.props;

		if (movie.lichChieu) {
			return movie.lichChieu.map((item) => {
				return (
					<tr key={item.maLichChieu}>
						<td>
							<h5>{item.thongTinRap.tenCumRap}</h5>
						</td>
						<td>
							<h5>{item.thongTinRap.tenRap}</h5>
						</td>
						<td>
							<h5>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</h5>
						</td>
						<td>
							<Link to={`/buyticket/${item.maLichChieu}`} onClick={this.changePage}>
								<button className="btn btn-success">
									{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}
								</button>
							</Link>
						</td>
					</tr>
				);
			});
		}
	};
	componentWillMount() {
		this.props.resetDetailMovie();
	}
	render() {
		const { movie } = this.props;
		const settings = {
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 1,
			initialSlide: 0,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						initialSlide: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};
		return (
			<div>
				<section id="Detail-Movie">
					<div className='Detail-main'>
						<div className="Img-background">
							<img src={movie.hinhAnh} alt="" className='ImgBg' />
						</div>
						<div className="container Detail-content">
							<div className="row">
								<div className="detail-movie__poster col-3 p-lg-0">
									<img className="img-fluid container Img-Title" src={movie.hinhAnh} alt="" />
								</div>
								<div className="detail-movie__poster col-7 p-lg-0 container">
									<div className='Detail-NameMovie'>
										<h3>{movie.tenPhim}</h3>
									</div>
									<div className='Detail-Extra'>
										<span>{movie.moTa}</span>
									</div>
									<div className='Detail-Extra'>
										<span>Ngày khởi chiếu: {movie.ngayKhoiChieu}</span>
									</div>
									<div className='Detail-Extra'>
										<span>Đạo Diễn: Stack</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* slick actor  */}
					{/* slick actor  */}
					<div className='Show-Day'>
						<div className="container">
							<TabContainer>
								<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="container" style={divContent}>
									<Tab eventKey="profile" title="Thông Tin">
										<div className='container'>
											<h3 style={divName}>{movie.tenPhim}</h3>
										</div>
										<div className="row m-0">
											<div className="col-sm-6 p-0">
												<div className="row m-0">
													<div className="col-5">
														<p className="title">Ngày phát hành</p>
													</div>
													<div className="col-7">
														<p className="content">04.10.2019</p>
													</div>
												</div>
												<div className="row m-0">
													<div className="col-5">
														<p className="title">Đạo diễn</p>
													</div>
													<div className="col-7">
														<p className="content">Todd Phillips</p>
													</div>
												</div>
												<div className="row m-0">
													<div className="col-5">
														<p className="title">Diễn viên</p>
													</div>
													<div className="col-7">
														<p className="content">Zazie Beetz, Joaquin Phoenix</p>
													</div>
												</div>
												<div className="row m-0">
													<div className="col-5">
														<p className="title">Thể Loại</p>
													</div>
													<div className="col-7">
														<p className="content">Hành động, Tội phạm</p>
													</div>
												</div>
												<div className="row m-0">
													<div className="col-5">
														<p className="title">Định dạng</p>
													</div>
													<div className="col-7">
														<p className="content">2D/Digital</p>
													</div>
												</div>
												<div className="row m-0">
													<div className="col-5">
														<p className="title">Quốc Gia SX</p>
													</div>
													<div className="col-7">
														<p className="content">Mỹ</p>
													</div>
												</div>
											</div>
											<div className="col-sm-6">
												<p className="title">Nội dung</p>
												<p className="content info-full">{movie.moTa}</p>
											</div>
										</div>
										{/* TITLE  */}
										<div className="row m-0">
											<div className="col-sm-6 p-0 " style={ActorFilm}>												
													<Slider {...settings}>													
															<img src="../img/dv01.jpg" />
															<img src="../img/dv8.jpg"  style={divStyleImg}/>
															<img src="../img/dv2.jpg" />
															<img src="../img/dv9.jpg" />
															<img src="../img/dv10.jpg" />
															<img src="../img/dv11.jpg" />	
															<img src="../img/dv12.jpg" />												
													</Slider>												
											</div>
											<div className="col-sm-6 p-0">
												<p className="title" style={Trailer}>Trailer</p>
												<iframe allowFullScreen src={movie.trailer} style={divTrailer}></iframe>
											</div>
										</div>
									</Tab>
									<Tab eventKey="home" title="Lịch Chiếu">
										<div className='row'>
											<table className="table">
												<thead>
													<tr>
														<th>
															<h4>Cụm Rạp</h4>
														</th>
														<th>
															<h4>Tên Rạp</h4>
														</th>
														<th>
															<h4>Ngày Chiếu</h4>
														</th>
														<th>
															<h4>Giờ chiếu</h4>
														</th>
													</tr>
												</thead>
												<tbody>{this.renderTable()}</tbody>
											</table>
										</div>
									</Tab>
								</Tabs>
							</TabContainer>
						</div>
					</div>
					{/* <Footer/> */}
				</section>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		movie: state.movieReducer.detailMovie
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getDetail: (id) => {
			dispatch(action.actDetailMovie(id));
		},
		resetDetailMovie: () => {
			dispatch(action.actGetDetailMovie({}));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);
