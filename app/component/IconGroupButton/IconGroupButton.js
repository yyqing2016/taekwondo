import React, { Component } from 'react'

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import { connect } from 'react-redux'
import images from '../../assests/images';
import { STColor } from '../../share/styles';

class IconGroupButtom extends Component {

    constructor(props) {
        super(props);
    }

    renderMainOperation() {
        return <View style={[styles.flexRow, styles.mainMainOperation]}>
            <TouchableOpacity activeOpacity={1} style={styles.mainMainOperationItem}>
                <Image style={styles.mainMainOperationIcon} source={images.arrive}></Image>
                <Text style={styles.mainMainOperationText}>Arrive</Text>
            </TouchableOpacity>
        </View>
    }

    render() {
        return (
            <View style={[styles.flexRow, styles.mainMainOperation]}>
                {this.props.buttonArray && this.props.buttonArray.length > 0 && this.props.buttonArray.map((item,index) => (
                    <View key={index} activeOpacity={1} style={styles.mainMainOperationItem}>
                        <TouchableOpacity onPress={item.click ? item.click : ''} style={[styles.mainMainOperationIcon]}>
                            <Image style={[styles.mainMainOperationIcon, item.iconSize ? { width: item.iconSize.w, height: item.iconSize.h } : {}]} source={images[item.icon]}></Image>
                        </TouchableOpacity>
                        <Text style={styles.mainMainOperationText}>{item.title}</Text>
                    </View>
                ))}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainMainOperation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 10,
    },

    mainMainOperationIcon: {
        width: 46,
        height: 46,
        // borderWidth: 1,
    },
    mainMainOperationItem: {
        flex: 1,
        alignItems: 'center'
    },
    mainMainOperationText: {
        color: STColor.MAIN_GREEN,
        fontSize: 13,
        paddingTop: 4,
    },



})

function mapStateTopProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}





export default connect(mapStateTopProps, mapDispatchToProps)(IconGroupButtom);
