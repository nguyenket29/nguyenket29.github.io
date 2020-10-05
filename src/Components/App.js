import React , {Component} from 'react';
import './../App.css';
import AddUser from './AddUser';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import data from './Data.json';

//ren id auto , k lặp nhau
const { v4: uuidv4 } = require('uuid');


class App extends Component {
  //truyền state cho thằng con thông qua props để check
    constructor(props) {
      super(props);
      this.state = {
          showForm:false,
          data_user:[],
          searchText:"",
          editUserStatus:false,
          userEditObject: {}
      }
    }

    componentWillMount() {
      //kiểm tra data local
      if(localStorage.getItem("UserData") === null){
        localStorage.setItem("UserData",JSON.stringify(data));
      }else{
        var tmp = JSON.parse(localStorage.getItem("UserData"));
        this.setState({
          data_user:tmp
        })
      }
    }

    changeStatus = () => {
      this.setState({
        showForm: !this.state.showForm
      })
    }

    getTextSearch = (dl) => {
      this.setState({
        searchText:dl
      })
    }

    getNewUserData = (name,tel,Permission) => {
      //đóng gói đối tượng
        var item = {};
        item.id = uuidv4();
        item.name = name;
        item.tel = tel;
        item.Permission = Permission;

        var items =this.state.data_user;
        items.push(item);
        // cập nhật lại state vào data_user
        this.setState({
          data_user:items
        })
        localStorage.setItem("UserData",JSON.stringify(items));   
    }

    editUser = (user) => {
      //  console.log("Da Ket Noi");
       this.setState({
         userEditObject:user
       })
      //  console.log(user);
    }

    changeEditUserStatus = () => {
        this.setState({
          editUserStatus: !this.state.editUserStatus
        })
    }

    getUserEditInfoApp = (info) => {
      //duyệt từng phần tử , cho đến khi trung với id phần tử trả về
      this.state.data_user.forEach((value,key) => {
        if(value.id === info.id){
          value.name = info.name;
          value.tel = info.tel;
          value.Permission = info.Permission;
        }
      })
      localStorage.setItem("UserData",JSON.stringify(this.state.data_user));
    }

    deleteUser = (idUser) => {
      var tempData = this.state.data_user;
      tempData = tempData.filter(item => item.id !== idUser);
      this.setState({
          data_user: tempData
      })

      localStorage.setItem("UserData",JSON.stringify(tempData));
    }
    
    render(){
      // localStorage.setItem("UserData",JSON.stringify(data));
      //khai báo mảng trung gian , để chứ kq tìm kiếm do kq có nh kq gần giống nhau về tên ....
      var result = [];
      //tìm trong mảng data_user
      this.state.data_user.forEach((item) => {
        if(item.name.indexOf(this.state.searchText) !== -1){
            //đẩy vào mảng result
            result.push(item);
        }
      })
      // console.log(result);
      return (
        <div className="App">
          <Header/>
          <div className="searchForm">
              <div className="container">
                  <div className="row">
                      <Search 
                      getUserEditInfoApp = {(info) => this.getUserEditInfoApp(info)}
                      userEditObject={this.state.userEditObject}
                      changeEditUserStatus = {() => this.changeEditUserStatus()} 
                      editUserStatus={this.state.editUserStatus}
                      connect={() => this.changeStatus()}
                      showbtn={this.state.showForm}
                      checkCollectProps={(dl) => this.getTextSearch(dl)}/>

                      <TableData 
                      deleteUser = {(idUser) => this.deleteUser(idUser)}
                      changeEditUserStatus = {() => this.changeEditUserStatus()}
                      dataUserProps={result} 
                      editFunction={(user) => this.editUser(user)}/>

                      <AddUser 
                      showForm={this.state.showForm} 
                      add={(name,tel,Permission) => this.getNewUserData(name,tel,Permission)} />
                  </div>
              </div>
          </div>
        </div>
      );
    }
}

export default App;
