/**
 * NetUitl 网络请求的封装
 * @author 詹陈龙
 * @date 2018-08-17 
 * 
 */
'use strict';
// import React, {
//   Component,
// } from 'react-native';

import { AsyncStorage } from 'react-native';

import React, { Component } from 'react';

import {baseUrl} from '../config/config';

import { Button, Toast, WhiteSpace, WingBlank } from 'antd-mobile-rn';

class NetUitl extends React.Component {

  //post请求
  /**
  *url :请求地址
  *data:参数
  *callback:回调函数 返回promise
  */
  static  postFrom(url, data) {
      var fetchOptions = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body:'data='+data+''//这里我参数只有一个data,大家可以还有更多的参数
      };

    //   fetch(url, fetchOptions)
    //   .then((response) => response.text())
    //   .then((responseText) => {
    //     callback(JSON.parse(responseText));
    //   }).done();

      return new Promise(function (resolve, reject) {
        url=baseUrl+url;
        fetch(url, fetchOptions)
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({status:response.status})
                }
            })
            .then((response) => {
                resolve(response);
            })
            .catch((err)=> {
              reject({status:-1});
            })
      })
  

    }
  /**
  *url :请求地址
  *data:参数(Json对象)
  *callback:回调函数
  */
static postJson (url, data, callback) {
    var fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        //json形式
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    // fetch(url, fetchOptions)
    //     .then((response) => response.text())
    //     .then((responseText) => {
    //     callback(JSON.parse(responseText));
    //     }).done();


        return new Promise(function (resolve, reject) {
            url=baseUrl+url;
            fetch(url, fetchOptions)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        reject({status:response.status})
                    }
                })
                .then((response) => {
                    resolve(response);
                })
                .catch((err)=> {
                  reject({status:-1});
                })
          })

    }

  //get请求
  /**
  *url :请求地址
  *callback:回调函数
  */

  static  get(url, params) {
    Toast.loading('Loading...', 0, ()=>{}, false);

    return new Promise(function (resolve, reject) {

            //拼接url
            if (params) {
                let paramsArray = [];
                //encodeURIComponent
                Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
                if (url.search(/\?/) === -1) {
                    url += '?' + paramsArray.join('&')
                } else {
                    url += '&' + paramsArray.join('&')
                }
            }
            console.log("到这里了");
            url=baseUrl+url;
            fetch(url)
            .then((response) => {
                Toast.hide();
                if (response.ok) {
                    return response.json();
                } else {
                    reject({status:response.status})
                }
            })
            .then((response) => {
                Toast.hide();
                resolve(response);
            })
            .catch((err)=> {
              Toast.hide();
              Toast.offline('Network connection failed !!!', 3, ()=>{}, false);
              reject({status:-1});
            })
        })
    }

  //get请求 带缓存
  /**
  *url :请求地址
  *callback:回调函数
  */

static async getCached(url,params,key,cached = true) {
    let cachedData = await AsyncStorage.getItem(key);
    return new Promise(function (resolve, reject) {
            
            if (cachedData) {
                //alert('数据来自本地');
                console.log('数据来自本地');
                let jsonData = JSON.parse(cachedData);
                resolve(jsonData);
              } else {
                console.log("数据来自网络");

                //拼接url
                if (params) {
                    let paramsArray = [];
                    //encodeURIComponent
                    Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
                    if (url.search(/\?/) === -1) {
                        url += '?' + paramsArray.join('&')
                    } else {
                        url += '&' + paramsArray.join('&')
                    }
                }
                url=baseUrl+url;
                fetch(url)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        reject({status:response.status})
                    }
                })
                .then((response) => {
                    
                    let responseStr=JSON.stringify(response);
                    AsyncStorage.setItem(key, responseStr);

                    resolve(response);

                })
                .catch((err)=> {
                    reject({status:-1});
                })
              }



        })
    }

}

module.exports = NetUitl;