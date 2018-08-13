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

class EventsComponentView extends Component {

    static navigationOptions = () => (
        {
            header: null
        })
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.eventsWrap}>
                <View>
                    <Text style={styles.date}>July 20, 2018</Text>
                    <Text style={styles.font}>3:00pm - 6:00pm</Text>
                </View>
                <View>
                    <Text style={[styles.font, styles.fontCenter]}>Promotion Test</Text>
                    <Text style={[styles.tip, styles.fontCenter]}>for all level , wear the uniform</Text>
                </View>
                <View style={styles.addressWrap}>
                    <Image style={styles.address} source={images.address}/>
                    <Text  style={styles.font}>One Island Sourth</Text>
                </View>
                <View style={styles.line} />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    eventsWrap: {
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 12,
        alignItems: 'center',
        borderBottomColor: TaekwondoColor.LINE_COLOR,
        borderBottomWidth: SMALLEST_BORDER_WIDTH,
    },
    date: {
        color: TaekwondoColor.LIGHR_RED,
        fontSize: 10,
        // textAlign:'center'
    },
    font: {
        color: TaekwondoColor.FONT_COLOR,
        fontSize: 10,
        // textAlign:'center'
    },
    tip: {
        fontSize: 10,
        color: TaekwondoColor.FONT_LABEL,
    },
    fontCenter: {
        textAlign: 'center'
    },
    addressWrap:{
        flexDirection:'row',
        alignItems: 'center',
    },
    address:{
        width:8,
        height:9,
        marginRight: 7,
    },

});

function mapStateTopProps(state) {

    return {};
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateTopProps, mapDispatchToProps)(EventsComponentView);
