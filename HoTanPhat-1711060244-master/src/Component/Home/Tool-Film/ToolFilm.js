// import React, { Component } from 'react'
// import Select from '@material-ui/core/Select';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import Button from '@material-ui/core/Button';
// import FormControl from '@material-ui/core/FormControl';
// import Container from '@material-ui/core/Container';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import * as action from '../../../ShareALL/action';

// class ToolFilm extends Component {
//   componentDidMount() {
//     let id = this.props.match.params.id;
//     this.props.getDetail(id);
//   }
//   renderTable = () => {
//     const { movie } = this.props;
//     if (movie.lichChieu) {
//       return movie.lichChieu.map((item) => {
//         <>
//           <FormControl key={item.maLichChieu}>
//             <InputLabel id="demo-simple-select-label">Chọn Phim</InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//             >
//               <MenuItem key={item.maPhim} value={item.tenPhim}>{item.tenPhim}</MenuItem>
//             </Select>
//           </FormControl>

//           <FormControl key={item.maLichChieu}>
//             <InputLabel id="demo-simple-select-label">Chọn Cụm Rạp</InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//             >
//               <MenuItem value={item.thongTinRap.tenCumRap}>{item.thongTinRap.tenCumRap}</MenuItem>
//             </Select>
//           </FormControl>
//           <FormControl key={item.maLichChieu}>
//             <InputLabel id="demo-simple-select-label">Chọn Ngày</InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//             >
//               <MenuItem value={new Date(item.ngayChieuGioChieu).toLocaleDateString()}>{new Date(item.ngayChieuGioChieu).toLocaleDateString()}</MenuItem>
//             </Select>
//           </FormControl>
//           <FormControl key={item.maLichChieu}>
//             <InputLabel id="demo-simple-select-label">Chọn Giờ</InputLabel>
//             <Select
//               labelId="demo-simple-select-label"
//               id="demo-simple-select"
//             >
//               <MenuItem value={new Date(item.ngayChieuGioChieu).toLocaleDateString()}>{new Date(item.ngayChieuGioChieu).toLocaleTimeString()}</MenuItem>
//             </Select>
//             <Link to={`/buyticket/${item.maLichChieu}`}>
//               <Button>Mua Vé</Button>
//             </Link>
//           </FormControl>
//         </>
//       })
//     }
//   }
//   render() {
//     return (
//       <Container>
//         {this.renderTable()}
//       </Container>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     movie: state.movieReducer.detailMovie
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getDetail: (id) => {
//       dispatch(action.actDetailMovie(id));
//     }

//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ToolFilm);
