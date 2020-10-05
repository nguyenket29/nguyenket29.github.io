import React, { Component } from 'react'
import TableRow from './TableRow';

export default class TableData extends Component {
    deleteButtonClick = (idUser) => {
        // console.log(idUser);
        this.props.deleteUser(idUser);
    }

    mappingData = () =>  this.props.dataUserProps.map((value,key) => (
        <TableRow 
        deleteButtonClick = {(idUser) => this.deleteButtonClick(idUser)}
        changeEditUserStatus={() => this.props.changeEditUserStatus()}
        editFunctionClick={(user) => this.props.editFunction(value)}
        stt={key}
        key={key}
        id = {value.id}
        use={value.name} 
        phone={value.tel}
        permiss={value.Permission}/>
    ))

    
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>SĐT</th>
                        <th>Quyền</th>
                        <th>Lựa chọn</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.mappingData()}
                    </tbody>
                </table>
            </div>

        )
    }
}
