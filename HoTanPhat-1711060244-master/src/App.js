import React , { Suspense }  from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PageNotFound from './Component/PageNotFound';
import { routesHome, routesAdmin } from './routes';
import Admin from './Component/Admin/Admin';
import HomeTemplate from './Component/Template/HomeTemplate';
import AdminTemplate from './Component/Template/AdminTemplate';
import Loader from "./Component/loader";


function App() {
	//User
	const ShowMenuHome = (routes) => {
		if (routes && routes.length > 0) {
			return routes.map((item, index) => {
				return <HomeTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />;
			});
		}
	};
	//Admin
	const ShowMenuAdmin = (routes) => {
		if (routes && routes.length > 0) {
			return routes.map((item, index) => {
				return <AdminTemplate key={index} exact={item.exact} path={item.path} Component={item.component} />;
			});
		}
	};

	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Suspense fallback={<Loader/>}>
					{ShowMenuHome(routesHome)}
					{ShowMenuAdmin(routesAdmin)}
					<Route path="/admin" component={Admin} />
					<Route path="" Component={PageNotFound} />
					</Suspense>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
