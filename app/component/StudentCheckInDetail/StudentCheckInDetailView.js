import React, { Component } from 'react';

import { View, StyleSheet, Text, Modal, TouchableHighlight, Image } from 'react-native';

import { connect } from 'react-redux';
import { SCREEN_WIDTH, SCREEN_HEIGHT, SMALLEST_BORDER_WIDTH, SCALE } from '../../lib/platform';
import images from '../../assests/images';
import TModalView from '../TModal/TModalView';
import { TaekwondoColor } from '../../share/styles';

class StudentCheckInDetailView extends Component {
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
                    <View style={[styles.flexRow, styles.subscriptView]} >
                        <Text style={styles.fontBlackBold}>Unused Classes</Text>
                        <Text style={styles.fontRed}>2</Text>
                    </View>
                    <View style={[styles.flexRow, styles.subscriptView]}>
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
                <View style={[styles.flexRow, styles.detailWrap]}>
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
                <View style={[styles.flexRow, styles.lastWrap]}>
                    <Image style={styles.calendar} source={images.calendar}></Image>
                    <Text style={styles.fontLabel}>3:00PM - 6:00PM  Aug 1, 2018</Text>
                    <Text style={[styles.fontLabel, styles.lastFont]}>Promot Test</Text>
                </View>
            </TModalView>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        paddingVertical: 36 / SCALE,
        textAlign: 'center',
        fontSize: 36 / SCALE,
        color: TaekwondoColor.FONT_COLOR,
        fontWeight: '800',
        borderBottomColor: TaekwondoColor.LINE_COLOR,
        borderBottomWidth: SMALLEST_BORDER_WIDTH,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    fontBlack: {
        color: TaekwondoColor.FONT_COLOR,
        fontSize: 28 / SCALE,
    },
    fontBlackBold: {
        color: TaekwondoColor.FONT_COLOR,
        fontSize: 28 / SCALE,
        fontWeight: '800'
    },
    fontBlackMedium: {
        color: TaekwondoColor.FONT_COLOR,
        fontSize: 36 / SCALE,
    },
    fontBlackBig: {
        color: TaekwondoColor.FONT_COLOR,
        fontSize: 42 / SCALE,
    },
    fontRed: {
        color: TaekwondoColor.LIGHR_RED,
        fontSize: 27 / SCALE,
        position: 'absolute',
        top: 0,
        right: 0,
    },
    fontRedBig: {
        color: TaekwondoColor.LIGHR_RED,
        fontSize: 36 / SCALE,
        marginRight: 40 / SCALE,
    },
    fontLabel: {
        color: TaekwondoColor.FONT_LABEL,
        fontSize: 27 / SCALE,
        fontWeight: '800',
    },
    name: {
        color: 'white',
        fontSize: 30 / SCALE,
    },
    notice: {
        width: 40 / SCALE,
        height: 40 / SCALE,
        marginRight: 21 / SCALE,
    },
    medal: {
        width: 30 / SCALE,
        height: 40 / SCALE,
        marginRight: 12 / SCALE,
    },
    yesCircle: {
        width: 45 / SCALE,
        height: 45 / SCALE,
        marginRight: 21 / SCALE,
    },
    avatarBig: {
        width: 142 / SCALE,
        height: 142 / SCALE,
        borderRadius: 71 / SCALE,
        marginBottom: 27 / SCALE,
    },
    avatar: {
        width: 96/SCALE,
        height: 96/SCALE,
        borderRadius: 48 / SCALE,
    },
    calendar: {
        width: 39 / SCALE,
        height: 36 / SCALE,
        marginRight: 27 / SCALE,
    },
    infoWrap: {
        height: 120 / SCALE,
    },
    avatarBigWrap: {
        height: 236 / SCALE,
        backgroundColor: TaekwondoColor.TITLE_BG_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailWrap: {
        height: 210 / SCALE,
        borderBottomColor: TaekwondoColor.LINE_COLOR,
        borderBottomWidth: SMALLEST_BORDER_WIDTH,
    },
    lastWrap: {
        height: 90 / SCALE,
    },
    lastFont: {
        marginLeft: 60 / SCALE,
    },
    avatarWrap: {
        marginLeft: 171 / SCALE,
        alignItems: 'center',
    },
    timeWrap: {
        alignItems: 'flex-start'
    },
    subscriptView: {
        position: 'relative',
        paddingRight: 18 / SCALE,
        height: 66 / SCALE,
        marginLeft: 36 / SCALE,
    },



});

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentCheckInDetailView);
