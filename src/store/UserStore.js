/**
 * @description 用户Store
 * @author 詹陈龙
 * @updated 2018-08-20
 */
import { observable, action } from "mobx";
import demoApi from '../api/demoApi'

export default class UserStore {
  @observable userInfo;
  @observable text;

  constructor() {
    this.userInfo = "123";
    this.text = "Hello, this is UserPage!!!";
  }

  @action
  getUserInfo=()=>{
    demoApi.getUserInfo({})
        .then((res)=>{
            console.log("success");
            console.log(res);
            this.text=res;
        })
        .catch((err)=>{
            console.log('网络请求异常')
            console.log(err);
        })
  };

  @action
  getListData = () => {
    fetch(`http://yapi.demo.qunar.com/mock/5228/record/list`)
      .then(
        action("fetchRes", res => {
          return res.json();
        })
      )
      .then(
        action("fetchSuccess", data => {
          console.log(data);
          return (this.userInfo = data);
        })
      )
      .catch(
        action("fetchError", e => {
          console.log(e.message);
        })
      );
  };
}

//const userStore = new UserStore();

//export { userStore };