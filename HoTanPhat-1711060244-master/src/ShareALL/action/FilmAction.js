import Axios from 'axios';
import * as ActType from '../constants/ActType';
import Swal from 'sweetalert2';
//ADD
export const ActAddAPI = (movie) => {
	const userAdmin = JSON.parse(localStorage.getItem('userAdmin'));
	return (dispatch) => {
		Axios({
			method: 'POST',
			url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim',
			data: movie,
			headers: {
				Authorization: `Bearer ${userAdmin.accessToken}`
			}
		})
			.then((rs) => {
				console.log(rs.data);
				Swal.fire({
					icon: 'success',
					title: 'thành công!',
					width: '400px',
					padding: '0 0 20px 0'
				})
			})
			.catch((err) => {
				console.log(err.data);
				Swal.fire({
					icon: 'error',
					title: 'Thất Bại!',
					text: 'Hãy thử lại ngay',
					width: '400px',
					padding: '0 0 20px 0'
				});
			});
	};
};
// DELETE
export const ActDeleteFilmAPI = (user) => {
	const userAdmin = JSON.parse(localStorage.getItem('userAdmin'));
	return (dispatch) => {
		Axios({
			method: 'DELETE',
			url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim={MaPhim}',
			data: user,
			headers: {
				Authorization: `Bearer ${userAdmin.accessToken}`
			}
		})
			.then((rs) => {
				console.log(rs.data);
				alert('Xóa thành công!');
			})
			.catch((err) => {
				alert('!');

			});
	};
};
//EDIT
export const ActEditFilmAPI = (movie) => {
	const userAdmin = JSON.parse(localStorage.getItem('userAdmin'));
	return (dispatch) => {
		Axios({
			method: 'POST',
			url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim',
			data: movie,
			headers: {
				Authorization: `Bearer ${userAdmin.accessToken}`
			}
		})
			.then((rs) => {
				console.log(rs.data);
				dispatch(ActEditFilm(rs.data));
			})
			.catch((err) => {
				alert(' chua ra');
				console.log(err.data);
			});
	};
};
export const ActUpPicturFilm = (user) => {
	const userAdmin = JSON.parse(localStorage.getItem('userAdmin'));
	return (dispatch) => {
		Axios({
			method: 'POST',
			url: 'https://localhost:44370/api/QuanLyPhim/UploadHinhAnhPhim',
			data: user,
			headers: {
				Authorization: `Bearer ${userAdmin.accessToken}`
			}
		})
			.then((rs) => {
				console.log(rs.data);
			})
			.catch((err) => {
				alert(' chua ra');
				console.log(err.data);
			});
	};
};

//type
//EDIT
export const ActEditFilm = (movie) => {
	return {
		type: ActType.EDIT_FILM,
		data: movie
	};
};
//DELETE
export const ActDeleteFilm = (movie) => {
	return {
		type: ActType.DELETE_FILM,
		data: movie
	};
};
