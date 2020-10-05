import React, { Component } from 'react'
import EditUser from './EditUser';
//làm tn để btn trong component a tương tác được với form ở component khác được
export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: "",
            userObj:{}
        }
    }
    

    showBtn = () => {
        if(this.props.showbtn === true){
            return <div className="btn btn-outline-primary btn-block" onClick={() => this.props.connect()}>Close</div>;
        }else {
            return <div className="btn btn-outline-info btn-block" onClick={() => this.props.connect()}>Add</div>;
        }
    }

    isChange = (event) => {
        // console.log(event.target.value);
        this.setState({
            tempValue:event.target.value
        })
        //gọi luôn bố để tìm dữ liệu
        this.props.checkCollectProps(this.state.tempValue);
    }

    getUserEditInfo = (info) => {
        this.setState({
            userObj:info
        })
        this.props.getUserEditInfoApp(info);
    }



    checkShowEditUser = () => {
        if(this.props.editUserStatus === true){
            return <EditUser 
            getUserEditInfo = {(info) => this.getUserEditInfo(info)}
            userEditObject={this.props.userEditObject} 
            changeEditUserStatus={() => this.props.changeEditUserStatus()}/>;
        }else {
            return;
        }
    }

    render() {
       
        return (
            <div className="col-12">
                <div className="form-group">
                    <div className="btn-group">
                        <input type="text" className="form-control" onChange ={(event) => this.isChange(event)} aria-describedby="helpId" placeholder="Nhập từ khóa tìm kiếm..." />
                        <div className="btn btn-info" onClick={(dl) => this.props.checkCollectProps(this.state.tempValue)}>Search</div>
                    </div>
                </div>
                <hr/>

                {this.showBtn()}

                <div className="row my-5">
                    {this.checkShowEditUser()}
                </div>
            </div>
        )
    }
}
