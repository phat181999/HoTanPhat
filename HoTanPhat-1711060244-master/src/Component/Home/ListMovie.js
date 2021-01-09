import React, { Component } from 'react';
import Movie from '../Movie';
import { connect } from 'react-redux';
import * as action from '../../ShareALL/action';
import Slider from 'react-slick';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer';
import Spin from 'react-reveal/Spin';
let divStyle = {
	justifyContent: 'center'
}
class ListMovie extends Component {
	componentDidMount() {
		this.props.getListMovie();
	}

	renderHTML = () => {
		return this.props.listMovie.map((movie) => {
			return <Movie key={movie.maPhim} movie={movie} />;
		});
	};

	render() {
		const settings = {
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 4,
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
			<section id="List-Movie">
				<TabContainer>
					<Tabs defaultActiveKey="List-Movie" id="uncontrolled-tab-example" className="container" style={divStyle}>
						<Tab eventKey="List-Movie" title="Đang Chiếu">
							<Slider {...settings}>
								{this.renderHTML()}
							</Slider>
						</Tab>
						<Tab eventKey="List-Movie-Soon" title="Đang Sắp Chiếu">
							<Slider {...settings}>
								<Spin left>
									<div className="Soon">
										<img src="./img/sc1.jpg" />
									</div>
								</Spin>

								<Spin left>
									<div className="Soon">
										<img src="./img/sc3.jpg" />
									</div>
								</Spin>

								<Spin left>
									<div className="Soon">
										<img src="./img/sc2.jpg" />
									</div>
								</Spin>

								<Spin left>
									<div className="Soon">
										<img src="./img/sc4.jpg" />
									</div>
								</Spin>

								<Spin left>
									<div className="Soon">
										<img src="./img/sc5.jpg" />
									</div>
								</Spin>

								<Spin left>
									<div className="Soon">
										<img src="./img/dc1.jpg" />
									</div>
								</Spin>
							</Slider>
						</Tab>
					</Tabs >
				</TabContainer >
				<div className="List-Movie-BG"></div>
			</section>
		);

	}
}

const mapStateToProps = (state) => {
	return {
		listMovie: state.movieReducer.listMovie
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getListMovie: () => {
			dispatch(action.actGetListMovieAPI());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ListMovie);
