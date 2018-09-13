/**
 * @description 带图片头像的列表Item
 * @author zcl
 */
import React, { Component } from 'react';
var {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  PixelRatio,
  Dimensions,
  TouchableOpacity
} = require('react-native')
 
 
var screenWidth = Dimensions.get('window').width;
 
 
export default class TextImageWidget extends Component{
 
    constructor(props) {
      super(props);
    }
 
  _renderRow() {
    return (
      <View style={styles.rowContainer}  >
        <TouchableOpacity
            
            onPress={()=>{}}>
                <View style={styles.row}>
                <View >
                    <Text
                        numberOfLines={1}
                        style={styles.textInputTitle} >
                        {this.props.title}
                    </Text>
                </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        
                        <Image source={require('../images/head.jpg')} style={styles.image} />
                        
                        
                        <Image style={styles.rightArrow} resizeMode="contain"  source={require('../images/cell_arrow.png')}  />
                        
                    </View>

                </View>
        </TouchableOpacity>


      </View>
    );
 
  }
 
  render() {
    return this._renderRow();
  }
}
 
const styles = StyleSheet.create({
    rowContainer: {
      backgroundColor: '#FFF',
      width:screenWidth,
      borderBottomWidth: 1 / PixelRatio.get(),
      borderColor:'#e4e4e4',//需要标色
    },
    row: {
      flexDirection: 'row',
      height: 44,
      alignItems: 'center',
      marginRight: 10,
      marginLeft: 10,
      justifyContent:'space-between'
      //paddingTop:15,

 
    },
    textInputTitle: {
      width: 80,
      fontSize: 13,
      //color: '#333',
      //backgroundColor: 'red',
    },
    textImage: {
      flex: 1,
      height: 44,// @todo should be changed if underlined
      justifyContent:'flex-end',
      flexDirection: 'row',
      alignItems: 'center',
    },
    image:{
      width:38,
      height:38,

      borderRadius: 19,
    },
    rightArrow:{
      marginLeft:5,
      width:14,
      height:14,
      alignItems: 'center',
      //backgroundColor:'red',
 
    }
 
  });
