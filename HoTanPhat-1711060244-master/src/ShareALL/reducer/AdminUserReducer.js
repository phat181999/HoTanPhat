import * as ActType from '../constants/ActType';

let AdminUserState = {
	listAUser: [],
	keyword: '',
	userEdit: null
};

const AdminUserReducer = (state = AdminUserState, action) => {
	switch (action.type) {
		case ActType.GET_LIST_USER_ADMIN:
			state.listAUser = action.data;
			return { ...state };
		//Detele
		case ActType.DELETE_USER:
			let listAUser = [ ...state.listAUser ];
			let index = listAUser.findIndex((user) => {
				return user.taiKhoan === action.user.taiKhoan;
			});
			if (index !== -1) {
				listAUser.splice(index, 1);
				state.listAUser = listAUser;
			}
			return { ...state };
		//end Delete user
		case ActType.SEARCH_USER:
			state.keyword = action.keyword;
			return { ...state };
		/// end search user
		//edit user
		case ActType.EDIT_USER:
			state.userEdit = action.user;
			return { ...state };
		//end edit user
		default:
			return { ...state };
	}
};
export default AdminUserReducer;
