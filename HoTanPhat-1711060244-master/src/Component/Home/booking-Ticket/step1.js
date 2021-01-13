import React from 'react';
import { useHistory } from 'react-router-dom';

export default function StepBooking1(props) {
    //Lọc loại ghế có trong danh sách ghế
    const typeSeat = [
        ...new Set (props.chosenMovie.danhSachGhe.map(item => item.loaiGhe))
    ];

    const initialSeat = [];

    typeSeat.forEach(function(element, index) {
      if (element === "Thuong") {
        initialSeat.push({
          type: element,
          num: 2,
          price: props.chosenMovie.danhSachGhe.find(
            item1 => item1.loaiGhe === element
          ).giaVe
        });
      } else {
        initialSeat.push({
          type: element,
          num: 0,
          price: props.chosenMovie.danhSachGhe.find(
            item1 => item1.loaiGhe === element
          ).giaVe
        });
      }
    });
  
    const [numOfSeats, setNumOfSeats] = React.useState(initialSeat);
    // const { movie } = this.props;

    const returnDetailMoviePage = () => {
      if (props.history.location.prePage) {
        props.history.push(props.history.location.prePage);
      } else {
        props.history.push("/");
      }
    };
  
    let totalCost = numOfSeats.reduce(
      (totalCost, seat) => totalCost + seat.price * seat.num,
      0
    );
  
    const changeNumTicket = (key, plus) => {
      let tempNumOfSeats = [...numOfSeats];
      if (
        (plus && tempNumOfSeats[key].num > 9) ||
        (!plus && tempNumOfSeats[key].num === 0)
      ) {
        return;
      }
      plus ? tempNumOfSeats[key].num++ : tempNumOfSeats[key].num--;
      setNumOfSeats(tempNumOfSeats);
    };
  
    //Mỗi loại vé render ra 1 hàng để chọn số lượng
    const renderTicket = () => {
      let ticketArray = [];
      for (const key in numOfSeats) {
        ticketArray.push(
          <div key={key} className="ticket row m-0 align-items-center">
            <div className="ticket__type col-7 col-md-4 ">
              <span>
                Vé{" "}
                {numOfSeats[key].type === "Thuong"
                  ? "Thường"
                  : numOfSeats[key].type}
              </span>
              <span className="ticket__price--mobile d-block d-md-none">{`${numOfSeats[
                key
              ].price.toLocaleString()} đ`}</span>
            </div>
            <div className="ticket__price col-md-4 p-0 text-center">
              <span>{`${numOfSeats[key].price.toLocaleString()} đ`}</span>
            </div>
            <div className="ticket__num col-md-4 col-5 p-0">
              <button onClick={() => changeNumTicket(key, false)}>-</button>
              <span>{numOfSeats[key].num}</span>
              <button onClick={() => changeNumTicket(key, true)}>+</button>
            </div>
          </div>
        );
      }
      return ticketArray;
    };
  const history=useHistory()
const checklogin=()=>{
  if(localStorage.getItem("user")){
    console.log("ok");
  }else{
    history.push("/signIn");
  }
}
      
    return (
        <>
      <div className="checkout-content-1 row m-0 p-0">
        <div
          className="Step-buy1-left col-3 p-0"
          style={{
            background: `url(${props.chosenMovie.thongTinPhim.hinhAnh}) no-repeat center`,
            backgroundSize: "cover",
            height:"587px",
            width:"100%"
          }}
        >
          <div className="Buy1-title">
            <div className="detail-movie__info">
              <p className="ngay-chieu">
                {props.chosenMovie.thongTinPhim.ngayChieu}
              </p>
              <p className="ten-phim">
                <span className="age-type">C13</span>
                {props.chosenMovie.thongTinPhim.tenPhim}
              </p>
              <p className="time">120 phút - 8.7 IMDb - 2D/Digital</p>
            </div>
          </div>
        </div>
        
        <div className="Step-buy1-right col-9 col-md-9">
          <div className="cinema">
            <div className="cinema__logo"></div>
            <div className="cinema__info">
              <p className="cinema__time">
                {props.chosenMovie.thongTinPhim.ngayChieu} -{" "}
                {props.chosenMovie.thongTinPhim.gioChieu} -{" "}
                {props.chosenMovie.thongTinPhim.tenRap}
              </p>
            </div>
          </div>
          <div className="tickets">{renderTicket()}</div>
          <div className="chosen-ticket d-flex justify-content-between align-items-center">
            <div className="total-cost">
              <p>TỔNG TIỀN</p>
              <p>{totalCost.toLocaleString()} đ</p>
            </div>
            {numOfSeats.reduce((countSeat, seat) => countSeat + seat.num, 0) ? (
              <div
                onClick={() => props.nextStep(2, numOfSeats)}
                className="chosen-button"
              >
                <button onClick={checklogin()}>CHỌN GHẾ</button>
              </div>
            ) : (
              <div className="chosen-button">
                <button onClick={checklogin()}>CHỌN GHẾ</button>
              </div>
            )}
          </div>
          <div className="contact">
            <p>
              Xin lưu ý, bạn không thể hủy hoặc thay đổi suất chiếu cho vé đã
              mua.
            </p>
            <div className="hotline">
              <div>
                <span className="hotline__title">HOTLINE</span>
                <span className="hotline__cost">Phí cuộc gọi 1000VND/phút</span>
              </div>
              <div>
                <span className="hotline__phone">+8455111652</span>
              </div>
            </div>
          </div>
        </div>
      </div>
          </>
    )
}
