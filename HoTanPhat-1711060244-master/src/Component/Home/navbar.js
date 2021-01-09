import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link, animateScroll as scroll } from 'react-scroll';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import ScrollToTop from "react-scroll-to-top";
import Slide from '@material-ui/core/Slide';
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import { Link } from 'react-router-dom';
function HideOnScroll(props) {
	const { children, window } = props;
	const trigger = useScrollTrigger({ target: window ? window() : undefined });
	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}
HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	window: PropTypes.func
};
const useStyles = makeStyles(theme => ({
	//Avatar size
	small: {
		width: theme.spacing(4),
		height: theme.spacing(4)
	}
}));
export default function HideAppBar(props) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const classes = useStyles();

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	//logout
	const logout = () => {
		localStorage.removeItem("user");
	};
	const isLogin = () => {
		if (localStorage.getItem("user")) {
			let user = JSON.parse(localStorage.getItem("user"));
			//Logged
			return (
				<>
					<div>
						<Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
							<Avatar></Avatar>{user.hoTen}
						</Button>
						<Menu
							id="simple-menu"
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose}>Profile</MenuItem>
							{/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
							<NavLink exact to={{pathname:'/Inforuser/',}}>
								<MenuItem onClick={handleClose} >My account</MenuItem>
							</NavLink>
							<MenuItem onClick={handleClose} onClick={logout} href="# ">Logout</MenuItem>
						</Menu>
					</div>
				</>
			);
		}
		//check Not logged in
		return (
			<NavLink
				className="user d-flex align-items-center"
				activeClassName="active"
				exact
				to={{
					pathname: `/signIn`,

				}}
			>
				{/* <AccountCircleIcon />s */}
				<span className="pl-1">Đăng nhập</span>
			</NavLink>
		);
	};
	//end check login
	return (
		<React.Fragment>
			{/* <CssBaseline /> */}
			<HideOnScroll {...props}>
				<AppBar>
					<Toolbar>
						<Typography variant="h6">
							<header id="Header" className="themed-container" fluid="xl" className="container"> 
								<ScrollToTop smooth />
								<div className="Header-content">
									<nav className="navbar navbar-expand-sm  navbar-dark fixed-top">
										<ul className="navbar-nav Header-left">
											<li className="nav-item">
												<Link
													activeClass="active"
													className="nav-link"
													to="List-Movie"
													spy={true}
													smooth={true}
													offset={-70}
													duration={500}
												>
													LỊCH CHIẾU
												</Link>
											</li>
											<li className="Logo-Cinema">
												<Link
													activeClass="active"
													className="Logo-Cinema"
													exact
													to="/"
													spy={true}
													smooth={true}
													offset={-70}
													duration={500}
												>
													TECH CINEMA
												</Link>
											</li>
											<li>
											</li>
											<li className="nav-item">
												<Link
													activeClass="active"
													className="nav-link"
													to="News"
													spy={true}
													smooth={true}
													offset={-70}
													duration={500}
												>
													SỰ KIỆN
												</Link>
											</li>
										</ul>
										<div className="login">{isLogin()}</div>
									</nav>
								</div>
							</header>
						</Typography>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
		</React.Fragment>
	);
}
