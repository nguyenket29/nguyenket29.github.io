import React, { Component } from 'react'

export default class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name:this.props.userEditObject.name,
            tel:this.props.userEditObject.tel,
            Permission:this.props.userEditObject.Permission
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    
    saveBtn = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.Permission = this.state.Permission;
        // console.log(info.name);
        this.props.getUserEditInfo(info);
        //check status form
        this.props.changeEditUserStatus();
    }

    render() {
        return (
            <div className="col-6 offset-3">
                <form>
                    <div className="card text-left bg-warning mb-3 mt-2">
                        <div className="card-header text-center">Sửa Thông Tin User</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.name} type="text" name="name" className="form-control" placeholder="Tên User" />
                            </div>
                            
                            <div className="form-group">
                                <input onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.tel} type="text" name="tel" className="form-control" placeholder="Số Điện Thoại" />
                            </div>  

                            <div className="form-group">
                                <select onChange={(event) => this.isChange(event)} defaultValue={this.props.userEditObject.Permission} className="form-control" name="Permission" id="exampleFormControlSelect1" required>
                                    <option value>Chọn quyền mặc định</option>
                                    <option value={1}>Admin</option>
                                    <option value={2}>Modrator</option>
                                    <option value={3}>Normal</option>
                                </select>
                            </div> 

                            <div className="form-group">
                                <input 
                                type="button" 
                                className="btn btn-block btn-primary" 
                                onClick={() => this.saveBtn()}
                                value="Lưu"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
