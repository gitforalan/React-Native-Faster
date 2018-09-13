/**
 * @description 个人中心
 * https://github.com/facebook/react-native
 * @author 詹陈龙
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

//使用mobx
import { observer, inject } from "mobx-react";

import TextImageWidget from '../../conponents/TextImageWidget';


import TextTipsWidget from '../../conponents/TextTipWidget';

import TextInputWidget from '../../conponents/TextInputWidget.js'; 

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

@inject('rootStore')
@observer //观察该组件，使该组件能够响应mobx的变化
export default class App extends Component {


  componentDidMount(){
    this.props.rootStore.UserStore.getUserInfo();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{padding:12,backgroundColor:'#ff696b'}}>
          <Text style={styles.title}>
            个人中心
          </Text>
        </View>
        <TextImageWidget
          title='头像' />
        <TextTipsWidget
          title='性别'
          placeholder='请选择性别' />

         <TextInputWidget
          title='联系方式'
          placeholder="请完善联系电话"
          />
        <TouchableOpacity
          style={{alignItems: 'center',marginTop:20}}
          onPress={()=>{}}>
            <View style={styles.logoutBtn}>
              <Text>退出登录</Text>
            </View>
        </TouchableOpacity>

        {/* <View style={{}}>
          <Text>{JSON.stringify(this.props.rootStore.UserStore.text)}</Text>
        </View> */}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop:20, //去除状态栏图标
    backgroundColor: '#ffffff',
  },

  title: {
    fontSize: 16,
    textAlign: 'center',
    color:"#ffffff"
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  logoutBtn:{
    backgroundColor:'#e4e4e4',
    width:180,
    height:30,
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
});
