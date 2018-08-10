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
import { SCREEN_WIDTH, SCREEN_HEIGHT, SMALLEST_BORDER_WIDTH } from '../../lib/platform';
import { Button } from '../TButton/Button';
import NfcManager, {NdefParser} from 'react-native-nfc-manager'

class TLoginView extends Component {

    static navigationOptions = () => (
        {
            header: null
        })
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        console.log(NfcManager, NdefParser)
    }

    render() {
        return (
            <ImageBackground style={styles.bg} source={images.bgImage}>
                <View style={styles.loginWrap}>
                    <View style={styles.topFontWrap}>
                        <Text style={styles.text}>TAP Your Card</Text>
                        <Text style={styles.text}>OR</Text>
                    </View>
                    <View style={styles.form}>
                        <TextInput placeholderTextColor={TaekwondoColor.INPUT_PLACEHOLDER_BLUE} underlineColorAndroid={'transparent'} style={styles.input} placeholder='enter branch code' />
                        <Button size={14} full title={'START'}></Button>
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
    },
    form: {
        height: 126,
        width: '100%',
        flexDirection: 'column',
        marginBottom: 60,
        paddingHorizontal: 66,
    },
    input: {
        borderWidth: SMALLEST_BORDER_WIDTH,
        height: 44,
        paddingLeft: 10,
        borderColor: TaekwondoColor.INPUT_BORDER_BLUE,
        marginBottom: 38,
        borderRadius: 2,
    },
    text: {
        color: 'white',
        fontSize: 14,
        textAlign:'center',
    },
    topFontWrap: {
        alignSelf: 'center',
        height: 60,
        justifyContent: 'space-between',
        marginTop: 210,
    },

});

function mapStateTopProps(state) {

    return {};
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateTopProps, mapDispatchToProps)(TLoginView);
