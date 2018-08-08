import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { STColor } from '../../share/styles';

class HelpView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.helpWrap}>
            <Text style={styles.detail}>The guide of the APP</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    helpWrap: {
        flex: 1,
        backgroundColor: 'white',
    },
    detail:{
        color:STColor.FONT_LABEL_COLOR,
        fontSize:16,
        paddingTop:18,
        textAlign:'right',
        paddingHorizontal:16,
        paddingVertical:20,
    },
});

function mapStateTopProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateTopProps, mapDispatchToProps)(HelpView);
