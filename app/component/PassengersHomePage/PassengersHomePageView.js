import React, { Component } from 'react'

import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    Modal
} from 'react-native'

import { connect } from 'react-redux'
import images from '../../assests/images';
import { LS } from '../../locales/localized-strings';
import { STColor } from '../../share/styles';
import { SCREEN_WIDTH } from '../../lib/platform';
import CardWrap from '../CardWrap/CardWrap'
import { Button } from '../Button/Button';
import PassengerToDoListPanel from './PassengerToDoListPanel/PassengerToDoListPanel';

class PassengersHomePageView extends Component {

    constructor(props) {
        super(props);
    }

    renderDriverVehicle() {
        return <CardWrap>
            <View style={styles.driverVehicleWrap}>
                <View style={styles.driverInfo}>
                    <View >
                        <Image style={styles.driverVehicleImage} source={images.head}></Image>
                    </View>
                    <Text style={styles.driverVehicleName}>Oded Rabi</Text>
                    <View style={styles.driverPhoneWrap}>
                        <Text style={styles.driverPhoneNum}>+972542033006</Text>
                        <Image style={styles.driverPhoneImage} source={images.phone}></Image>
                    </View>
                </View>
                <View style={styles.vehicleInfo}>
                    <View>
                        <Image style={styles.driverVehicleImage} source={images.head}></Image>
                    </View>
                    <Text  style={styles.driverVehicleName}>Benz 320</Text>
                    <Text  style={[styles.driverVehicleName,styles.vehicleName]}>IL 94-310-23</Text>
                </View>
            </View>
        </CardWrap>
    }

    render() {
        return (
            <View style={styles.homeWrap}>
                <PassengerToDoListPanel></PassengerToDoListPanel>
                <View style={styles.bottomImage}>
                    <Image style={styles.imagecustomService} source={images.customService} />
                </View>
                {/* {this.renderDriverVehicle()} */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeWrap: {
        backgroundColor: "white",
        flex: 1,
    },
    imagecustomService: {
        width: 48,
        height: 48,
        marginRight: 12,
        marginTop: 8,
    },
    bottomImage: {
        height: 60,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        position: 'absolute',
        left: 0,
        right: 0,
        marginBottom: 8,
        bottom: 8,
    },
    // waitingTipWrap: {
    //     zIndex: 100,
    //     position: 'absolute',
    //     top: 40,
    //     left: 12,
    //     flexDirection: 'row',
    //     height: 62,
    //     justifyContent: "center",
    //     alignItems: 'center',
    //     borderWidth: 1,
    //     flex: 1,
    //     width: (SCREEN_WIDTH - 24),
    //     shadowColor: 'black',
    //     shadowOffset: { h: 10, w: 0 },
    //     shadowRadius: 3,
    //     shadowOpacity: 0.8,
    // },
    driverVehicleImageWrap: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    driverVehicleImage: {
        width: 68,
        height: 68,
        borderRadius: 34,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: STColor.LINE_COLOR,
        marginBottom:12,
    },
    driverVehicleWrap: {
        paddingHorizontal:30,
        flex:1,
        flexDirection: 'row',
        // borderWidth: 1,
        justifyContent: 'space-around'
    },
    driverPhoneWrap: {
        flexDirection: 'row',
        height: 18,
        alignItems: 'center',
        marginTop:4,
    },
    driverPhoneNum: {
        color: STColor.MAIN_GREEN,
        fontSize: 12,
        textDecorationLine:'underline',
        marginRight:4,
    },
    driverPhoneImage: {
        width: 8,
        height: 8,
    },
    driverInfo:{
        // borderWidth:1,
        alignItems:'center',
    },
    vehicleInfo:{
        // borderWidth:1,
        alignItems:'center',
    },
    vehicleName:{
        marginTop:4,
    },
    driverVehicleName:{
        color:STColor.FONT_TITLE_COLOR,
        fontSize:14,
    }
    
})


function mapStateTopProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}





export default connect(mapStateTopProps, mapDispatchToProps)(PassengersHomePageView);
