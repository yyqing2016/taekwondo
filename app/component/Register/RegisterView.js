import React, { Component } from 'react';

import { View, Text, SafeAreaView, TextInput, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { connect } from 'react-redux';
import { LS } from '../../locales/localized-strings';
import { STColor } from '../../share/styles';
import images from '../../assests/images';
import BasisPageHeard from '../BasisPageHeard/BasisPageHeard';
import { Button } from '../Button/Button';

class RegisterView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNum: '',
            vcode: '',
            name: '',
            password: '',
            confirmPassword: ''
        };
    }

    doRegister() {
        let args = {
            phoneNum: this.state.phoneNum,
            vcode: this.state.vcode,
            name: this.state.name,
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
            <View style={styles.registerWrap}>
                <BasisPageHeard />
                <View style={styles.loginImages}>
                    <Image style={styles.headerImage} source={images.headImage}></Image>
                </View>

                <ScrollView keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false} >
                    <TextInput
                        placeholderTextColor={STColor.INPUT_PLEACEHOLDER_COLOR}
                        placeholder={LS.t.register.placeholder.phoneNum}
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
                        placeholder={LS.t.register.placeholder.name}
                        style={styles.input}
                        value={this.state.name}
                        underlineColorAndroid={'transparent'}
                        onChangeText={(name) => this.setStateValue("name", name)}
                    />
                    <TextInput
                        placeholderTextColor={STColor.INPUT_PLEACEHOLDER_COLOR}
                        placeholder={LS.t.register.placeholder.password}
                        style={styles.input}
                        value={this.state.password}
                        underlineColorAndroid={'transparent'}
                        secureTextEntry
                        onChangeText={(password) => this.setStateValue("password", password)}
                    />
                    <TextInput
                        placeholderTextColor={STColor.INPUT_PLEACEHOLDER_COLOR}
                        placeholder={LS.t.register.placeholder.confirmPassword}
                        style={styles.input}
                        value={this.state.confirmPassword}
                        underlineColorAndroid={'transparent'}
                        secureTextEntry
                        onChangeText={(confirmPassword) => this.setStateValue("confirmPassword", confirmPassword)}
                    />
                    <Text style={styles.tip}>
                        {LS.t.register.label.registerTip}
                    </Text>
                    <Text style={styles.linkText}>
                        {LS.t.register.link.termsAndConditions}
                    </Text>
                    <Button size={17} wrap={styles.buttonRegister} full title={LS.t.register.button.register} click={this.doRegister.bind(this)} />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    registerWrap: {
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor: 'white',
    },
    input: {
        textAlign: 'right',
        borderBottomWidth: 1,
        borderBottomColor: STColor.INPUT_LINE_COLOR,
        marginTop: 20,
        height: 42,
        textAlignVertical: "bottom",
        fontSize: 15,
    },
    vcode: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 15,
    },
    linkTextWrap: {
        marginTop: 42,
        borderBottomWidth: 1,
        borderBottomColor: STColor.UNDER_LINE_COLOR
    },
    linkText: {
        color: STColor.MAIN_GREEN,
        textAlign: 'center',
        textDecorationLine: "underline"
    },
    buttonRegister: {
        marginBottom: 18,
        marginTop: 64,
    },
    buttonSendVCode: {
        paddingHorizontal: 20,
        height: 42,
    },
    loginImages: {
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: 'wrap',
    },
    headerImage: {
        width: 88,
        height: 88,
        // borderWidth:1,
    },
    tip: {
        textAlign: 'center',
        marginTop: 30,
    },
    vcodeInput: {
        marginTop: 20,
        flexDirection: 'row',
        height: 42,
        alignItems: 'flex-end'
    }
});

function mapStateTopProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateTopProps, mapDispatchToProps)(RegisterView);
