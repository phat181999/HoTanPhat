import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as UserSign from './../../../ShareALL/action/UserSign';
import { Link } from 'react-router-dom';

class SingIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			taiKhoan: '',
			matKhau: ''
		};
	}

	handleOnChange = (event) => {
		let { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleLogin = (event) => {
		event.preventDefault();
		this.props.sigin(this.state, this.props.history);
	};

	render() {
		return (
			<section id="signUp">
				<div>
					<div className="container">
						<div className="col-sm-6 mx-auto">
							<form onSubmit={this.handleLogin}>
								<div className="form-group">
									{/* <label>Tài Khoản</label> */}
									<input
										type="text"
										className="form-control"
										placeholder="Tài khoản"
										onChange={this.handleOnChange}
										name="taiKhoan"
									/>
								</div>

								<div className="form-group">
									{/* <label>Mật Khẩu</label> */}
									<input
										type="password"
										className="form-control"
										placeholder="Mật khẩu"
										name="matKhau"
										onChange={this.handleOnChange}
									/>
								</div>
								<button
									type="submit"
									className="btn btn-primary btn-block"
									onClick={this.props.history}
								>
									Đăng Nhập
								</button>
								<Link to="/signUp">Bạn chưa có tài khoản</Link>
							</form>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		sigin: (user, history) => {
			dispatch(UserSign.sigin(user, history));
		}
	};
};

export default connect(null, mapDispatchToProps)(SingIn);
