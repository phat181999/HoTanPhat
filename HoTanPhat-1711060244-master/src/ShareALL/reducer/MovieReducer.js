import * as ActType from "./../constants/ActType";

let initialState = {
  listMovie: [],
  detailMovie: {},
  // loading: flase
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActType.GET_LIST_MOVIE:
      // state.loading = false;
      state.listMovie = action.data;
      return { ...state };
    case ActType.GET_DETAIL_MOVIE:
      state.detailMovie = action.data;
      // state.loading = false;
      return { ...state };
    default:
      return { ...state };
  }
};

export default movieReducer;
