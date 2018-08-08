import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import { SMALLEST_BORDER_WIDTH } from '../../lib/platform';
import { Button } from '../Button/Button';
import { STColor } from '../../share/styles';
import images from '../../assests/images';
import Line from '../Home/Line';

class AboutView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.aboutWrap}>
                <Image style={styles.image} source={images.loginLogo} />
                <Text style={styles.version}>Current version number: 1.1.3</Text>
                <View style={styles.line}></View>
            <Text style={styles.detail}>The details of the company(introduction）</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    aboutWrap: {
        flex: 1,
        backgroundColor: 'white',
    },
    image: {
        width: 237,
        height: 68,
        alignSelf:'center',
        marginTop:36,
    },
    version: {
        fontSize: 16,
        color: STColor.FONT_TITLE_COLOR,
        paddingTop: 8,
        paddingBottom: 32,
        alignSelf:'center',
    },
    line: {
        paddingHorizontal: 14,
        borderBottomWidth: SMALLEST_BORDER_WIDTH,
        borderBottomColor: STColor.LINE_COLOR,
        marginHorizontal: 12,
    },
    detail:{
        color:STColor.FONT_LABEL_COLOR,
        fontSize:16,
        paddingTop:18,
        alignSelf:'center',
    },
});

function mapStateTopProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateTopProps, mapDispatchToProps)(AboutView);
