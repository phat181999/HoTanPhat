import * as ActionType from "./../constants/contants";
import Axios from "axios";

export const getTooFilmAPI = id => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`
    })
      .then(result => {
        dispatch({
          type: ActionType.HOME_TOOL_FILM,
          data: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
