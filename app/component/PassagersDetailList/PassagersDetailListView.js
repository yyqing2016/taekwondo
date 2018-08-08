import React, {Component} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

import {connect} from 'react-redux';
import {LS} from '../../locales/localized-strings';
import {STColor} from '../../share/styles';
import images from '../../assests/images';
import BasisPageHeard from '../BasisPageHeard/BasisPageHeard';
import Line from '../Home/Line';

class PassengersDetailListView extends Component {
  constructor (props) {
    super (props);
  }

  doLogin () {
    console.log (this.state);
  }

  render () {
    return (
      <View style={styles.passengersDetailList}>
        <View style={styles.passengersDetailListItem}>
          <View style={[styles.flexRow, styles.peopleInfo]}>
            <View style={styles.imageheadWrap}>
              <Image style={styles.imagehead} source={images.head} />
            </View>
            <View style={styles.peopleInfoText}>
              <Text style={styles.passengerName}>PEftudf dfads</Text>
              <View style={[styles.flexRow, styles.phoneWrap]}>
                <Image style={styles.imagePhone} source={images.phone} />
                <Text style={styles.peoplePhone}>+434142341123471</Text>
              </View>
            </View>
          </View>
          <Line />
          <View style={[styles.flexRow, styles.routeInfo]}>
            <View style={[styles.routeInfoFrom]}>
              <Text style={[styles.routeTitle, styles.routeTitleFrom]}>
                From
              </Text>
              <View style={[styles.flexRow, styles.routeSamllItem]}>
                <Image
                  style={styles.imagelocationJian}
                  source={images.locationJian}
                />
                <Text style={styles.streetName}>Betddf's St</Text>
              </View>
              <View style={[styles.flexRow, styles.routeSamllItem]}>
                <Image
                  style={styles.imageClockYellow}
                  source={images.clockYellow}
                />
                <Text>08:10 AM</Text>
              </View>
            </View>
            <View style={styles.routeInfoItem}>
              <Text style={styles.routeTitle}>To</Text>
              <Text style={[styles.flexRow, styles.routeSamllItem]}>
                King GDSdds St
              </Text>
              <View style={[styles.flexRow, styles.routeSamllItem]}>
                <Image
                  style={styles.imagePeopleSitdown}
                  source={images.peopleSitdown}
                />
                <Text>Borarded</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.passengersDetailListItem}>
          <View style={[styles.flexRow, styles.peopleInfo]}>
            <View style={styles.imageheadWrap}>
              <Image style={styles.imagehead} source={images.head} />
            </View>
            <View style={styles.peopleInfoText}>
              <Text style={styles.passengerName}>PEftudf dfads</Text>
              <View style={[styles.flexRow, styles.phoneWrap]}>
                <Image style={styles.imagePhone} source={images.phone} />
                <Text style={styles.peoplePhone}>+434142341123471</Text>
              </View>
            </View>
          </View>
          <Line />
          <View style={[styles.flexRow, styles.routeInfo]}>
            <View style={[styles.routeInfoFrom]}>
              <Text style={[styles.routeTitle, styles.routeTitleFrom]}>
                From
              </Text>
              <View style={[styles.flexRow, styles.routeSamllItem]}>
                <Image
                  style={styles.imagelocationJian}
                  source={images.locationJian}
                />
                <Text style={styles.streetName}>Betddf's St</Text>
              </View>
              <View style={[styles.flexRow, styles.routeSamllItem]}>
                <Image
                  style={styles.imageClockYellow}
                  source={images.clockYellow}
                />
                <Text>08:10 AM</Text>
              </View>
            </View>
            <View style={styles.routeInfoItem}>
              <Text style={styles.routeTitle}>To</Text>
              <Text style={[styles.flexRow, styles.routeSamllItem]}>
                King GDSdds St
              </Text>
              <View style={[styles.flexRow, styles.routeSamllItem]}>
                <Image
                  style={styles.imagePeopleSitdown}
                  source={images.peopleSitdown}
                />
                <Text>Borarded</Text>
              </View>
            </View>
          </View>
          <View />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  passengersDetailList: {
    flex: 1,
    padding: 12,
  },
  passengersDetailListItem: {
    // borderWidth: 1,
    marginBottom: 4,
    backgroundColor: 'white',
  },
  flexRow: {
    flexDirection: 'row',
  },
  imagehead: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  imageheadWrap: {
    marginLeft:30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: STColor.AVATAR_BODER_COLOR,
  },
  imagePhone: {
    width: 16,
    height: 16,
    marginRight:6,
  },
  imageClockYellow: {
    width: 14,
    height: 14,
    marginRight: 4,
  },
  imagelocationJian: {
    width: 12,
    height: 16,
    marginRight: 4,
  },
  imagePeopleSitdown: {
    width: 12,
    height: 13,
    marginRight: 4,
  },
  peopleInfo: {
    justifyContent: 'center',
    height: 80,
    alignItems: 'center',
    // borderWidth: 1,
  },
  peopleInfoText: {
    // flex:1,
    marginLeft: 80,
    justifyContent: 'space-between',
    // borderWidth:1,
  },
  peoplePhone: {
    marginLeft: 4,
    fontSize: 14,
    lineHeight: 20,
    color: STColor.MAIN_GREEN,
    textDecorationLine: 'underline',
    textDecorationColor: STColor.PHONE_UNDERLINE_COLOR,
  },
  passengerName: {
    color: STColor.FONT_TITLE_COLOR,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign:'center'
  },
  phoneWrap: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  routeInfo: {
    justifyContent: 'center',
  },
  routeInfoFrom: {
    marginRight: 100,
  },
  routeInfoItem: {
    alignItems: 'center',
  },
  routeTitle: {
    marginBottom: 8,
    fontSize: 16,
    color: STColor.FONT_TITLE_COLOR,
  },
  routeTitleFrom: {
    textAlign: 'center',
  },
  streetName: {
    fontSize: 15,
    color: STColor.FONT_TITLE_COLOR,
  },
  routeSamllItem: {
    height: 30,
    lineHeight:30,
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth:1,
  },
});

function mapStateTopProps (state) {
  return {};
}

function mapDispatchToProps (dispatch) {
  return {};
}

export default connect (mapStateTopProps, mapDispatchToProps) (
  PassengersDetailListView
);
