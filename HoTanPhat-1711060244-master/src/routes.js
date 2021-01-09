//User
import Index from './Component/Home/index';
import DetailMovie from './Component/DetailMovie';
import ListMovie from './Component/Home/ListMovie';
import Buyticket from './Component/Home/booking-Ticket/buyticket';
import SignIn from './Component/Home/SigIn-SigOut/SingIn';
import SingUp from './Component/Home/SignUp/SingUp';
import InforUser from "./Component/Home/SignUp/InforUser";
import Stripe from "./Component/Home/Payment/Stripe";

//Admin
import DashboardAdmin from './Component/Admin/DashboardAdmin';
import FilmMang from './Component/Admin/ComponentAdmin/FilmMang/FilmMang';
import UpLoadIMG from './Component/Admin/ComponentAdmin/FilmMang/UpLoadIMG';
//User
const routesHome = [
	{
		path: '/',
		exact: true,
		component: Index
	},
	{
		path: '/home',
		exact: false,
		component: Index
	},
	{
		path: '/list-moive',
		exact: false,
		component: ListMovie,
		scroll: 'list-moive'
	},
	{
		path: '/detail/:id',
		exact: false,
		component: DetailMovie
	},
	{
		path: '/buyticket/:id',
		exact: false,
		component: Buyticket
	},
	{
		path: '/signIn/',
		exact: false,
		component: SignIn
	},
	{
		path: '/signUp/',
		exact: false,
		component: SingUp
	},
	{
		path: '/Inforuser/',
		exact: false,
		component: InforUser
	},
	{
		path: '/Payment/',
		exact: false,
		component: Stripe
	}
];

//Admin
const routesAdmin = [
	{
		path: '/admin/DashbroadAmin',
		exact: false,
		component: DashboardAdmin
	}
];

export { routesHome, routesAdmin };
