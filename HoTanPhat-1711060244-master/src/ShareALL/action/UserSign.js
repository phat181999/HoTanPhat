import * as ActType from '../constants/ActType';
import Axios from 'axios';
import Swal from 'sweetalert2';

export const signUpAPI = (user) => {
	return (dispatch) => {
		Axios({
			method: 'POST',
			url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
			data: user
		})
			.then((rs) => {
				Swal.fire({
					icon: 'success',
					title: 'Đăng ký thành công!',
					text: 'Đăng nhập ngay',
					width: '400px',
					padding: '0 0 20px 0'
				}).then(() => {
					console.log(rs.data);
					
				});
				dispatch({
					type: ActType.SIGN_UP
				});
			})
			.catch((err) => {
				Swal.fire({
					icon: 'error',
					title: 'Sai tài khoản hoặc mật khẩu!',
					text: 'Hãy thử lại ngay',
					width: '400px',
					padding: '0 0 20px 0'
				});
			});
	};
};

export const sigin = (datasigin, history) => {
	return (dispatch) => {
		Axios({
			method: 'POST',
			url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
			data: datasigin
		})
			.then((rs) => {
				Swal.fire({
					icon: 'success',
					title: 'Đăng nhập thành công!',
					width: '400px',
					padding: '0 0 20px 0'
				}).then(() => {
					if (rs.data.maLoaiNguoiDung === 'KhachHang') {
						localStorage.setItem('user', JSON.stringify(rs.data));
						history.goBack(); 
					} else {
						console.log('Xin đăng nhập lại');
					}
				});
			})
			.catch((err) => {
				Swal.fire({
					icon: 'error',
					title: 'Sai tài khoản hoặc mật khẩu!',
					text: 'Hãy thử lại ngay',
					width: '400px',
					padding: '0 0 20px 0'
				});
				console.log(err);
			});
	};
};

export const Infor = (user) =>{
	return (dispatch) => {
		Axios({
			method: 'GET',
			url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan=taiKhoan',
			data: user
		})
			.then((rs) => {
				console.log(rs.data);
				dispatch(actGetInfor(rs.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
}

export const actGetInfor = (inforUser) => {
	return {
		type: ActType.GET_INFOR_USER,
		data: inforUser
	};
};