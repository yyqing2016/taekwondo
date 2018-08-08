import React, { Component } from 'react';

import { View, Text, SafeAreaView, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { LS } from '../../locales/localized-strings';
import { STColor } from '../../share/styles';
import {Button} from '../Button/Button'
import BasisPageHeard from '../BasisPageHeard/BasisPageHeard';

class FindPasswordView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNum: '',
            password: '',
            confirmPassword: '',
            vcode: '',
        };
    }

    doLogin() {
        let args = {
            phoneNum: this.state.phoneNum,
            vcode: this.state.vcode,
            password: this.state.password,
        }
        console.log(args)
    }

    doSendVCode() {
        let args = {
            phoneNum: this.state.phoneNum
        }
        console.log(args)
    }

    setStateValue(state, value) {
        this.setState({ [state]: value })
    }

    render() {
        return (
            <View style={styles.findPasswordWrap}>
                <BasisPageHeard />
                <TextInput
                    placeholderTextColor={STColor.INPUT_PLEACEHOLDER_COLOR}
                    placeholder={LS.t.findPassword.placeholder.phoneNum}
                    style={styles.input}
                    value={this.state.phoneNum}
                    underlineColorAndroid={'transparent'}
                    onChangeText={(phoneNum) => this.setStateValue("phoneNum", phoneNum)}
                />
              <View style={styles.vcodeInput}>
                        <Button click={this.doSendVCode.bind(this)} wrap={styles.buttonSendVCode} size={15} full title={LS.t.register.button.sendVCode} />
                        <TextInput
                            placeholderTextColor={STColor.INPUT_PLEACEHOLDER_COLOR}
                            placeholder={LS.t.register.placeholder.vcode}
                            style={[styles.input, styles.vcode]}
                            value={this.state.vcode}
                            underlineColorAndroid={'transparent'}
                            onChangeText={(vcode) => this.setStateValue("vcode", vcode)}
                        />
                    </View>
                <TextInput
                    placeholderTextColor={STColor.INPUT_PLEACEHOLDER_COLOR}
                    placeholder={LS.t.findPassword.placeholder.password}
                    style={styles.input}
                    value={this.state.password}
                    underlineColorAndroid={'transparent'}
                    secureTextEntry
                    onChangeText={(password) => this.setStateValue("password", password)}
                />
                <TextInput
                    placeholderTextColor={STColor.INPUT_PLEACEHOLDER_COLOR}
                    placeholder={LS.t.findPassword.placeholder.confirmPassword}
                    style={styles.input}
                    value={this.state.confirmPassword}
                    underlineColorAndroid={'transparent'}
                    secureTextEntry
                    onChangeText={(confirmPassword) => this.setStateValue("confirmPassword", confirmPassword)}
                />
                <Button full size={17} click={this.doLogin.bind(this)} wrap={styles.buttonLogin} title={LS.t.findPassword.button.login}></Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    findPasswordWrap: {
        flex:1,
        paddingHorizontal: 30,
        backgroundColor: 'white'
    },
    input: {
        textAlign: 'right',
        borderBottomWidth: 1,
        borderBottomColor: STColor.UNDER_LINE_COLOR,
        marginTop: 20,
        // borderWidth:1,
        height: 42,
        textAlignVertical: "bottom",
        fontSize:15,
    },
    buttonLogin: {
        // backgroundColor: STColor.MAIN_GREEN,
        marginBottom: 18,
        marginTop: 64,
    },
    tip: {
        textAlign: 'center',
        marginTop: 30,
    },
    vcodeInput: {
        marginTop: 20,
        flexDirection: 'row',
        height: 42,
        alignItems: 'flex-end',
        // borderWidth:1,
    },
    buttonSendVCode: {
        paddingHorizontal: 20,
        height: 42,
    },
    vcode: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 15,
    },
});

function mapStateTopProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateTopProps, mapDispatchToProps)(FindPasswordView);
