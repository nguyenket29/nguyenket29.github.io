import React, { Component } from 'react'

export default class TableRow extends Component {
    permissionShow = () => {
        if(this.props.permiss === 1){return "Admin";}
        else if(this.props.permiss === 2){return "Moderater";}
        else {return "Normal User";}
    }

    editClick = () => {
        this.props.editFunctionClick();
        this.props.changeEditUserStatus();
    }

    deleteButtonClick = (idUser) => {
        this.props.deleteButtonClick(idUser);
    }

    render() {
        return (
            <tr>
                <td >{this.props.stt + 1}</td>
                <td>{this.props.use}</td>
                <td>{this.props.phone}</td>
                <td>{this.permissionShow()}</td>
                <td>
                <div className="btn-group">
                    <div className="btn btn-warning" onClick={() => this.editClick()}><i className="fa fa-edit">Sửa</i></div>
                    <div className="btn btn-danger"><i className="fa fa-delete" onClick={(idUser) => this.deleteButtonClick(this.props.id)}>Xóa</i></div>
                </div>
                </td>
            </tr>
        )
    }
}
