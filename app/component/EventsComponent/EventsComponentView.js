import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    ImageBackground,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { TaekwondoColor } from '../../share/styles';
import images from '../../assests/images';
import { SCREEN_WIDTH, SCREEN_HEIGHT, SMALLEST_BORDER_WIDTH, SCALE } from '../../lib/platform';
import { Button } from '../TButton/Button';
import moment from 'moment'
import { formatDateTimeToDate, formatTimeToTime } from '../../lib/strs';

class EventsComponentView extends Component {

    static navigationOptions = () => (
        {
            header: null
        })
    constructor(props) {
        super(props);
    }

    render() {
        console.log("dfasd", this.props.events)
        return (
            <ScrollView style={styles.eventsItemwrap}>
                {this.props.events && this.props.events.length > 0 && this.props.events.map((event) => (
                    <View style={styles.eventsWrap} key={event.id}>
                        <View>
                            <Text style={styles.date}>{formatDateTimeToDate(event.date)}</Text>
                            <Text style={styles.font}>{`${formatTimeToTime(event.date, event.startTime)} - ${formatTimeToTime(event.date, event.endTime)}`}</Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={[styles.font, styles.fontCenter]}>{event.name}</Text>
                            <Text style={[styles.tip, styles.fontCenter]}>{event.detail}</Text>
                        </View>
                        <View style={styles.addressWrap}>
                            <Image style={styles.address} source={images.address} />
                            <Text style={styles.font}>{event.address}</Text>
                        </View>
                        <View style={styles.line} />
                    </View>
                ))}
            </ScrollView>


        );
    }
}

const styles = StyleSheet.create({
    eventsItemwrap:{
        height: 260/SCALE,
        borderWidth:1,
        maxHeight: 260/SCALE,
    },
    eventsWrap: {
        height: 130 / SCALE,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 36 / SCALE,
        alignItems: 'center',
        borderBottomColor: TaekwondoColor.LINE_COLOR,
        borderBottomWidth: SMALLEST_BORDER_WIDTH,
    },
    date: {
        color: TaekwondoColor.LIGHR_RED,
        fontSize: 30 / SCALE,
        // textAlign:'center'
    },
    font: {
        color: TaekwondoColor.FONT_COLOR,
        fontSize: 30 / SCALE,
        // textAlign:'center'
    },
    tip: {
        fontSize: 30 / SCALE,
        color: TaekwondoColor.FONT_LABEL,
    },
    fontCenter: {
        textAlign: 'center'
    },
    addressWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth:1,
        minWidth:260/SCALE,
    },
    address: {
        width: 24 / SCALE,
        height: 27 / SCALE,
        marginRight: 21 / SCALE,
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
