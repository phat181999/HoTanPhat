import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spin from 'react-reveal/Spin';

export default class Movie extends Component {
	constructor() {
		super()
		this.state = {
			isOpen: false
		}
		this.openModal = this.openModal.bind(this)
	}

	openModal() {
		this.setState({ isOpen: true })
	}
	// videoId={movie.trailer}
	render() {
		const { movie } = this.props;
		return (
			<Spin left>
				<div className="Movie-hinhAnh">
				<img className="card-img-top" src={movie.hinhAnh} alt="" />

				<div className="Movie-Content">
					<div className="Moive-trailer">
						<iframe allowfullscreen src={movie.trailer}></iframe>
					</div>
					<h4 className="card-title  container">{movie.tenPhim}</h4>
					<Link className="btn btn-success container" to={`/detail/${movie.maPhim}`}>
						MUA VÉ
					</Link>
				</div>
			</div>
			</Spin>

		);
	}
}
