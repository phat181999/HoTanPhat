import Axios from 'axios';
import * as ActType from '../constants/ActType';
import Swal from 'sweetalert2';

export const actDetailMovie = (id) => {
	return (dispatch) => {
		Axios({
			method: 'GET',
			url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
		})
			.then((rs) => {
				console.log(rs.data);
				dispatch(actGetDetailMovie(rs.data));
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

export const actGetListMovieAPI = () => {
	return (dispatch) => {
		Axios({
			method: 'GET',
			url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01'
		})
			.then((rs) => {
				dispatch(actGetListMovie(rs.data));
				
			})
			.catch((err) => {
				console.log(err);
			});
	};
};

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
export const actGetListMovie = (listMovie) => {
	return {
		type: ActType.GET_LIST_MOVIE,
		data: listMovie
	};
};

export const actGetDetailMovie = (detailMovie) => {
	return {
		type: ActType.GET_DETAIL_MOVIE,
		data: detailMovie
	};
};
