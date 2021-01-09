import * as ActType from "../constants/ActType";

let initialState = {
  listGroupCinema: [],
  // cinema: [],
  groupCinemaShowtimes: [],
  chosenGroupCinema: "",
  groupCinemaInfo: {}
};

const cinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActType.GET_LIST_GROUP_CINEMA:
      //After get list group-cinema, set the first child to chosenGroupCinema
      state.chosenGroupCinema = action.listGroupCinema[0].maHeThongRap;
      state.listGroupCinema = action.listGroupCinema;
      return { ...state };
    case ActType.GET_GROUP_CINEMA_INFO:
      //Modify group-cinemas-info follow format {cinema-1_name:(cinema-1_info), cinema-2_name:(cinema-2_info),...}
      let groupCinemaInfo = { ...state.groupCinemaInfo };
      groupCinemaInfo[action.maHeThongRap] = action.data;
      return { ...state, groupCinemaInfo: groupCinemaInfo };
    case ActType.SET_CHOSEN_GROUP_CINEMA:
      // state.cinema = action.cinema;
      state.chosenGroupCinema = action.chosenGroupCinema;
      return { ...state };
    case ActType.GET_CINEMA_MOVIES:
      state.groupCinemaShowtimes = action.groupCinemaShowtimes;
      return { ...state };
    default:
      return { ...state };
  }
};

export default cinemaReducer;
