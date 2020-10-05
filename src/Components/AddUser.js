import React, { Component } from 'react';

export default class Add_user extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            name:"",
            tel:"",
            Permission:""
        }
    }

    isChange = (event) => {
        const name =event.target.name;
        const value =event.target.value;
        this.setState({
            [name]:value
        })
    }

    checkStatus = () => {
        if(this.props.showForm === true){
            return (
                <div className="col">
                    <form>
                        <div className="card text-left mb-3 mt-2">
                            <div className="card-header">Thêm Mới</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.isChange(event)} name="name" className="form-control" placeholder="Tên User" />
                                </div>
                                
                                <div className="form-group">
                                    <input type="text" onChange={(event) => this.isChange(event)} name="tel" className="form-control" placeholder="Số Điện Thoại" />
                                </div>  

                                <div className="form-group">
                                    <select className="form-control" onChange={(event) => this.isChange(event)} name="Permission" id="exampleFormControlSelect1" required>
                                        <option value>Chọn quyền mặc định</option>
                                        <option value={1}>Admin</option>
                                        <option value={2}>Modrator</option>
                                        <option value={3}>Normal</option>
                                    </select>
                                </div> 

                                <div className="form-group">
                                    <input type="reset" className="btn btn-block btn-primary" onClick={(name,tel,Permission) => this.props.add(this.state.name,this.state.tel,this.state.Permission)} value="Thêm mới"/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }

    render() {
        // console.log(this.state);
        return (
            <div>
                {this.checkStatus()}
            </div>
        )
    }
}
