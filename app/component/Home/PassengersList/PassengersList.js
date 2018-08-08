import React, { Component } from 'react'

import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native'

import { connect } from 'react-redux'
import Button from '../../Button/Button'
import CardWrap from '../../CardWrap/CardWrap'
import images from '../../../assests/images';
import { STColor } from '../../../share/styles';
import { SMALLEST_BORDER_WIDTH } from '../../../lib/platform';
import Line from '../Line';

class PassengersList extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <CardWrap>
                <View style={styles.passenmgersListWrap}>
                    <View style={[styles.passenmgersListTopBar, styles.flexRow]}>
                        <View style={[styles.peopleNumWrap,styles.flexRow]}>
                            <Image style={styles.imagePeople} source={images.people}></Image>
                            <Text style={styles.textPeople}>3</Text>
                        </View>
                        <Text style={styles.streetTip}>fasdfsas St</Text>
                    </View>
                    <Line/>
                    <View style={styles.listWrap}>
                        <View style={[styles.listItem, styles.flexRow]}>
                            <View  style={[styles.flexRow,styles.btnWrap]}>
                                <Button full wrap={[styles.btn,styles.btnMargin]} fontSize={17} title="Get on" />
                                <Button wrap={styles.btn} fontSize={17} title="Call" />
                            </View>
                            <View style={[styles.flexRow]}>
                                <Text>dfasdfdfas</Text>
                                <Image style={[styles.imagePeopleHead,styles.imagePeopleHeadWrap]} source={images.head} />
                            </View>
                        </View>
                        <View style={[styles.listItem, styles.flexRow]}>
                            <View  style={[styles.flexRow,styles.btnWrap]}>
                                <Button full wrap={[styles.btn,styles.btnMargin]} fontSize={17} title="Get on" />
                                <Button wrap={styles.btn} fontSize={17} title="Call" />
                            </View>
                            <View style={[styles.flexRow,styles.imagePeopleHeadWrap]}>
                                <Text>dfasdfdfas</Text>
                                <Image style={styles.imagePeopleHead} source={images.head} />
                            </View>
                        </View>
                        <View style={[styles.listItem, styles.flexRow]}>
                            <View  style={[styles.flexRow,styles.btnWrap]}>
                                <Button full wrap={[styles.btn,styles.btnMargin]} fontSize={17} title="Get on" />
                                <Button wrap={styles.btn} fontSize={17} title="Call" />
                            </View>
                            <View style={[styles.flexRow,styles.imagePeopleHeadWrap]}>
                                <Text>dfasdfdfas</Text>
                                <Image style={styles.imagePeopleHead} source={images.head} />
                            </View>
                        </View>
                    </View>
                </View>

            </CardWrap>
        )
    }
}

const styles = StyleSheet.create({

    passenmgersListWrap: {
        flex: 1,
        paddingHorizontal:6,
    },
    passenmgersListTopBar: {
        flex: 1,
        justifyContent:'space-between',
        paddingVertical:6,
    },
    peopleNumWrap: {

    },
    listWrap:{
        // alignItems:'center',
        flex:1,
        // justifyContent:'space-between'
    },
    imagePeople: {
        width: 19,
        height: 19,
        marginRight:4,
    },
    textPeople: {
        color: STColor.FONT_TITLE_COLOR,
        fontSize: 17,
    },
    streetTip: {

    },
    btnWrap:{
        width:200,
    },
    listItem: {
    //   paddingVertical:20,
    //   flex:1,
    height:50,
    alignItems:'center',
      justifyContent:'space-between',
    },
    flexRow: {
        // flex:1,
        flexDirection: "row"
    },
    imagePeopleHead:{
        width:30,
        height:30,
        marginLeft:4,
    },
    btn:{
        height:30,
    },
    btnMargin:{
        marginRight:10
    },
    imagePeopleHeadWrap:{
        alignItems:'center',
        // borderWidth:1,
    }
    


})

function mapStateTopProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}





export default connect(mapStateTopProps, mapDispatchToProps)(PassengersList);
