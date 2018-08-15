import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {TaekwondoColor} from '../../share/styles';
import images from '../../assests/images';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  SMALLEST_BORDER_WIDTH,
  SCALE,
} from '../../lib/platform';
import {Button} from '../TButton/Button';

class OngoingClassComponentView extends Component {
  static navigationOptions = () => ({
    header: null,
  });
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <View>
        <View style={[styles.flexRow, styles.topWrap]}>
          <View>
            <View style={[styles.flexRow, styles.timeWrap]}>
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
        <ScrollView style={styles.goingItemWrap}>
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
                  <Button title="Checked in" full size={28 / SCALE} />
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
                  <Button title="Checked in" full size={28 / SCALE} />
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
                  <Button title="Checked in" full size={28 / SCALE} />
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
                  <Button title="Checked in" full size={28 / SCALE} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.arrowDownWrap}>
          <Image style={styles.arrowDown} source={images.arrowDown} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  topWrap: {
    height: 174 / SCALE,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 36 / SCALE,
    borderBottomColor: TaekwondoColor.LINE_COLOR,
    borderBottomWidth: SMALLEST_BORDER_WIDTH,
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goingTime: {
    color: TaekwondoColor.LIGHR_RED,
    fontSize: 38 / SCALE,
  },
  title: {
    color: TaekwondoColor.LIGHR_RED,
    fontSize: 36 / SCALE,
  },
  font: {
    color: TaekwondoColor.FONT_COLOR,
    fontSize: 28 / SCALE,
  },
  buttonWrap: {
    width: 224 / SCALE,
    height: 64 / SCALE,
  },
  goingItemWrap: {
    maxHeight: 354 / SCALE,
  },
  goingItem: {
    height: 118 / SCALE,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 36 / SCALE,
    borderBottomColor: TaekwondoColor.LINE_COLOR,
    borderBottomWidth: SMALLEST_BORDER_WIDTH,
  },
  goingNum: {
    color: TaekwondoColor.FONT_LABEL,
    fontSize: 28 / SCALE,
    marginRight: 37 / SCALE,
  },
  goingFont: {
    color: TaekwondoColor.FONT_COLOR,
    fontSize: 28 / SCALE,
  },
  goingName: {
    fontSize: 28 / SCALE,
  },
  timeWrap: {
    marginBottom: 30 / SCALE,
  },
  clock: {
    width: 32 / SCALE,
    height: 32 / SCALE,
    marginRight: 12 / SCALE,
  },
  peopleGroup: {
    width: 32 / SCALE,
    height: 30 / SCALE,
    marginRight: 12 / SCALE,
  },
  yes: {
    width: 27 / SCALE,
    height: 18 / SCALE,
    marginRight: 10 / SCALE,
  },
  no: {
    width: 28 / SCALE,
    height: 28 / SCALE,
    marginRight: 9 / SCALE,
  },
  iconSpacing: {
    marginRight: 30 / SCALE,
    alignItems: 'center',
  },
  people: {
    width: 96 / SCALE,
    height: 96 / SCALE,
    borderRadius: 48 / SCALE,
  },
  peopleWrap: {
    alignItems: 'center',
  },
  goingNumTip: {
    fontSize: 28 / SCALE,
  },
  yesCircle: {
    width: 45 / SCALE,
    height: 45 / SCALE,
    marginRight: 39 / SCALE,
  },
  listAvatar: {
    width: 80 / SCALE,
    height: 80 / SCALE,
    borderRadius: 40 / SCALE,
    marginRight: 21 / SCALE,
  },
  arrowDown: {
    width: 27 / SCALE,
    height: 15 / SCALE,
  },
  arrowDownWrap: {
    height: 90 / SCALE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function mapStateTopProps (state) {
  return {};
}

function mapDispatchToProps (dispatch) {
  return {};
}

export default connect (mapStateTopProps, mapDispatchToProps) (
  OngoingClassComponentView
);
