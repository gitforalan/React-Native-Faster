/**
 * @description demo网络请求 封装
 * @author 詹陈龙
 * @updated 2018-08-22
 */

import NetUtil from './NetUtil'


export default{
    getUserInfo1:(params)=>NetUtil.getCached('/mock/5228/record/list',params,'userInfo',true),
    getUserInfo:(params)=>NetUtil.get('/mock/5228/record/list',params),
}