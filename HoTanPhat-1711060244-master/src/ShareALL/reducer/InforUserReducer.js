import * as ActType from "./../constants/ActType";

let initialState = {
    inforUser: []
}

const inforUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActType.GET_INFOR_USER:
            state.inforUser = action.data;
            return { ...state };
        default:
            return { ...state };
    }
}
export default inforUserReducer;