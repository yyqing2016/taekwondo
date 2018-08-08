import React from 'react'
import {View,StyleSheet} from 'react-native'
import { SMALLEST_BORDER_WIDTH } from '../../lib/platform';
import { STColor } from '../../share/styles';



export default class Line extends React.Component{




    render(){
        return<View style={styles.line}></View>
    }
}

const styles = StyleSheet.create({
    line:{
        // flexDirection:'row',
        height:1,
        flex:1,
        borderBottomWidth:SMALLEST_BORDER_WIDTH,
        borderBottomColor:STColor.LINE_COLOR,
        marginVertical:4,
    }
})