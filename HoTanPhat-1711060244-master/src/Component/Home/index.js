import React, { Component } from 'react';
import Event from '../Home/Event';
import Footer from '../Home/footer';
import Navbar from '../Home/navbar';
import Slider from '../Home/slider';
import ListMovie from '../Home/ListMovie';
import News from './News';
import { Fragment } from 'react';

export default class Index extends Component {
	render() {
		return (
			<Fragment>
				<Slider />
				{/* <HomeToolFilm/> */}
				<ListMovie />
				<News/>
				<Event />
				<Footer />
			</Fragment>
		);
	}
}
