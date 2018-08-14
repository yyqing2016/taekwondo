import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import { TaekwondoColor } from '../../share/styles';
import images from '../../assests/images';
import { SCREEN_WIDTH, SCREEN_HEIGHT, SMALLEST_BORDER_WIDTH, SCALE } from '../../lib/platform';
import { Button } from '../TButton/Button';
import NfcManager, { NdefParser } from 'react-native-nfc-manager'
import NFCComponent from '../../common/NFCComponent';

class TLoginView extends Component {

    static navigationOptions = () => (
        {
            header: null
        })
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(NfcManager, NdefParser)
    }

   async doLogin(id){
        if(!!id){
         await  this.props.updateProps({cardNumber:id})
         this.props.login({navigation:this.props.navigation})
        }

    }

    render() {
        return (
            <ImageBackground style={styles.bg} source={images.bgImage}>
            <NFCComponent doSuccess={(id)=>this.doLogin(id)} />
                <View style={styles.loginWrap}>
                    <View style={styles.logoWrap}>
                        <Image style={styles.logo} source={images.logo} />
                        <View style={styles.topFontWrap}>
                            <Text style={styles.text}>TAP Your Card</Text>
                            <Text style={styles.text}>OR</Text>
                        </View>
                    </View>
                    <View style={styles.form}>
                        <TextInput placeholderTextColor={TaekwondoColor.INPUT_PLACEHOLDER_BLUE} underlineColorAndroid={'transparent'} style={styles.input} placeholder='enter branch code' />
                        <Button size={42 / SCALE} full title={'START'}></Button>
                    </View>
                </View>
            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
    bg: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT
    },
    loginWrap: {
        flex: 1,
        justifyContent: 'space-between',
        // borderWidth: 1,
    },
    logoWrap: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // flexShrink: 3,
        // borderWidth: 1,
        paddingTop: 140/SCALE,
    },
    logo: {
        width: 765 / SCALE,
        height: 336 / SCALE,
    },
    form: {
        height: 380 / SCALE,
        width: '100%',
        flexDirection: 'column',
        marginBottom: 180 / SCALE,
        paddingHorizontal: 201 / SCALE,
    },
    input: {
        borderWidth: SMALLEST_BORDER_WIDTH,
        height: 128 / SCALE,
        paddingLeft: 30 / SCALE,
        borderColor: TaekwondoColor.INPUT_BORDER_BLUE,
        marginBottom: 133 / SCALE,
        borderRadius: 6 / SCALE,
        fontSize: 36 / SCALE,
    },
    text: {
        color: 'white',
        fontSize: 42 / SCALE,
        textAlign: 'center',
    },
    topFontWrap: {
        alignSelf: 'center',
        height: 180 / SCALE,
        justifyContent: 'space-between',
        marginTop: 140 / SCALE,

    },

});

function mapStateTopProps(state) {
    const { cardNumber } = state.login;
    return { cardNumber};
}

function mapDispatchToProps(dispatch) {
    return {
        login(params) {
            dispatch({
                type: 'login/login',
                payload: params
            })
        },
        updateProps(params) {
            dispatch({
                type: 'login/updateProps',
                payload: params
            })
        }

    }
}

export default connect(mapStateTopProps, mapDispatchToProps)(TLoginView);
