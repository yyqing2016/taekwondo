import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    ImageBackground,
} from 'react-native';
import { connect } from 'react-redux';
import { TaekwondoColor } from '../../../share/styles';
import images from '../../../assests/images';
import { SCREEN_WIDTH, SCREEN_HEIGHT, SMALLEST_BORDER_WIDTH } from '../../../lib/platform';
import { Button } from '../../TButton/Button';

class LoginByUserNameView extends Component {

    static navigationOptions = () => (
        {
            header: null
        })
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ImageBackground style={styles.bg} source={images.bgImage}>
                <View style={styles.logoWrap}>
                    <Image style={styles.logo} source={images.logo} />
                </View>
                {/* <SafeAreaView style={{ flex: 1, }}> */}
                <View style={styles.loginWrap}>
                    <View style={styles.form}>
                        <View style={styles.inputView}>
                            <Image style={styles.loginPeople} source={images.loginPeople} />
                            <TextInput placeholderTextColor={TaekwondoColor.INPUT_PLACEHOLDER_BLUE} underlineColorAndroid={'transparent'} style={styles.input} placeholder='User name' />
                        </View>
                        <View style={styles.inputView}>
                            <Image style={styles.loginLock} source={images.loginLock} />
                            <TextInput placeholderTextColor={TaekwondoColor.INPUT_PLACEHOLDER_BLUE} underlineColorAndroid={'transparent'} style={styles.input} placeholder='Password' />
                        </View>
                        <View style={styles.btnWrap}>
                            <Button size={14} full title={'START'} />
                        </View>
                        <View style={styles.footerWrap}>
                            <TouchableOpacity>
                                <Text style={styles.textRed}>Register</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.textBlue}>Forget password</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/* </SafeAreaView> */}
            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    logoWrap:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        flexShrink: 3,
    },
    logo: {
        width: 255,
        height: 112,
    },
    loginWrap: {
        flexShrink: 3,
        flex: 2,
        justifyContent: 'flex-end',
        marginTop:20,
    },
    form: {
        paddingHorizontal: 66,
        fontSize: 12,
        zIndex:100,
    },
    inputView: {
        borderWidth: SMALLEST_BORDER_WIDTH,
        height: 44,
        borderColor: TaekwondoColor.INPUT_BORDER_BLUE,
        borderRadius: 2,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor:'white',
    },
    input: {
        flex: 1,
    },
    btnWrap: {
        width: '100%',
        height: 44,
    },
    loginPeople: {
        width: 14,
        height: 17,
        marginLeft: 13,
        marginRight: 10,
    },
    loginLock: {
        width: 13,
        height: 17,
        marginLeft: 13,
        marginRight: 10,
    },
    footerWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textRed: {
        paddingVertical: 10,
        paddingRight: 10,
        fontSize: 12,
        color: TaekwondoColor.LIGHR_RED
    },
    textBlue: {
        paddingVertical: 10,
        fontSize: 12,
        color: TaekwondoColor.MAIN_BLUE
    },

});

function mapStateTopProps(state) {

    return {};
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateTopProps, mapDispatchToProps)(LoginByUserNameView);
