import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';

import { connect } from 'react-redux';
import { STColor } from '../../share/styles';
import images from '../../assests/images';
import Button from '../Button/Button'

class QRCodeView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.qrCodeWrap}>
                <View style={styles.qrCodeImageWrap}>
                    <Image source={images.qrcode} style={styles.qrCodeImage} />
                </View>
                <Text style={styles.qrCodeText}>Please show this QR code to the passenger to scan</Text>
                <View style={styles.QRCodeButtonWrap}>
                    <Button full size={18} title="SAVE QR CODE" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    qrCodeWrap: {
        flex: 1,
        marginHorizontal: 36,
    },
    qrCodeImageWrap: {
        width: 195,
        height: 195,
        alignSelf: 'center',
        marginTop: 114,

    },
    qrCodeImage: {
        width: 195,
        height: 195,
    },
    qrCodeText: {
        fontSize: 18,
        textAlign: "center",
        marginTop: 33,
        color: STColor.FONT_TITLE_COLOR
    },
    QRCodeButtonWrap: {
        height: 54,
        marginTop: 68
    }
});

function mapStateTopProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateTopProps, mapDispatchToProps)(QRCodeView);
