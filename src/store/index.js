
/**
 * @description 配置入口
 * @author 詹陈龙
 * @updated 2018-08-22
 */
import UserStore from './UserStore'
import HomeStore from './HomeStore'

class RootStore {
    constructor(prop) {

       // this.LoginAndRegisterStore = new LoginAndRegisterStore(this)
        this.HomeStore = new HomeStore(this)
        this.UserStore = new UserStore(this)
    }
}

export default new RootStore()