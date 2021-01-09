import Axios from 'axios';
import * as ActType from '../constants/ActType';
import Swal from 'sweetalert2';

export const actLoginAdmin = (user, history) => {
	return (dispatch) => {
		Axios({
			method: 'POST',
			url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`,
			data: user
		})
			.then((rs) => {
				Swal.fire({
					icon: 'success',
					title: 'Đăng Nhập thành công!',
					width: '400px',
					padding: '0 0 20px 0'
				}).then(() => {
					if (rs.data.maLoaiNguoiDung === 'QuanTri') {
						localStorage.setItem('userAdmin', JSON.stringify(rs.data));
						//chuyển trang
						history.push('/admin/DashbroadAmin');
					} else {
						alert('Ban khong co quyen truy cap');
					}
				});
			})
			.catch((err) => {
				console.log(err);
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

export const ActEditUserAPI = (user) => {
	const userAdmin = JSON.parse(localStorage.getItem('userAdmin'));
	return (dispatch) => {
		Axios({
			method: 'PUT',
			url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
			data: user,
			headers: {
				Authorization: `Bearer ${userAdmin.accessToken}`
			}
		})
			.then((rs) => {
				Swal.fire({
					icon: 'success',
					title: 'Sửa thành công!',
					width: '400px',
					padding: '0 0 20px 0'
				}).then(() => {
					console.log(user.data);
				});
			})
			.catch((err) => {
				console.log(err.data);
				Swal.fire({
					icon: 'error',
					title: 'Sai!',
					text: 'Hãy thử lại ngay',
					width: '400px',
					padding: '0 0 20px 0'
				});
			});
	};
};
export const ActListAdminUserAPI = () => {
	return (dispatch) => {
		Axios({
			method: 'GET',
			url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01'
		})
			.then((rs) => {
				dispatch(ActListAdminUser(rs.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const ActDeleteAUAPI = (user) => {
	const userAdmin = JSON.parse(localStorage.getItem('userAdmin'));
	return (dispatch) => {
		Axios({
			method: 'DELETE',
			url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung',
			data: user,
			headers: {
				Authorization: `Bearer ${userAdmin.accessToken}`
			}
		})
			.then((rs) => {
				console.log(user.data);
				alert('Xóa thành công!');
			})
			.catch((err) => {
				console.log(err);
				Swal.fire({
					icon: 'error',
					title: 'Thất bại!',
					text: 'Hãy thử lại ngay',
					width: '400px',
					padding: '0 0 20px 0'
				});
			});
	};
};

export const ActThemNguoiDungAPI = (user) => {
	const userAdmin = JSON.parse(localStorage.getItem('userAdmin'));
	return (dispatch) => {
		Axios({
			method: 'POST',
			url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung',
			data: user,
			headers: {
				Authorization: `Bearer ${userAdmin.accessToken}`
			}
		})
			.then((rs) => {
				Swal.fire({
					icon: 'success',
					title: 'Thêm người dùng thành công!',
					width: '400px',
					padding: '0 0 20px 0'
				}).then(() => {
					console.log(rs.data);
				});
			})
			.catch((err) => {
				Swal.fire({
					icon: 'error',
					title: 'Thêm người dùng thất bại!',
					text: 'Hãy thử lại ngay',
					width: '400px',
					padding: '0 0 20px 0'
				}).catch(() => {
					console.log(err.response.data);
				});
			});
	};
};

export const ActTimKiemNguoiDungAPI = (keywork) => {
	const userAdmin = JSON.parse(localStorage.getItem('userAdmin'));

	return (dispatch) => {
		Axios({
			method: 'GET',
			url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa={tukhoa}',
			data: keywork,
			headers: {
				Authorization: `Bearer ${userAdmin.accessToken}`
			}
		}).then((rs) => {
			console.log(rs.data);
			dispatch(ActTimKiemNguoiDung(rs.data));
		});
		// .catch((err) => {
		// 	alert('Người dùng không tồn tại');
		// 	console.log(err.data);
		// });
	};
};

//TYPE
export const ActEditUser = (user) => {
	return {
		type: ActType.EDIT_USER,
		data: user
	};
};
export const ActListAdminUser = (listAUser) => {
	return {
		type: ActType.GET_LIST_USER_ADMIN,
		data: listAUser
	};
};

export const ActTimKiemNguoiDung = (keywork) => {
	return {
		type: ActType.SEARCH_USER,
		keywork
	};
};
// export const ActDeleteAU = (listAUser) => {
// 	return {
// 		type: ActType.DELETE_USER,
// 		data: listAUser
// 	};
// };
