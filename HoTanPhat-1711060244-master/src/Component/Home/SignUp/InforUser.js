import React, { Component } from 'react'
import Info from "./Info";
import { connect } from 'react-redux';
import * as UserSign from '../../../ShareALL/action/UserSign';
class InforUser extends Component {
    componentDidMount() {
        this.props.getInfoUser();
    }
    renderHtml = () => {
        return this.props.inforUser.map((infor) => {
            return <Info infor={infor} />
        });
    };
    render() {
        return (
            <div>
                {this.renderHtml()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        inforUser: state.inforUserReducer.inforUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getInfoUser: () => {
            dispatch(UserSign.Infor());
        }
    };
};

export default connect(mapDispatchToProps,mapStateToProps)(InforUser)



// import React, { useState, useEffect } from 'react'
// import Axios from "axios";
// import Info from "./Info";
// export default function InforUser() {
//     const [state, setState] = useState({ inforUser: [], status: true });
//     useEffect(() => {
//         //Didmount so voi class component
//         Axios({
//             method: "GET",
//             url:
//                 "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan"
//         })
//             .then(rs => {
//                 setState({
//                     inforUser: rs.data
//                 });
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }, [])
//     const renderHtml = () => {
//         return state.inforUser.map(infor => {
//             return <Info infor={infor.taiKhoan} />;
//         });
//     };
//     return (
//         <div>
//             {renderHtml()}
//             <div>
//                 <h3>d</h3>
//             </div>
//         </div>
//     )
// }
