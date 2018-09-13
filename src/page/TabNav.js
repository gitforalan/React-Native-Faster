/**
 * @description tab 配置
 * @author 詹陈龙
 */
import React from 'react';

import {
    Image,
} from 'react-native';


import {TabNavigator} from 'react-navigation';

import HomePage from './home/homePage';
import schedule from './schedule/index';
import profile from './profile/index';



export const TabNav = TabNavigator(
    {
        Home: {
            screen: HomePage,
            navigationOptions: {
                //stackNavigator的属性
                headerTitle: '首页',
                gestureResponseDistance: {horizontal: 300},
                headerBackTitle: null,
                headerStyle: {backgroundColor: '#EB3695'},//导航栏的样式
                headerTitleStyle: {//导航栏文字的样式
                    color: 'white',
                    //设置标题的大小
                    fontSize: 16,
                    //居中显示
                    alignSelf: 'center',
                },
                //tab 的属性
                tabBarLabel: '首页',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('../images/ic_home.png')}
                        style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
                ),
    
            },
        },
        Schedule: {
            screen: schedule,
            navigationOptions: {
                //stackNavigator的属性
                headerTitle: '代办审批',
                gestureResponseDistance: {horizontal: 300},
                headerBackTitle: null,
                headerStyle: {backgroundColor: '#EB3695'},//导航栏的样式
                headerTitleStyle: {//导航栏文字的样式
                    color: 'white',
                    //设置标题的大小
                    fontSize: 16,
                    //居中显示
                    alignSelf: 'center',
                },
                //tab 的属性
                tabBarLabel: '代办审批',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('../images/ic_type.png')}
                        style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
                ),
    
            },
        },
        Profile: {
            screen: profile,
            navigationOptions: {
                //stackNavigator的属性
                headerTitle: '个人中心',
                gestureResponseDistance: {horizontal: 300},
                headerBackTitle: null,
                headerStyle: {backgroundColor: '#EB3695'},//导航栏的样式
                headerTitleStyle: {//导航栏文字的样式
                    color: 'white',
                    //设置标题的大小
                    fontSize: 16,
                    //居中显示
                    alignSelf: 'center',
                },
                //tab 的属性
                tabBarLabel: '个人中心',
                tabBarIcon: ({tintColor}) => (
                    <Image
                        source={require('../images/ic_me.png')}
                        style={[{height: 24, width: 24}, {tintColor: tintColor}]}/>
                ),
    
            },
        }
    },
    {
        tabBarOptions: {
            //当前选中的tab bar的文本颜色和图标颜色
            activeTintColor: '#4BC1D2',
            //当前未选中的tab bar的文本颜色和图标颜色
            inactiveTintColor: '#000',
            //是否显示tab bar的图标，默认是false
            showIcon: true,
            //showLabel - 是否显示tab bar的文本，默认是true
            showLabel: true,
            //是否将文本转换为大小，默认是true
            upperCaseLabel: false,
            //material design中的波纹颜色(仅支持Android >= 5.0)
            pressColor: '#788493',
            //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
            pressOpacity: 0.8,
            //tab bar的样式
            style: {
                backgroundColor: '#fff',
                paddingBottom: 1,
                borderTopWidth: 0.2,
                paddingTop:1,
                borderTopColor: '#ccc',
            },
            //tab bar的文本样式
            labelStyle: {
                fontSize: 11,
                margin: 1
            },
            //tab 页指示符的样式 (tab页下面的一条线).
            indicatorStyle: {height: 0},
        },
        //tab bar的位置, 可选值： 'top' or 'bottom'
        tabBarPosition: 'bottom',
        //是否允许滑动切换tab页
        swipeEnabled: true,
        //是否在切换tab页时使用动画
        animationEnabled: false,
        //是否懒加载
        lazy: true,
        //返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
        backBehavior: 'none',
    });
