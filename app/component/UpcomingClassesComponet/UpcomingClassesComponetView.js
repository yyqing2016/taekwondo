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
import { TaekwondoColor } from '../../../share/styles';
import images from '../../../assests/images';
import { SCREEN_WIDTH, SCREEN_HEIGHT, SMALLEST_BORDER_WIDTH } from '../../../lib/platform';
import { Button } from '../../TButton/Button';

class UpcomingClassesComponetView extends Component {

    static navigationOptions = () => (
        {
            header: null
        })
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View style={styles.upingWrap}>
                    <View style={styles.flexRow}>
                        <Image style={styles.clockBlue} source={images.clockBlue} />
                        <Text style={styles.upingTime}>5:30 - 6:30</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.upingTip}>Room 1</Text>
                        <Text style={styles.upingFont}>Sparrings Class</Text>
                        <Text style={styles.upingTip}>6 People</Text>
                    </View>
                    <View style={styles.flexRow}>
                        <Image style={styles.avatar} source={images.avatar1} />
                        <Text style={styles.upingFont}>Kylie Wong Copy 4</Text>
                    </View>
                </View>
                <View style={styles.upingWrap}>
                    <View style={styles.flexRow}>
                        <Image style={styles.clockBlue} source={images.clockBlue} />
                        <Text style={styles.upingTime}>5:30 - 6:30</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.upingTip}>Room 1</Text>
                        <Text style={styles.upingFont}>Sparrings Class</Text>
                        <Text style={styles.upingTip}>6 People</Text>
                    </View>
                    <View style={styles.flexRow}>
                        <Image style={styles.avatar} source={images.avatar1} />
                        <Text style={styles.upingFont}>Kylie Wong Copy 4</Text>
                    </View>
                </View>
                <View style={styles.upingWrap}>
                    <View style={styles.flexRow}>
                        <Image style={styles.clockBlue} source={images.clockBlue} />
                        <Text style={styles.upingTime}>5:30 - 6:30</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.upingTip}>Room 1</Text>
                        <Text style={styles.upingFont}>Sparrings Class</Text>
                        <Text style={styles.upingTip}>6 People</Text>
                    </View>
                    <View style={styles.flexRow}>
                        <Image style={styles.avatar} source={images.avatar1} />
                        <Text style={styles.upingFont}>Kylie Wong Copy 4</Text>
                    </View>
                </View>
                <View style={styles.arrowDownWrap}>
                    <Image style={styles.arrowDown} source={images.arrowDown} />
                </View>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    upingWrap: {
        height: 58,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 12,
        borderBottomColor: TaekwondoColor.LINE_COLOR,
        borderBottomWidth: SMALLEST_BORDER_WIDTH,
    },
    upingTime: {
        fontSize: 12,
        color: TaekwondoColor.FONT_COLOR
    },
    upingTip: {
        fontSize: 9,
        color: TaekwondoColor.FONT_TIP
    },
    upingFont: {
        fontSize: 9,
        color: TaekwondoColor.FONT_COLOR
    },
    content: {
        alignItems: 'center',
    },
    clockBlue: {
        width: 11,
        height: 11,
        marginRight: 7,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 26,
        height: 26,
        borderRadius: 13,
        marginRight: 4,
    },
    arrowDown: {
        width: 9,
        height: 5,
    },
    arrowDownWrap: {
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }

});

function mapStateTopProps(state) {

    return {};
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateTopProps, mapDispatchToProps)(UpcomingClassesComponetView);
