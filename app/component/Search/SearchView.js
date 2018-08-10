import React, { Component } from 'react';

import { View, StyleSheet, Text, Modal, TouchableHighlight, Image } from 'react-native';

import { connect } from 'react-redux';
import { SCREEN_WIDTH, SCREEN_HEIGHT, SMALLEST_BORDER_WIDTH } from '../../../lib/platform';
import images from '../../../assests/images';
import TModalView from '../TModal/TModalView';
import { TaekwondoColor } from '../../../share/styles';

class SearchView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true
        }
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <TModalView>
                <View style={styles.detailContent}>
                    <Text style={styles.title}>Welcome  Kylie Wong</Text>
                </View>
                <View style={[styles.flexRow, styles.infoWrap]}>
                    <Image style={styles.notice} source={images.notice} />
                    <Text style={styles.fontBlackBold}>Apri, 2018 -</Text>
                    <View style={[styles.flexRow,styles.subscriptView]} >
                        <Text style={styles.fontBlackBold}>Unused Classes</Text>
                        <Text style={styles.fontRed}>2</Text>
                    </View>
                    <View style={[styles.flexRow,styles.subscriptView]}>
                        <Text style={styles.fontBlackBold}>Unused Classes</Text>
                        <Text style={styles.fontRed}>3</Text>
                    </View>
                </View>
                <View style={styles.avatarBigWrap}>
                    <Image style={styles.avatarBig} source={images.avatar3} />
                    <View style={styles.flexRow}>
                        <Image style={styles.medal} source={images.medal} />
                        <Text style={styles.name}>Black Belt</Text>
                    </View>
                </View>
                <View style={[styles.flexRow,styles.detailWrap]}>
                    <View style={styles.timeWrap}>
                        <View style={styles.flexRow}>
                            <Image style={styles.yesCircle} source={images.yesCircle} />
                            <Text style={styles.fontBlackBig}>Checked in</Text>
                        </View>
                        <View style={[styles.flexRow]}>
                            <Text style={styles.fontRedBig}>4:30 - 5:30</Text>
                            <Text style={styles.fontBlackMedium}>Regular</Text>
                        </View>
                    </View>
                    <View style={styles.avatarWrap}>
                        <Image style={styles.avatar} source={images.avatar1} />
                        <Text style={styles.fontBlack}>Master Billy Copy</Text>
                    </View>
                </View>
                <View  style={[styles.flexRow,styles.lastWrap]}>
                    <Image style={styles.calendar} source={images.calendar}></Image>
                    <Text style={styles.fontLabel}>3:00PM - 6:00PM  Aug 1, 2018</Text>
                    <Text style={[styles.fontLabel,styles.lastFont]}>Promot Test</Text>
                </View>
            </TModalView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        paddingVertical: 13,
        textAlign: 'center',
        fontSize: 12,
        color: TaekwondoColor.FONT_COLOR,
        fontWeight: '800',
        borderBottomColor: TaekwondoColor.LINE_COLOR,
        borderBottomWidth: SMALLEST_BORDER_WIDTH,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    },
    fontBlack: {
        color: TaekwondoColor.FONT_COLOR,
        fontSize: 9,
    },
    fontBlackBold: {
        color: TaekwondoColor.FONT_COLOR,
        fontSize: 9,
        fontWeight: '800'
    },
    fontBlackMedium: {
        color: TaekwondoColor.FONT_COLOR,
        fontSize: 12,
    },
    fontBlackBig: {
        color: TaekwondoColor.FONT_COLOR,
        fontSize: 14,
    },
    fontRed: {
        color: TaekwondoColor.LIGHR_RED,
        fontSize: 9,
        position:'absolute',
        top:0,
        right:0,
    },
    fontRedBig: {
        color: TaekwondoColor.LIGHR_RED,
        fontSize: 12,
        marginRight:13,
    },
    fontLabel: {
        color: TaekwondoColor.FONT_LABEL,
        fontSize: 9,
        fontWeight: '800',
    },
    name: {
        color: 'white',
        fontSize: 10,
    },
    notice: {
        width: 13,
        height: 13,
        marginRight: 7,
    },
    medal: {
        width: 10,
        height: 13,
        marginRight: 4,
    },
    yesCircle: {
        width: 15,
        height: 15,
        marginRight: 7,
    },
    avatarBig: {
        width: 46,
        height: 46,
        borderRadius: 23,
        marginBottom: 9,
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    calendar: {
        width: 13,
        height: 12,
        marginRight: 9,
    },
    infoWrap: {
        height: 40,
    },
    avatarBigWrap: {
        height: 88,
        backgroundColor:TaekwondoColor.TITLE_BG_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailWrap:{
        height: 70,
        borderBottomColor: TaekwondoColor.LINE_COLOR,
        borderBottomWidth: SMALLEST_BORDER_WIDTH,
    },
    lastWrap:{
        height:30,
    },
    lastFont:{
        marginLeft: 20,
    },
    avatarWrap:{
        marginLeft:57,
        alignItems: 'center',
    },
    timeWrap:{
        alignItems:'flex-start'
    },
    subscriptView:{
        position:'relative',
        paddingRight:6,
        height:22,
        marginLeft:12,
    },



});

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchView);
