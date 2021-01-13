import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as UserSign from '../../../ShareALL/action/UserSign';



const divStyle ={
	color: 'white'
}
class SingUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			taiKhoan: '',
			hoTen: '',
			email: '',
			soDt: '',
			matKhau: '',
			maLoaiNguoiDung: 'KhachHang',
			maNhom: 'GP01'
		};
	}
	handleOnChane = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};
	handleSubmit = (event) => {
		event.preventDefault();
		this.props.addAccount(this.state);
	};

	render() {

		return (
			<div className="SignUp">
				<form className="container" onSubmit={this.handleSubmit}>
					<h3>Thêm người dùng</h3>
					<div className="form-group">
						<span style={divStyle}>Tài khoản</span>
						<input className="form-control" 

						 name="taiKhoan" 
						 id="taiKhoan"
						 onChange={this.handleOnChane} />

					</div>
					<div className="form-group">
						<span style={divStyle}>Mật khẩu</span>
						<input className="form-control" name="matKhau" onChange={this.handleOnChane} />
					</div>
					<div className="form-group">
						<span style={divStyle}>Họ tên</span>
						<input className="form-control" name="hoTen" onChange={this.handleOnChane} />
					</div>
					<div className="form-group">
						<span style={divStyle}>Email</span>
						<input className="form-control" name="email" onChange={this.handleOnChane} />
					</div>
					<div className="form-group">
						<span style={divStyle}>Số điện thoại</span>
						<input className="form-control" name="soDt" onChange={this.handleOnChane} />
					</div>
					<div className="form-group">
						<span style={divStyle}>Mã nhóm</span>
						<input
							value={this.state.maNhom}
							className="form-control"
							name="maNhom"
							onChange={this.handleOnChane}
						/>
					</div>
					<div className="form-group">
						<span style={divStyle}>Mã loại người dùng</span>
						<input
							value={this.state.maLoaiNguoiDung}
							className="form-control"
							name="maLoaiNguoiDung"
							onChange={this.handleOnChane}
						/>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-success">
							Đăng kí
						</button>
						<NavLink exact to="/signIn">
							Bạn đã có tài khoản đăng nhập ngay
						</NavLink>
					</div>
				</form>
			</div>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		addAccount: (user) => {
			dispatch(UserSign.signUpAPI(user));
		}
	};
};

export default connect(null, mapDispatchToProps)(SingUp);
