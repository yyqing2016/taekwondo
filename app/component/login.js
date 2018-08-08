import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image
} from 'react-native';

import WiFi from './login@2x_images/WiFi.png'
import MobileSignal from './login@2x_images/MobileSignal.png'
import Battery from './login@2x_images/Battery.png'

export default class Login extends Component {

  render() {
    return (
      <ScrollView style={{
        flex: 1, alignSelf: 'stretch', 
        paddingTop: 20,
        backgroundColor: '#ffffff'}}>
        <View style={styles.gRectangle8}>
          <View style={styles.StatusBarBlack100}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.PinLeft}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.Carrier}>Sketch</Text>
                  <Image source={WiFi} style={styles.WiFi} />
                  <Image source={MobileSignal} style={styles.MobileSignal} />
                </View>
              </View>
              <Text style={styles._941AM}>9:41 AM</Text>
              <View style={styles.PinRight}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles._100}>100%</Text>
                  <Image source={Battery} style={styles.Battery} />
                </View>
              </View>
            </View>
          </View>
          <Text style={styles.gPhonenumber}>Phone number </Text>
          <View style={styles.gRectangle4} />
          <Text style={styles.gPassword}>Password </Text>
          <View style={styles.gRectangle4_4} />
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{flexDirection: 'column'}}>
              <View style={styles.gRectangle3} />
              <Text style={styles.gForgetthepassword}>Forget the password? </Text>
            </View>
          </View>
          <View style={styles.gRectangle2}>
            <Text style={styles.gLOGIN}>LOGIN</Text>
          </View>
          <View style={styles.gRectangle2_10}>
            <Text style={styles.gREGISTER}>REGISTER </Text>
          </View>
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  gRectangle8: {
    height: 667,
    backgroundColor: '#FFFFFF'
  },
  StatusBarBlack100: {
    alignSelf: 'center',
    height: 14,
    alignItems: 'center',
    justifyContent: 'center'
  },
  PinLeft: {
    width: 94,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Carrier: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#030303',
    textAlign: 'right',
    marginRight: 20
  },
  WiFi: {

  },
  MobileSignal: {

  },
  _941AM: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#030303',
    textAlign: 'center'
  },
  PinRight: {
    width: 58,
    alignItems: 'center',
    justifyContent: 'center'
  },
  _100: {
    backgroundColor: 'transparent',
    fontSize: 12,
    fontWeight: 'normal',
    color: '#030303',
    textAlign: 'left'
  },
  Battery: {

  },
  gPhonenumber: {
    backgroundColor: 'transparent',
    fontSize: 15,
    fontWeight: '400',
    color: '#BEBEBE',
    alignSelf: 'flex-end',
    marginTop: 218,
    textAlign: 'right'
  },
  gRectangle4: {
    height: 1,
    backgroundColor: '#CFCFCF',
    alignSelf: 'center',
    marginTop: 8,
    width: 315
  },
  gPassword: {
    backgroundColor: 'transparent',
    fontSize: 15,
    fontWeight: '400',
    color: '#BEBEBE',
    alignSelf: 'flex-end',
    marginTop: 32,
    textAlign: 'right'
  },
  gRectangle4_4: {
    height: 1,
    backgroundColor: '#CFCFCF',
    alignSelf: 'center',
    marginTop: 8,
    width: 315
  },
  gRectangle3: {
    height: 1,
    backgroundColor: '#799D3B',
    width: 155
  },
  gForgetthepassword: {
    backgroundColor: 'transparent',
    fontSize: 14,
    fontWeight: 'normal',
    color: '#799D3B',
    textAlign: 'center'
  },
  gRectangle2: {
    height: 46,
    backgroundColor: '#799D3B',
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: 64,
    width: 315,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gLOGIN: {
    backgroundColor: 'transparent',
    fontSize: 17,
    fontWeight: '400',
    color: '#FFFFFF',
    textAlign: 'center'
  },
  gRectangle2_10: {
    height: 45,
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: 19,
    width: 314,
    alignItems: 'center',
    justifyContent: 'center'
  },
  gREGISTER: {
    backgroundColor: 'transparent',
    fontSize: 17,
    fontWeight: '400',
    color: '#799D3B',
    textAlign: 'center'
  }
})
