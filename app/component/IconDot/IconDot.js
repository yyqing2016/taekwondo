import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { STColor } from '../../share/styles';


export default class IconDot extends React.Component {


    render() {
        return <View style={[this.props && !!this.props.color && this.props.color === 'orange'
            ? styles.orangeDot : styles.greenDot,
        { width: this.props.size ? this.props.size : 8, },
        { height: this.props.size ? this.props.size : 8, },
        { borderRadius: this.props.size / 2 ? this.props.size : 4, },
        ]}
        >
        </View>
    }
}

const styles = StyleSheet.create({
    greenDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: STColor.DOT_GREEN_COLOR
    },
    orangeDot: {
        width: 8,
        height: 8,
        backgroundColor: STColor.DOT_ORANGE_COLOR,
        borderRadius: 4,
    },
})

