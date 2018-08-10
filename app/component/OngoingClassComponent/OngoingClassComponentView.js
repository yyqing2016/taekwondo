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

class OngoingClassComponentView extends Component {

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
                <View style={[styles.flexRow, styles.topWrap]}>
                    <View >
                        <View style={styles.flexRow}>
                            <Image style={styles.clock} source={images.clock} />
                            <Text style={styles.goingTime}>4:30 - 5:30</Text>
                        </View>
                        <View style={styles.flexRow}>
                            <View style={[styles.flexRow, styles.iconSpacing]}>
                                <Image style={styles.peopleGroup} source={images.peopleGroup} />
                                <Text style={styles.goingNumTip}>8</Text>
                            </View>
                            <View style={[styles.flexRow, styles.iconSpacing]}>
                                <Image style={styles.yes} source={images.yes} />
                                <Text style={styles.goingNumTip}>6</Text>
                            </View>
                            <View style={styles.flexRow}>
                                <Image style={styles.no} source={images.no} />
                                <Text style={styles.goingNumTip}>2</Text>
                            </View>
                        </View>
                    </View>
                    <Text style={styles.title}>Kid 3-6 trainning</Text>
                    <View style={styles.peopleWrap}>
                        <Image style={styles.people} source={images.avatar1} />
                        <Text style={styles.font}>Master Billy</Text>
                    </View>
                </View>
                <View>
                    <View style={[styles.flexRow, styles.goingItem]}>
                        <View style={styles.flexRow}>
                            <Text style={styles.goingNum}>1</Text>
                            <Image style={styles.listAvatar} source={images.avatar2} />
                            <Text style={styles.goingFont}>Kylie Wong</Text>
                        </View>
                        <Text style={styles.goingName}>Red Belt</Text>
                        <View style={styles.flexRow}>
                            <Image style={styles.yesCircle} source={images.noCircle} />
                            <View style={styles.buttonWrap}>
                                <Button title='Checked in' full size={9}></Button>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.flexRow, styles.goingItem]}>
                        <View style={styles.flexRow}>
                            <Text style={styles.goingNum}>2</Text>
                            <Image style={styles.listAvatar} source={images.avatar3} />
                            <Text style={styles.goingFont}>Kylie Wong</Text>
                        </View>
                        <Text style={styles.goingName}>Red Belt</Text>
                        <View style={styles.flexRow}>
                            <Image style={styles.yesCircle} source={images.yesCircle} />
                            <View style={styles.buttonWrap}>
                                <Button title='Checked in' full size={9}></Button>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.flexRow, styles.goingItem]}>
                        <View style={styles.flexRow}>
                            <Text style={styles.goingNum}>3</Text>
                            <Image style={styles.listAvatar} source={images.avatar1} />
                            <Text style={styles.goingFont}>Kylie Wong</Text>
                        </View>
                        <Text style={styles.goingName}>Red Belt</Text>
                        <View style={styles.flexRow}>
                            <Image style={styles.yesCircle} source={images.yesCircle} />
                            <View style={styles.buttonWrap}>
                                <Button title='Checked in' full size={9}></Button>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.flexRow, styles.goingItem]}>
                        <View style={styles.flexRow}>
                            <Text style={styles.goingNum}>3</Text>
                            <Image style={styles.listAvatar} source={images.avatar2} />
                            <Text style={styles.goingFont}>Kylie Wong</Text>
                        </View>
                        <Text style={styles.goingName}>Red Belt</Text>
                        <View style={styles.flexRow}>
                            <Image style={styles.yesCircle} source={images.yesCircle} />
                            <View style={styles.buttonWrap}>
                                <Button title='Checked in' full size={9}></Button>
                            </View>
                        </View>
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
    topWrap: {
        height: 58,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
        borderBottomColor: TaekwondoColor.LINE_COLOR,
        borderBottomWidth: SMALLEST_BORDER_WIDTH,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    goingTime: {
        color: TaekwondoColor.LIGHR_RED,
        fontSize: 13,
    },
    title: {
        color: TaekwondoColor.LIGHR_RED,
        fontSize: 12,
    },
    font: {
        color: TaekwondoColor.FONT_COLOR,
        fontSize: 9,
    },
    buttonWrap: {
        width: 74,
        height: 20,
    },
    goingItem: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 12,
        borderBottomColor: TaekwondoColor.LINE_COLOR,
        borderBottomWidth: SMALLEST_BORDER_WIDTH,
    },
    goingNum: {
        color: TaekwondoColor.FONT_LABEL,
        fontSize: 9,
        marginRight: 14,
    },
    goingFont: {
        color: TaekwondoColor.FONT_COLOR,
        fontSize: 9,
    },
    goingName: {
        fontSize: 9,
    },
    clock: {
        width: 11,
        height: 11,
        marginRight: 4,
    },
    peopleGroup: {
        width: 11,
        height: 10,
        marginRight: 4,
    },
    yes: {
        width: 9,
        height: 6,
        marginRight: 3,
    },
    no: {
        width: 9,
        height: 9,
        marginRight: 3,
    },
    iconSpacing: {
        marginRight: 10,
        alignItems: 'center',
    },
    people: {
        width: 32,
        height: 32,
        borderRadius: 16,
    },
    peopleWrap: {
        alignItems: 'center',
    },
    goingNumTip: {
        fontSize: 9,
    },
    yesCircle: {
        width: 15,
        height: 15,
        marginRight: 13,
    },
    listAvatar: {
        width: 26,
        height: 26,
        borderRadius: 13,
        marginRight: 7,
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

export default connect(mapStateTopProps, mapDispatchToProps)(OngoingClassComponentView);
