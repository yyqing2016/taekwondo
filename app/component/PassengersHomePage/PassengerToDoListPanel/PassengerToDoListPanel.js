import React, { Component } from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import Button from '../../Button/Button';
import CardWrap from '../../CardWrap/CardWrap';
import images from '../../../assests/images';
import { STColor } from '../../../share/styles';
import { SMALLEST_BORDER_WIDTH } from '../../../lib/platform';
import IconDot from '../../IconDot/IconDot';
import Line from '../../Home/Line';
import IconGroupButton from '../../IconGroupButton/IconGroupButton';
import { GradingComponent } from '../../GradingComponent/GradingComponent';

class PassengerToDoListPanel extends Component {
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

    showTab() {
        return (
            <View style={styles.passengerTodoListWrap}>
                <View style={[styles.flexRow, styles.tabWrap]}>
                    <TouchableOpacity
                        onPress={() => this.changeShowTabModule()}
                        style={[
                            styles.flexRow,
                            styles.tabItem,
                            this.state.showTabHome ? styles.tabItemNow : '',
                        ]}
                    >
                        <Text
                            style={[
                                styles.tabText,
                                this.state.showTabHome ? styles.tabTextNow : '',
                            ]}
                        >
                            GO HOME
            </Text>
                        <Image
                            style={[styles.homeSize]}
                            source={
                                this.state.showTabHome ? images.homeGreen : images.homeGray
                            }
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.changeShowTabModule()}
                        style={[
                            styles.flexRow,
                            styles.tabItem,
                            !this.state.showTabHome ? styles.tabItemNow : '',
                        ]}
                    >
                        <Text
                            style={[
                                styles.tabText,
                                !this.state.showTabHome ? styles.tabTextNow : '',
                            ]}
                        >
                            TO WORK
            </Text>
                        <Image
                            style={[styles.workSize]}
                            source={
                                !this.state.showTabHome ? images.workGreen : images.workGray
                            }
                        />
                    </TouchableOpacity>
                </View>
                {this.state.showTabHome &&
                    <View style={styles.tabContent}>
                        <View style={[styles.flexRow, styles.tabContentItem]}>
                            <Text style={styles.tabContentItemText}>
                                23-36,King George St
              </Text>
                            <IconDot size={6}>08:30  01/04</IconDot>
                        </View>
                        <View style={[styles.flexRow, , styles.tabContentItem]}>
                            <Text style={styles.tabContentItemText}> 08:30  01/04</Text>
                            <IconDot size={6} color="orange" />
                        </View>
                    </View>}
                {!this.state.showTabHome &&
                    <View style={styles.tabContent}>
                        <View style={[styles.flexRow, styles.tabContentItem]}>
                            <Text style={styles.tabContentItemText}>
                                23-36,Kinfdfasdfg George St
              </Text>
                            <IconDot size={6}>08:30  01/04</IconDot>
                        </View>
                        <View style={[styles.flexRow, , styles.tabContentItem]}>
                            <Text style={styles.tabContentItemText}> 08:30  f23/04</Text>
                            <IconDot size={6} color="orange" />
                        </View>
                    </View>}
                <View style={styles.reserveButtom}>
                    <Button
                        click={this.doReserve.bind(this)}
                        size={16}
                        title="RESERVE"
                        full
                    />
                </View>
            </View>
        );
    }

    renderSiteInfo() {
        return <View style={[styles.flexRow, styles.siteWrap]}>
            <View style={styles.siteItem}>
                <View style={[styles.flexRow, styles.siteInfo]}>
                    <Text style={styles.siteName}>Next Stop</Text>
                    <IconDot></IconDot>
                </View>
                <Text style={styles.smallFont}>(4 of 4)</Text>
                <Text style={styles.siteDetail}>King George St</Text>
            </View>
            <View style={styles.siteItem}>
                <View style={[styles.flexRow, styles.siteInfo]}>
                    <Text style={styles.siteName}>Estimated Arrival</Text>
                    <IconDot color='orange'></IconDot>
                </View>
                <Text style={styles.siteDetail}>8:52 AM</Text>
            </View>
        </View>
    }

    renderDriverDetail() {
        return <View style={[styles.flexRow, styles.driverDetailWrap]}>
            <View style={styles.driverDetailInfo}>
                <View style={styles.driverDetailTel}>
                    <Image style={styles.driverDetailTelImage} source={images.phone} />
                    <Text style={styles.driverDetailTelText}>+Tel</Text>
                </View>
                <Text style={styles.driverDetailTelNum}>972542033006</Text>
            </View>
            <View style={styles.driverDetaiImagelWrap}>
                <Image style={styles.driverDetailImage} source={images.head} />
            </View>
            <View >
                <Text style={styles.driverCarName}>Oded Rabi</Text>
                <Text style={styles.driverCarNum}>IL 94-310-23</Text>
            </View>
        </View>
    }

    renderRateRide() {
        return <View>
            <Text style={styles.rateRide}>RATE YOUR RIDE</Text>
            <GradingComponent />
            <Button wrap={styles.rateRideButton} full size={16} title='CONFIRM' ></Button>
            <View style={styles.questionWrap}>
                <Image style={styles.questionImage} source={images.question}></Image>
                <Text style={styles.questionText}>Please clicPlease click if youPlease clk if you</Text>
            </View>

        </View>

    }

    renderOrder() {
        return (
            <View style={styles.orderWrap}>
                <View>
                    <View style={[styles.flexRow, styles.toDoListHeader]}>
                        <Text style={styles.toDoListTitle}>TO WORK</Text>
                        {this.state.goHome &&
                            <Image
                                style={styles.toDoListImageHome}
                                source={images.homeBlack}
                            />}
                        {!this.state.goHome &&
                            <Image
                                style={styles.toDoListImageWork}
                                source={images.workBlack}
                            />}
                    </View>
                    <Text style={styles.street}>23-26, King George St</Text>
                    <Text style={styles.tripTip}>Trip-120123122</Text>
                    <Text style={styles.tripTip}>4.5km</Text>
                    {/* <View style={styles.orderStatusWrap}>
                        <Text style={styles.orderStatus}>Reservation accepted</Text>
                    </View> */}
                    <View style={styles.orderStatusWrap}>
                        <Text style={styles.orderStatus}>Boarded on 8:30AM</Text>
                        <Text style={styles.orderStatus}> Boarded on 8:30AM Es</Text>
                    </View>

                </View>
                <Line />
                <View style={[styles.flexRow, styles.toDoListTime]}>
                    <Text style={styles.tripTime}>08:30 2 Feb,2018</Text>
                    <Image
                        style={styles.toDoListcLockYellow}
                        source={images.clockYellow}
                    />
                </View>

                {/* {this.renderSiteInfo()} */}
                <Line />
                {this.renderDriverDetail()}
                <Line />
                {this.renderRateRide()}
                {/* <IconGroupButton buttonArray={this.buildIconGroupButtonArray ()} />
        <Button size={16} title='CANCEL TRIP' full></Button> */}
            </View>
        );
    }

    render() {
        return (
            <CardWrap>
                {/* {this.showTab()} */}
                {this.renderOrder()}
            </CardWrap>
        );
    }
}

const styles = StyleSheet.create({
    orderWrap: {
        flex: 1,
        paddingHorizontal: 14,
        paddingVertical: 8,
    },
    passengerTodoListWrap: {
        flex: 1,
    },
    flexRow: {
        flexDirection: 'row',
        // justifyContent: 'center'
    },
    tabWrap: {
        flex: 1,
        justifyContent: 'space-around',
        // borderWidth:1,
        paddingBottom: 4,
        // borderWidth: 1
    },
    tabItem: {
        height: 22,
    },
    tabItemNow: {
        borderBottomWidth: 2,
        borderBottomColor: STColor.NUM_COLOR,
    },
    tabText: {
        fontSize: 13,
        color: STColor.FONT_LABEL_COLOR,
    },
    tabTextNow: {
        color: STColor.NUM_COLOR,
    },
    homeSize: {
        width: 15,
        height: 13,
        marginLeft: 13,
    },
    workSize: {
        width: 15,
        height: 14,
        marginLeft: 13,
    },
    tabContent: {
        flex: 1,
        // alignItems:'flex-end'
    },
    tabContentItem: {
        marginTop: 16,
        paddingBottom: 10,
        marginHorizontal: 14,
        flex: 1,
        height: 30,
        alignItems: 'center',
        borderBottomWidth: SMALLEST_BORDER_WIDTH,
        borderBottomColor: STColor.LINE_ITEM_COLOR,
        //   alignSelf:'flex-end'
    },
    tabContentItemText: {
        flex: 1,
        color: STColor.FONT_LABEL_COLOR,
        fontSize: 14,
        marginRight: 14,
        textAlign: 'right',
    },
    reserveButtom: {
        marginHorizontal: 14,
        marginTop: 18,
    },
    toDoListImageHome: {
        width: 17,
        height: 15,
    },
    toDoListImageWork: {
        width: 17,
        height: 16,
    },
    toDoListTitle: {
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
    orderStatusWrap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingTop: 12,
        paddingBottom: 12,
    },
    orderStatus: {
        fontSize: 14,
        color: STColor.MAIN_GREEN,
        textAlign: 'center',
    },
    street: {
        fontSize: 15,
        color: STColor.FONT_TITLE_COLOR,
        textAlign: 'center',
        marginTop: 8,
    },
    toDoListcLockYellow: {
        width: 18,
        height: 18,
        marginLeft: 12,
    },
    tripTime: {
        fontSize: 17,
        color: STColor.FONT_TITLE_COLOR,
    },
    toDoListHeader: {
        justifyContent: 'center',
        height: 24,
        alignItems: 'center',
    },
    toDoListTime: {
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
        fontWeight: '600'
    },
    smallFont: {
        color: STColor.NUM_COLOR,
        fontSize: 11,
    },
    siteWrap: {
        flex: 1,
        justifyContent: "space-between",
        // borderWidth: 1,
        height: 66,
    },
    siteItem: {
        // borderWidth: 1,
        alignItems: 'center',
        flex: 1,
        justifyContent: "space-between",
    },
    siteDetail: {
        fontSize: 15,
        fontWeight: '600',
        color: STColor.NUM_COLOR,
    },
    driverDetailWrap: {
        marginVertical: 22,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    driverDetailInfo: {
        // borderWidth: 1,
    },
    driverDetailTel: {
        height: 22,
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 6,
    },
    driverDetailImage: {
        width: 72,
        height: 72,
        borderRadius: 36,
    },
    driverDetaiImagelWrap: {
        marginHorizontal: 18,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        borderWidth: 2,
        borderColor: STColor.UNDER_LINE_COLOR
    },
    driverDetailTelImage: {
        width: 18,
        height: 18,
    },
    driverDetailTelText: {
        color: STColor.MAIN_GREEN,
        fontSize: 16,
        marginLeft: 6,
        fontWeight: "600",
    },
    driverDetailTelNum: {
        color: STColor.MAIN_GREEN,
        fontSize: 12,
        textDecorationLine: 'underline'
    },
    driverCarName: {
        color: STColor.FONT_TITLE_COLOR,
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 4,
    },
    driverCarNum: {
        color: STColor.FONT_TITLE_COLOR,
        fontSize: 14,
    },
    rateRide: {
        color: STColor.FONT_TITLE_COLOR,
        fontSize: 14,
        fontWeight: "600",
        textAlign: 'center',
        marginTop: 12,
    },
    rateRideButton: {
        marginTop: 14,
    },
    questionWrap:{
        flexDirection:'row',
        height:14,
        alignItems:'center',
        justifyContent:'center',
        marginTop: 18,
    },
    questionImage:{
        width:14,
        height:14,
    },
    questionText:{
        fontSize:12,
        color:STColor.MAIN_GREEN,
    }
});

function mapStateTopProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateTopProps, mapDispatchToProps)(
    PassengerToDoListPanel
);
