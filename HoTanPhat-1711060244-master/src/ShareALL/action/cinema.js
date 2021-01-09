import * as ActType from "../constants/ActType";
import Axios from "axios";

export const actGetInfoMovieAPI = () => {
  return (dispatch) => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01",
    })
      .then((rs) => {
        dispatch(actGetInfoMovie(rs.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const actGetInfoMovie = (infoMovie) => {
  return {
    type: ActType.GET_INFO_MOVIE,
    data: infoMovie,
  };
};