/**
 * @description 搜索框
 * @author 詹陈龙
 * @updated 2018-08-22
 */
import React,{Component} from 'react';
import { View ,TextInput,Image,TouchableOpacity,Text} from 'react-native';

export default class SearchBar extends Component{

    constructor(props) {
        super(props);
        this.state={

        }
    }



    render(){
        return(
            <View style={{backgroundColor:'#e4e4e4',flexDirection:'row',paddingTop:5,paddingBottom:5,paddingLeft:10,paddingRight:10}}>
                <View style={{flexDirection:'row',alignItems:'center',flex:1,}}>
                <TextInput
                            underlineColorAndroid='transparent'
                            style={{height: 30,backgroundColor:'#ffffff', borderColor: 'gray', borderWidth: 0,minWidth:120,textAlign:'left',fontSize:12,paddingTop:0,paddingBottom:0,paddingLeft:10,flex:1,borderTopLeftRadius:40,borderBottomLeftRadius:40}}
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            placeholder="名称/单号/库房"
                            />
                    <TouchableOpacity
                        onPress={()=>{}}>
                        <View style={{backgroundColor:'#ffffff',width:50,height:30, alignItems:'center',backgroundColor:'#ff696b',justifyContent:'center',borderTopRightRadius:40,borderBottomRightRadius:40}}>
                            <Image style={{width:15,width:15}} resizeMode="contain"  source={require('../images/search.png')}  />
                        </View>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity
                    onPress={()=>{}}>
                    <View style={{backgroundColor:'#ffffff',width:60,height:30,borderRadius:30,marginLeft:10,justifyContent:'center',alignItems:'center'}}>
                        <Text>筛选</Text>
                    </View>
                </TouchableOpacity>

            </View>
        );
    }
}