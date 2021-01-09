import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as AdminLogin from '../../ShareALL/action/AdminLogin';

class Admin extends Component {
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
		this.props.loginAdmin(this.state, this.props.history);
	};

	render() {
		return (
			<div>
				<div className="container">
					<div className="col-sm-6 mx-auto">
						<form onSubmit={this.handleLogin}>
							<h3 className="container textal">Chào Mừng Quản Trị</h3>
							<div className="form-group">
								<label>Tài Khoản</label>
								<input
									type="text"
									className="form-control"
									placeholder="Nhập Tài Khoản"
									onChange={this.handleOnChange}
									name="taiKhoan"
								/>
							</div>

							<div className="form-group">
								<label>Mật Khẩu</label>
								<input
									type="password"
									className="form-control"
									placeholder="Nhập Mật Khẩu"
									name="matKhau"
									onChange={this.handleOnChange}
								/>
							</div>

							<div className="form-group">
								<div className="custom-control custom-checkbox">
									<input type="checkbox" className="custom-control-input" id="customCheck1" />
									<label className="custom-control-label" htmlFor="customCheck1">
										Remember me
									</label>
								</div>
							</div>

							<button type="submit" className="btn btn-primary btn-block">
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		loginAdmin: (user, history) => {
			dispatch(AdminLogin.actLoginAdmin(user, history));
		}
	};
};

export default connect(null, mapDispatchToProps)(Admin);
