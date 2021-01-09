import { combineReducers } from 'redux';
import movieReducer from './MovieReducer';
import AdminUserReducer from './AdminUserReducer';
import inforUserReducer from './InforUserReducer';
import FilmReducer from './FilmReducer';
import cinemaReducer from "./CenimaReducer";
const rootReducer = combineReducers({
	movieReducer, //   movieReducer: movieReducer
	AdminUserReducer,
	// FilmReducer,
	inforUserReducer,
	// AdminFilmReducer
	cinemaReducer
});

export default rootReducer;
