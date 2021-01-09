// import * as ActType from '../constants/ActType';

// let AdminFilmReducer = {
// 	listMovie: [],
// 	editFilm: null
// };

// const FilmReducer = (state = AdminFilmReducer, action) => {
// 	switch (action.type) {
// 		//DELETE FILM
// 		case ActType.DELETE_FILM:
// 			let listMovie = [ ...state.listMovie ];
// 			let index = listMovie.findIndex((movie) => {
// 				return movie.maPhim === action.movie.maPhim;
// 			});
// 			if (index !== -1) {
// 				listMovie.splice(index, 1);
// 				state.listMovie = listMovie;
// 			}
// 			return { ...state };

// 		case ActType.EDIT_FILM:
// 			state.editFilm = action.movie;
// 			return { ...state };
// 		default:
// 			return { ...state };
// 	}
// };
// export default FilmReducer;
