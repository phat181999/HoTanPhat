import React, { Component } from 'react'

export default class Info extends Component {
    render() {
        const  { infor } = this.props;
        return (
            <div>
                <h4>{infor.taiKhoan}</h4>
                <h4>{infor.matKhau}</h4>
                <h4>{infor.hoTen}</h4>
                <h4>{infor.email}</h4>
                <h1>dasd</h1>
            </div>
        )
    }
}
