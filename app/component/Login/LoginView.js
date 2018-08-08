import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import { connect } from 'react-redux';
import { LS } from '../../locales/localized-strings';
import { STColor } from '../../share/styles';
import BasisPageHeard from '../BasisPageHeard/BasisPageHeard';
import { Button } from '../Button/Button';

class LoginView extends Component {
    constructor(props) {
        super(props);
    }

    doLogin() {
        console.log(this.state);
    }

    setStateValue(state, value) {
        this.setState({ [state]: value })
    }

    render() {
        const { phoneNumber , password } = this.props;
        const { navigate }  = this.props.navigation;
        return (
            <View style={styles.loginWrap}>
                <BasisPageHeard />
                <TextInput
                autoCapitalize='none'
                    placeholderTextColor={STColor.INPUT_PLEACEHOLDER_COLOR}
                    placeholder={LS.t.login.placeholder.phoneNum}
                    style={styles.input}
                    value={phoneNumber}
                    underlineColorAndroid={'transparent'}
                    onChangeText={(text) => this.props.updateProps({ phoneNumber: text })}
                />
                <TextInput
                    placeholderTextColor={STColor.INPUT_PLEACEHOLDER_COLOR}
                    placeholder={LS.t.login.placeholder.password}
                    style={styles.input}
                    value={password}
                    secureTextEntry
                    underlineColorAndroid={'transparent'}
                    onChangeText={(text) => this.props.updateProps({ password: text })}
                />
                <TouchableOpacity
                    onPress={() => {
                        this.props.navigation.navigate('FindPasswordView');
                    }}
                    style={styles.linkTextWrap}
                >
                    <Text style={styles.linkText}>
                        {LS.t.login.link.forgetPassword}
                    </Text>
                </TouchableOpacity>
                <Button
                    wrap={[styles.buttonWrap, styles.buttonLogin]}
                    size={17}
                    full
                    click={this.props.login.bind(this)}
                    title={LS.t.login.button.login}
                />
                <Button
                    wrap={styles.buttonWrap}
                    title={LS.t.login.button.register}
                    size={17}
                    click={this.props.navigation.navigate.bind(this, 'RegisterView')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginWrap: {
        flex: 1,
        paddingHorizontal: 30,
        backgroundColor: 'white',
    },
    input: {
        textAlign: 'right',
        borderBottomWidth: 1,
        borderBottomColor: STColor.INPUT_LINE_COLOR,
        marginTop: 32,
        // borderWidth: 1,
        fontSize: 15,
        height: 42,
    },
    linkTextWrap: {
        marginTop: 42,
    },
    linkText: {
        marginTop: 42,
        color: STColor.MAIN_GREEN,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    buttonLogin: {
        marginTop: 64,
        marginBottom: 18,
    },
});

function mapStateTopProps(state) {
    const { userName , password } = state.login;
    const { login } = state.app;
    return {userName , password , login};
}

function mapDispatchToProps(dispatch) {
    return {
        login(params){
            dispatch({
                type: 'login/login',
                payload: params
            })
        },
        updateProps(params){
            dispatch({
                type: 'login/updateProps',
                payload: params
            })
        }
    }
}

export default connect(mapStateTopProps, mapDispatchToProps)(LoginView);
