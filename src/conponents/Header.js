/**
 * @description 子页面Header
 * @author 詹陈龙
 */
import React, { PureComponent } from 'react'
import {
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    Image,
    Text,
    View,
} from 'react-native'

const {width: screenWidth, height: screenHeight} = Dimensions.get('window')

export default class NewsDetailHeader extends PureComponent {

    constructor(props) {
        super(props);
        
        this.state = {

        }
    }

    render(){
        return(
            <View style={styles.headerContainer}>
                <TouchableOpacity activeOpacity={0.8} style={{flexDirection: 'row', alignItems:'center',flex: 1}} onPress={() => this.props.navigation.goBack()} >
                    <Image source={require('./../images/i_goback.png')} resizeMode={'contain'} style={styles.headerLeftImg} />
                    <Text style={{color: 'white', fontSize: 16}}>{this.props.leftText}</Text>
                </TouchableOpacity>

                <View style={styles.headerCenterContainer}>
                    <Text numberOfLines={2} ellipsizeMode='tail' style={styles.headerCenterText}>{this.props.centerText}</Text>
                </View>

                {/* 为了让标题居中 */}
                <TouchableOpacity onPress={()=>{}} style={{height: 25,justifyContent:'center', flex: 1,alignItems:'center',flexDirection:'row'} }>

                    <Image source={require('./../images/plus.png')} resizeMode={'contain'} style={styles.headerRightImg} />
                </TouchableOpacity>
                

            </View>
        )
    }
}

NewsDetailHeader.defaultProps = {
    leftText:'返回',
    centerText:'详情页',
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        backgroundColor: '#ff696b',
        //d81e06
        // justifyContent: 'space-around',
        alignItems: 'center',
        height: 70,
        //paddingTop: 25,
    },
    headerLeftImg: {
        width:20,
        height:20,
    },
    headerCenterContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 36,
        flex: 4,
    },
    headerCenterText: {
        fontSize: 18,
        color: '#f8f8f8',
        textAlign:'center'
    },
    headerRightImg: {
        width: 25,
        height: 25,
        //marginRight: 10,
    },
})