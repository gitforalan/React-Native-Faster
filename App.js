/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {
  StackNavigator
} from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
//import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import {
  TabNav
} from "./src/page/TabNav";
import LoginPage from "./src/page/login/login";
import DetailPage from './src/page/detail/detailPage';

import {
  Provider
} from 'mobx-react'
import store from "./src/store";

//import RegPage from "./page/Login/regPage";
//import {FindAccountPage} from "./page/Login/findAccountPage"; // 路由导航

const Navigation = () => {
  return (
    <Provider rootStore={store}>
      <App/>
    </Provider>
  )
}

const App = StackNavigator({
  Login: {
    screen: LoginPage
  }, // 登录页
  Detail: {
    screen: DetailPage,
    navigationOptions:({navigation}) => ({header: null, gesturesEnable: true})
  }, // 详情页
  Main: {
    screen: TabNav,
    navigationOptions: ({
      navigation
    }) => ({
      header: null
    })
  }
}, {
  initialRouteName: 'Main',
  headerMode: 'screen',
  //headerMode: 'float',
  transitionConfig:()=>({
    // 只要修改最后的forVertical就可以实现不同的动画了。
     screenInterpolator:StackViewStyleInterpolator.forHorizontal,
   })
});

export default Navigation;