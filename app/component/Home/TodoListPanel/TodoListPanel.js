import React, { Component } from 'react'

import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import { connect } from 'react-redux'
import Button from '../../Button/Button'
import CardWrap from '../../CardWrap/CardWrap'
import images from '../../../assests/images';
import { STColor } from '../../../share/styles';
import { SMALLEST_BORDER_WIDTH } from '../../../lib/platform';

class TodoListPanel extends Component {

    constructor(props) {
        super(props);

    }

    renderStartArrivedTime() {
        return <View style={[styles.flexRow, styles.startArrivedWrap]}>
            <View style={[styles.lineTip, styles.lineTipMargin]}>
                <View style={[styles.flexRow, styles.lineTip]}>
                    <View style={styles.orangeDot}></View>
                    <Text style={styles.lineTipTextSmall}>Start Time</Text>
                </View>
                <Text style={[styles.time]}>8:00 AM</Text>
            </View>
            <View style={[styles.lineTip]}>
                <View style={[styles.flexRow, styles.lineTip]}>
                    <View style={styles.orangeDot}></View>
                    <Text style={styles.lineTipTextSmall}>Arrived Time</Text>
                </View>
                <Text style={styles.time}>8:00 AM</Text>
            </View>

        </View>
    }

    renderMainOperation() {
        return <View style={[styles.flexRow, styles.mainMainOperation]}>
            <TouchableOpacity activeOpacity={1} style={styles.mainMainOperationItem}>
                <Image style={styles.mainMainOperationIcon} source={images.navi}></Image>
                <Text style={styles.mainMainOperationText}>Navi</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={styles.mainMainOperationItem}>
                <Image style={styles.mainMainOperationIcon} source={images.arrive}></Image>
                <Text style={styles.mainMainOperationText}>Arrive</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={styles.mainMainOperationItem}>
                <Image style={styles.mainMainOperationIcon} source={images.board}></Image>
                <Text style={styles.mainMainOperationText}>Board</Text>
            </TouchableOpacity>
        </View>
    }

    renderEndTripFooter() {

        return <View style={styles.endTripFooterWrap}>
            <View style={styles.endTripFooterImageWrap}>
                <Image source={images.upArrow} style={styles.endTripFooterImage}></Image>
            </View>
            <View style={styles.endTripFooterItemWrap}>
                <View style={styles.endTripFooterItem}>
                    <Text style={styles.endTripFooterTip}>Total</Text>
                    <Text style={styles.endTripFooterNum}>8</Text>
                </View>
            </View>
            <View style={styles.endTripFooterItemWrap}>
                <View style={styles.endTripFooterItem}>
                    <Text style={styles.endTripFooterTip}>Boarded</Text>
                    <Text style={styles.endTripFooterNum}>8</Text>
                </View>
            </View>
            <View style={styles.endTripFooterItemWrap}>
                <View style={styles.endTripFooterItem}>
                    <Text style={styles.endTripFooterTip}>Unboard</Text>
                    <Text style={styles.endTripFooterNum}>8</Text>
                </View>
            </View>

        </View>

    }

    render() {
        return (
            <CardWrap>
                <View style={styles.todoListWrap}>
                    <View style={styles.todoListInner}>
                        {!false && <View>
                            <Text style={styles.title}>NER ORDER</Text>
                            <Text style={styles.routeName}>Taxi Route 2</Text>
                        </View>}
                        {!true && <View style={[styles.successWrap]}>
                            <Image style={styles.imageSuccess} source={images.successGreen} />
                            <Text style={styles.successText}>Order Succssful</Text>
                        </View>}
                        {!true && <View style={styles.line} />}
                        <View style={styles.routeTipWrap}>
                            <Text style={styles.routeTip}>Trip-3141324123434</Text>
                            <Text style={[styles.routeTip, styles.routeTipLast]}>4.5km</Text>
                        </View>
                        <View style={[styles.flexRow, styles.startEndWrap]}>
                            <View style={[styles.lineTip, styles.lineTipMargin]}>
                                <View style={[styles.flexRow, styles.lineTip]}>
                                    <View style={styles.greenDot}></View>
                                    <Text style={styles.lineTipText}>From</Text>
                                </View>
                                <Text style={[styles.street]}>fadas'df St</Text>
                            </View>
                            <View style={[styles.lineTip]}>
                                <View style={[styles.flexRow, styles.lineTip]}>
                                    <View style={styles.greenDot}></View>
                                    <Text style={styles.lineTipText}>To</Text>
                                </View>
                                <Text styele={styles.street}>fadas'df St</Text>
                            </View>

                        </View>
                        <View style={[styles.flexRow, styles.verticalCenter, styles.date]}>
                            <Image style={styles.imageYellow} source={images.clockYellow}></Image>
                            <Text> 08:30 Feb,2018</Text>
                        </View>
                        <View style={[styles.flexRow, styles.verticalCenter, styles.num]}>
                            <Image style={styles.imageYellow} source={images.people}></Image>
                            <Text> 3</Text>
                        </View>
                        {/* {this.renderStartArrivedTime()} */}
                        {this.renderMainOperation()}
                        {/* {this.renderEndTripFooter()} */}
                        {false && <View style={[styles.flexRow, styles.btnWrap]}>
                            <Button wrap={styles.btnTake} size={16} full title="TAKE IT"></Button>
                            <Button style={styles.btnTake} size={16} full title="REJECT"></Button>
                        </View>}
                        {true && <View style={styles.flexRow}>
                            <Button  wrap={styles.buttonWrap} size={18} full title="COMFIRM"></Button>
                        </View>}
                    </View>
                </View>

            </CardWrap>
        )
    }
}

const styles = StyleSheet.create({
    greenDot: {
        backgroundColor: STColor.MAIN_GREEN,
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 4
    },
     orangeDot: {
        backgroundColor: STColor.MAIN_ORANGE,
        width: 8,
        height: 8,
        borderRadius: 4,
        marginRight: 4
    },
    successWrap: {
        flex: 1,
        alignItems: "center",
        marginBottom: 16,
    },
    line: {
        borderBottomWidth: SMALLEST_BORDER_WIDTH,
        borderBottomColor: STColor.LINE_COLOR
    },
    imageSuccess: {
        width: 46,
        height: 46
    },
    successText: {
        color: STColor.FONT_TITLE_COLOR,
        fontSize: 17
    },
    todoListWrap: {
        flex: 1,
        paddingHorizontal: 25,
        paddingTop: 15,
        paddingBottom: 8,
    },
    todoListInner: {
        flex: 1,
    },
    title: {
        color: STColor.MAIN_GREEN,
        textAlign: 'center',
        fontSize: 17,
    },
    routeName: {
        textAlign: 'center',
        color: STColor.FONT_TITLE_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        marginVertical: 8
    },
    routeTip: {
        color: STColor.MAIN_GREEN,
        textAlign: 'center',
        fontSize: 14,
    },
    routeTipLast: {
        marginLeft: 30,
    },
    routeTipWrap: {
        flexDirection: 'row',
        // justifyContent: 'space-between',
        justifyContent: 'center'
    },
    buttonWrap:{
        flex:1,
    },
    flexRow: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    startEndWrap: {
        marginTop: 13,
    },
    startArrivedWrap: {
       paddingTop:16,
       paddingBottom:20,
    },
    lineTip: {
        alignItems: 'center',
    },
    lineTipMargin: {
        marginRight: 60
    },
    start: {
        marginRight: 50,
    },
    street: {
        fontSize: 15,
        color: STColor.FONT_TITLE_COLOR,
        marginTop:2,
    },
    time: {
        fontSize: 15,
        color: STColor.NUM_COLOR,
        marginTop:12,
    },
    verticalCenter: {
        alignItems: "center"
    },
    imageYellow: {
        width: 19,
        height: 19,
    },
    date: {
        marginTop: 16,
    },
    btnTake: {
        marginRight: 18
    },
    btnWrap: {

    },
    num: {
        marginTop: 15,
        marginBottom: 28,
    },
    mainMainOperation: {
        // borderWidth: 1,
        justifyContent: 'space-between',
        paddingTop: 18,
        // marginBottom:8,
    },

    mainMainOperationIcon: {
        width: 46,
        height: 46,
    },
    mainMainOperationItem: {
        flex: 1,
        // borderWidth: 1,
        alignItems: 'center'
    },
    mainMainOperationText: {
        color: STColor.MAIN_GREEN,
        fontSize: 13,
    },
    endTripFooterWrap: {
        flexDirection: 'row',
        flex: 1,
        height: 46,
        alignItems: 'center',
        paddingBottom: 14,

    },
    endTripFooterImage: {
        transform: [{ rotate: '-90deg' }],
        width: 16,
        height: 10,

    },
    endTripFooterItem: {
        flex: 1,
        alignItems: 'center',


    },
    endTripFooterImageWrap: {
        width: 30,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: STColor.ICON_BG_COLOR
    },
    endTripFooterItemWrap: {
        flexDirection: 'row',
        flex: 1,
    },
    endTripFooterNum: {
        color: STColor.NUM_COLOR,
        fontSize: 15,
    },
    endTripFooterTip: {
        color: STColor.FONT_TITLE_COLOR,
        fontSize: 15,
    },
    lineTipText:{
        fontSize:17,
        color:STColor.FONT_TITLE_COLOR,
        fontWeight:'400'
    },
    lineTipTextSmall:{
        fontSize:16,
        color:STColor.FONT_TITLE_COLOR,
        fontWeight:'400'
    }


})

function mapStateTopProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}





export default connect(mapStateTopProps, mapDispatchToProps)(TodoListPanel);
