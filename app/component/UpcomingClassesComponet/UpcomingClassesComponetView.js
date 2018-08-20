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
            <View style={{flex:1,}}>
                <ScrollView style={{flex:1,}}>
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
                </ScrollView>
                {/* <View style={styles.arrowDownWrap}>
                    <Image style={styles.arrowDown} source={images.arrowDown} />
                </View> */}
            </View>


        );
    }
}

const styles = StyleSheet.create({
    upingWrap: {
        height: 172 / SCALE,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 36 / SCALE,
        borderBottomColor: TaekwondoColor.LINE_COLOR,
        borderBottomWidth: SMALLEST_BORDER_WIDTH,
    },
    upingTime: {
        fontSize: 36 / SCALE,
        color: TaekwondoColor.FONT_COLOR
    },
    upingTip: {
        fontSize: 28 / SCALE,
        color: TaekwondoColor.FONT_TIP
    },
    upingFont: {
        fontSize: 28 / SCALE,
        color: TaekwondoColor.FONT_COLOR
    },
    content: {
        alignItems: 'center',
    },
    clockBlue: {
        width: 32 / SCALE,
        height: 32 / SCALE,
        marginRight: 21 / SCALE,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 80 / SCALE,
        height: 80 / SCALE,
        borderRadius: 40 / SCALE,
        marginRight: 13 / SCALE,
    },
    arrowDown: {
        width: 28 / SCALE,
        height: 15 / SCALE,
    },
    arrowDownWrap: {
        height: 90 / SCALE,
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
