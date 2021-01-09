import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import DashboardAdmin from './../Admin/DashboardAdmin';
import FilmMang from './../Admin/ComponentAdmin/FilmMang/FilmMang';

const AdminLayout = (props) => {
	return (
		<Fragment>
			<DashboardAdmin />
			{/* {props.children} */}
			{/* <FilmMang /> */}
		</Fragment>
	);
};

export default function AdminTemplate({ Component, ...props }) {
	return (
		<Route
			{...props}
			render={(propsComponent) => {
				if (localStorage.getItem('userAdmin')) {
					// Truong hop da login
					return (
						<AdminLayout>
							<Component {...propsComponent} />
						</AdminLayout>
					);
				} else {
					// Chua login
					return <Redirect to="/admin" />;
				}
			}}
		/>
	);
}
