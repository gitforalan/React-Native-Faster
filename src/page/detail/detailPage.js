/**
 * @description 详情页
 * https://github.com/facebook/react-native
 * @author 詹陈龙
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './../../conponents/Header'

export default class App extends Component {
    static navigationOptions = ({navigation,screenProps}) => ({
        // 这里面的属性和App.js的navigationOptions是一样的。
        //        headerTitle:navigation.state.params?navigation.state.params.headerTitle:'Detail1',
        headerTitle:'入库单列表',
        headerTitleStyle:{fontWeight: 'normal', fontSize:16, textAlign:'center',flex: 1,color:'#ffffff'}, //剧中
        headerRight:(
          <Text style={{color:'gray',marginRight:20}} onPress={()=>navigation.state.params?navigation.state.params.navigatePress():null}>我的</Text>
        ),
        headerStyle:{
          backgroundColor:'#ff696b'
        },
        headerBackTitle:"首页",
        
        gestureResponseDistance:{horizontal:300},

    });



  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <Text style={styles.welcome}>
          详情页
        </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});
