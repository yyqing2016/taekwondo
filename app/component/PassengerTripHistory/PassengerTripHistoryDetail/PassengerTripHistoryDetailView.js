import React, { Component } from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import images from '../../../assests/images';
import { STColor } from '../../../share/styles';
import IconDot from '../../IconDot/IconDot';
import Line from '../../Home/Line';
import GradingComponent from '../../GradingComponent/GradingComponent'

class PassengerTripHistoryDetailView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showTabHome: true,
            startLocation: '',
            endLocation: '',
            startTime: '',
            endTime: '',
            goHome: true,
        };
    }

    changeShowTabModule() {
        this.setState({
            showTabHome: !this.state.showTabHome,
        });
    }

    doReserve() {
        console.log('RESERVE');
        if (this.state.showTabHome) {
            this.setState({
                endLocation: 'HOME',
            });
        } else {
            this.setState({
                endLocation: 'WORK',
            });
        }
        Console.log(this.state.endLocation);
    }

    buildIconGroupButtonArray() {
        return [
            {
                title: 'Cancel',
                icon: 'cancel',
                iconSize: { w: 46, h: 46 },
                click: this.doMainOperator.bind(this, 'cancel'),
            },
            {
                title: 'Navi',
                icon: 'navi',
                iconSize: { w: 46, h: 46 },
                click: this.doMainOperator.bind(this, 'navi'),
            },
            {
                title: 'Scan',
                icon: 'scan',
                iconSize: { w: 46, h: 46 },
                click: this.doMainOperator.bind(this, 'scan'),
            },
        ];
    }

    doMainOperator(type) {
        switch (type) {
            case 'cancel':
                alert('cancel');
                break;
            case 'navi':
                alert('navi');
                break;
            case 'scan':
                alert('scan');
                break;

            default:
                break;
        }
    }

    render() {
        return (
            <View style={styles.passengerTripHistoryDetailWrap}>
                <View>
                    <View style={[styles.flexRow, styles.tripHistoryHeader]}>
                        <Text style={styles.tripHistoryTitle}>TO WORK</Text>
                        {this.state.goHome &&
                            <Image
                                style={styles.tripHistoryImageHome}
                                source={images.homeBlack}
                            />}
                        {!this.state.goHome &&
                            <Image
                                style={styles.tripHistoryImageWork}
                                source={images.workBlack}
                            />}
                    </View>
                    <Text style={styles.street}>23-26, King George St</Text>
                    <Text style={styles.tripTip}>Trip-120123122 4.5km</Text>
                </View>
                <View>
                    <Line />
                </View>

                <View style={[styles.flexRow, styles.tripHistoryTime]}>
                    <Text style={styles.tripTime}>08:30 2 Feb,2018</Text>
                    <Image
                        style={styles.tripHistorycLockYellow}
                        source={images.clockYellow}
                    />
                </View>


                <View style={[styles.flexRow, styles.siteWrap]}>
                    <View style={styles.siteItem}>
                        <View style={[styles.flexRow, styles.siteInfo]}>
                            <Text style={styles.siteName}>Arrival</Text>
                            <IconDot />
                        </View>
                        <Text style={styles.siteDetail}>King George St</Text>
                    </View>
                    <View style={styles.siteItem}>
                        <View style={[styles.flexRow, styles.siteInfo]}>
                            <Text style={styles.siteName}>Boarding</Text>
                            <IconDot color="orange" />
                        </View>
                        <Text style={styles.siteDetail}>8:52 AM</Text>
                    </View>
                </View>

                <View>
                    <Line />
                </View>

                <View style={styles.passengersWrap}>
                    <View style={styles.passengersInfo}>
                        <View style={styles.passengersImageWrap} >
                            <Image style={styles.passengersImage} source={images.head}></Image>
                        </View>
                        <Text style={styles.passengersName}>Oded Rabi</Text>
                        <View style={styles.passengersPhoneWrap}>
                            <Text style={styles.passengersPhoneNum}>+972542033006</Text>
                            <Image style={styles.passengersPhoneImage} source={images.phone}></Image>
                        </View>
                    </View>
                    <View style={styles.passengersInfo}>
                        <View style={styles.passengersImageWrap} >
                            <Image style={styles.passengersImage} source={images.head}></Image>
                        </View>
                        <Text style={styles.passengersName}>Oded Rabi</Text>
                        <View style={styles.passengersPhoneWrap}>
                            <Text style={styles.passengersPhoneNum}>+972542033006</Text>
                            <Image style={styles.passengersPhoneImage} source={images.phone}></Image>
                        </View>
                    </View>
                </View>

                <GradingComponent></GradingComponent>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    passengerTripHistoryDetailWrap: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop:30,
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    tripHistoryImageHome: {
        width: 17,
        height: 15,
    },
    tripHistoryImageWork: {
        width: 17,
        height: 16,
    },
    tripHistoryTitle: {
        color: STColor.FONT_TITLE_COLOR,
        fontSize: 17,
        marginRight: 13,
    },
    tripTip: {
        fontSize: 14,
        color: STColor.MAIN_GREEN,
        textAlign: 'center',
        paddingTop: 8,
    },
    street: {
        fontSize: 15,
        color: STColor.FONT_TITLE_COLOR,
        textAlign: 'center',
        marginTop: 8,
    },
    tripHistorycLockYellow: {
        width: 18,
        height: 18,
        marginLeft: 12,
    },
    tripTime: {
        fontSize: 17,
        color: STColor.FONT_TITLE_COLOR,
    },
    tripHistoryHeader: {
        justifyContent: 'center',
        height: 24,
        alignItems: 'center',
    },
    tripHistoryTime: {
        // borderWidth: 1,
        justifyContent: 'center',
        height: 24,
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 18,
    },
    siteInfo: {
        height: 22,
        justifyContent: 'center',
        alignItems: 'center',
    },
    siteName: {
        fontSize: 16,
        color: STColor.FONT_TITLE_COLOR,
        marginRight: 10,
        fontWeight: '600',
    },
    siteWrap: {
        justifyContent: 'space-between',
        height: 52,
    },
    siteItem: {
        alignItems: 'center',
        flex: 1,
    },
    siteDetail: {
        fontSize: 15,
        color: STColor.FONT_TITLE_COLOR,
    },
    passengersImageWrap: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 12,
    },
    passengersImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    passengersWrap: {
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    passengersPhoneWrap: {
        flexDirection: 'row',
        height: 18,
        alignItems: 'center',
        marginTop: 4,
    },
    passengersPhoneNum: {
        color: STColor.MAIN_GREEN,
        fontSize: 12,
        textDecorationLine: 'underline',
        marginRight: 4,
    },
    passengersPhoneImage: {
        width: 8,
        height: 8,
    },
    passengersInfo: {
        alignItems: 'center',
    },
    passengersName: {
        marginTop: 4,
    },
    passengersName: {
        color: STColor.FONT_TITLE_COLOR,
        fontSize: 14,
    }
});

function mapStateTopProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateTopProps, mapDispatchToProps)(
    PassengerTripHistoryDetailView
);
