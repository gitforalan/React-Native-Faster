/**
 * @description 审批市中心
 * https://github.com/facebook/react-native
 * @author 詹陈龙
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

import SearchBar from "../../conponents/SearchBar";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      text:'',
      list:[1,2,3,4,5]
    }
  }

  render() {


    const domList=this.state.list.map((item,index)=>{
      return(
        <View key={index} style={{}}>
              {
                index!=0?
                <View style={{height:10,backgroundColor:'#e4e4e4'}}>
                </View>:null
              }
             
           <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,borderBottomWidth:1,borderBottomColor:'#e4e4e4',alignItems:'center'}}>
              <Text>2018-04-22</Text>
              

              <TouchableOpacity
                onPress={()=>{}}>
                <View style={{width:70,height:25,alignItems:'center',justifyContent:'center',borderColor:'#ff696b',borderWidth:1,borderRadius:30}}>
                  <Text style={{fontSize:12,color:'#ff696b'}}>查看详情</Text>
                </View>
              </TouchableOpacity>

           </View>

           <View style={{padding:10,borderBottomColor:'#e4e4e4',borderBottomWidth:1}}>

              <Text style={{fontSize:12}}>入库单号：RKJG6222014</Text>
              <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                <View style={{flex:1}}>
                  <Text style={{fontSize:12}}>入库物料：晚霜</Text>
                </View>
                <View style={{flex:1}}>
                  <Text style={{fontSize:12}}>数        量：共30件</Text>
                </View>
              </View >

              <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                <View style={{flex:1}}>
                  <Text style={{fontSize:12}}>隶属部门：养生用品研发部</Text>
                </View>
                <View style={{flex:1}}>
                  <Text style={{fontSize:12}}>入库库房：1号仓</Text>
                </View>
                
              </View>

            </View>

            <View style={{flexDirection:'row',justifyContent:'flex-end',alignItems:'center',padding:10,borderBottomColor:'#e4e4e4',borderBottomWidth:1}}>
              <View style={{width:60,height:25,borderRadius:30,backgroundColor:'#e4e4e4',alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:12,}}>退回</Text>
              </View>
              <View style={{width:60,height:25,borderRadius:30,backgroundColor:'#ff696b',alignItems:'center',justifyContent:'center',marginLeft:10}}>
                <Text style={{fontSize:12,color:'#ffffff'}}>通过</Text>
              </View>
            </View>

          </View>
      );
    })

    return (
      <ScrollView style={{flex:1,backgroundColor:'#ffffff'}}>
      <View style={styles.container}>
        <View style={{padding:12,backgroundColor:'#ff696b'}}>
          <Text style={styles.title}>
            代办审批
          </Text>
        </View>

        <SearchBar />

        
        {domList}

        
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
     backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    color:"#ffffff"
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
