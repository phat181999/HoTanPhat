import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../Home/navbar';
///stateless
const HomeLayOut = (props) => {
	return (
		<Fragment>
			<Navbar />
			{props.children}
		</Fragment>
	);
};

export default function HomeTemplate({ Component, ...props }) {
	return (
		<Route
			{...props}
			render={(propsComponent) => (
				<HomeLayOut>
					<Component {...propsComponent} />
				</HomeLayOut>
			)}
		/>
	);
}
