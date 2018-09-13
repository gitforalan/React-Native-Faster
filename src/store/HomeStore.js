/**
 * @description Home页面Store
 * @author 詹陈龙
 * @updated 2018-08-22
 */
import { observable, action } from "mobx";

export default class HomeStore {
  @observable text; // 注册变量，使其成为可检测的
  @observable num;

  constructor() {
    this.num = 0; // 初始化变量，可以定义默认值
    this.text = "Hello, this is homePage!!!";
  }

  @action  // 方法推荐用箭头函数的形式
  plus = () => {
    this.num += 1;
  };

  @action
  minus = () => {
    this.num -= 1;
  };
}

///const homeStore = new HomeStore(); 

//export { homeStore };