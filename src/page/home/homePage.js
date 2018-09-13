/**
 * @description 首页
 * https://github.com/facebook/react-native
 * @author 詹陈龙
 */

import React, { Component } from 'react';


import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

import { Button } from 'antd-mobile-rn';

//使用mobx
//import { connect } from "mobx-react";
import { observer, inject } from "mobx-react";


var Dimensions = require('Dimensions');
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

var {width} = Dimensions.get('window');

//定义一些全局的变量
var cols = 3;
var boxW = width/3;

@inject('rootStore')
@observer //观察该组件，使该组件能够响应mobx的变化
export default class App extends Component {

  constructor(props) {
    super(props);
    this.store = this.props.rootStore.HomeStore; //通过props来导入访问已注入的store
  }

  render() {
    return (
      
      // <View style={styles.container}>
        <ScrollView style={{flex:1,backgroundColor:'#ffffff'}}>
        <View style={styles.header}>
          <Image resizeMode="contain" source={require("../../images/QRscanner.png")} style={styles.scaner} />

          <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}}
        style={{width: 80, height: 80,borderRadius:60,borderWidth:3,borderColor:'#EFEFEF'}} />
          <View style={styles.rightTitle}>
            <Text style={styles.userName}>张三</Text>
            <Text style={{marginTop:2,fontSize:12,color:'#ffffff'}}>所属部门：养生研发部</Text>
            <Text style={{marginTop:2,fontSize:12,color:'#ffffff'}}>所属项目：养生研发部</Text>
          </View>
        </View>
        
        <View style={{justifyContent: 'space-between',flexDirection:'row',padding:10,borderColor:'#e4e4e4',borderWidth:1,backgroundColor:'#ffffff'}}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image resizeMode="contain" source={require("../../images/speaker.png")} style={{width:14,height:14}} />
            <Text style={{marginTop:2,fontSize:12}}>【消息提醒】物料入库清单有一个待审批{boxW}</Text>
          </View>
          <Image resizeMode="contain" source={require("../../images/cell_arrow.png")} style={{width:14,height:14}} />
        </View>
        <View style={{backgroundColor:'#e4e4e4', height:10,}}>
        </View>
        <View style={{flexDirection:'row',flexWrap: 'wrap',backgroundColor:'#ffffff',flex: 1}}>
            <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={
                      () => {
                          this.props.navigation.navigate('Detail')
                          //this.store.plus()
                      }
                  }>
              <View style={{width:boxW,height:boxW,borderRightWidth:1,borderBottomWidth:1,alignItems:'center', justifyContent:'center', borderColor:'#e4e4e4'}}>
                <Image resizeMode="contain" source={require("../../images/iconfont-riqi.png")} style={{width:35,height:35}} />
                <Text style={{marginTop:2,fontSize:12,marginTop:10}}>入库</Text>
              </View>
            </TouchableOpacity>
            <View style={{width:boxW,height:boxW,borderRightWidth:1,borderBottomWidth:1,alignItems:'center', justifyContent:'center', borderColor:'#e4e4e4'}}>
              <Image resizeMode="contain" source={require("../../images/iconfont-shop.png")} style={{width:35,height:35}} />
              <Text style={{marginTop:2,fontSize:12,marginTop:10}}>出库</Text>
            </View>
            <View style={{width:boxW,height:boxW,borderRightWidth:1,borderBottomWidth:1,alignItems:'center', justifyContent:'center', borderColor:'#e4e4e4'}}>
              <Image resizeMode="contain" source={require("../../images/trash.png")} style={{width:35,height:35}} />
              <Text style={{marginTop:2,fontSize:12,marginTop:10}}>减损/报废</Text>
            </View>
            <View style={{width:boxW,height:boxW,borderRightWidth:1,borderBottomWidth:1,alignItems:'center', justifyContent:'center', borderColor:'#e4e4e4'}}>
              <Image resizeMode="contain" source={require("../../images/trash.png")} style={{width:35,height:35}} />
              <Text style={{marginTop:2,fontSize:12,marginTop:10}}>减损/报废</Text>
            </View>

        </View>
        {/* <View style={{}}>
            <Button type='primary' size='small'>确认</Button>
        </View> */}

      </ScrollView>
      // </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#e4e4e4',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  scaner:{
    width:30,
    height:30,
    position:'absolute',
    top:20,
    right:15,
  },
  header:{
      
      padding: 20,
      backgroundColor:'#ff696b',
      alignItems: 'center',
      flexDirection: 'row',

  },
  rightTitle:{
    marginLeft: 5,

  },userName:{
    color:'#ffffff',
    fontSize:20
  }
});
