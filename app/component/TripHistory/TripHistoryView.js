import React, { Component } from 'react';

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

import { connect } from 'react-redux';
import { LS } from '../../locales/localized-strings';
import { STColor } from '../../share/styles';
import images from '../../assests/images';
import BasisPageHeard from '../BasisPageHeard/BasisPageHeard';
import Line from '../Home/Line';
import { SMALLEST_BORDER_WIDTH } from '../../lib/platform';

class TripHistoryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTab: 'today',
      showModal: 'today',
    }
  }

  changeShowModal(modal) {
    this.setState({ showModal: `${modal}` })
  }

  renderTabBar() {
    return <View style={styles.topTab}>
      <View style={styles.tabBarWrap}>
        <TouchableOpacity onPress={() => this.changeShowModal('today')} style={[styles.tabBarWrapItem, styles.tabBarItemFirst, this.state.showModal === 'today' ? styles.tabBarWrapItemNow : '']}>
          <Text style={[styles.tabBarText, this.state.showModal === 'today' ? styles.tabBarTextNow : '']}>TODAY</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.changeShowModal('week')} style={[styles.tabBarWrapItem, this.state.showModal === 'week' ? styles.tabBarWrapItemNow : '']}>
          <Text style={[styles.tabBarText, this.state.showModal === 'week' ? styles.tabBarTextNow : '']} >WEEK</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => this.changeShowModal('more')} style={[styles.tabBarWrapItem, styles.tabBarItemLast, this.state.showModal === 'more' ? styles.tabBarWrapItemNow : '']}>
          <Text style={[styles.tabBarText, this.state.showModal === 'more' ? styles.tabBarTextNow : '']}>MORE</Text>
        </TouchableOpacity>
      </View>
    </View>

  }
  render() {
    return (
      <View style={styles.tripHistoryWrap}>
        {this.renderTabBar()}
        <View style={styles.tripHistoryWrapItem}>
          <View>
            <Text style={styles.streetName}>From Betsal’el St</Text>
            <Text style={styles.streetName}>To King George St</Text>
          </View>
          <View>
            <View style={styles.lineNameWrap}>
              <Text style={styles.lineName}>No.1 Line</Text>
              <View style={styles.greenDot}></View>
            </View>
            <Text style={styles.time}>08:00 8/1-08:50 8/1</Text>
          </View>
        </View>
        <View style={styles.tripHistoryWrapItem}>
          <View>
            <Text style={styles.streetName}>From Betsal’el St</Text>
            <Text style={styles.streetName}>To King George St</Text>
          </View>
          <View>
            <View style={styles.lineNameWrap}>
              <Text style={styles.lineName}>No.1 Line</Text>
              <View style={styles.greenDot}></View>
            </View>
            <Text style={styles.time}>08:00 8/1-08:50 8/1</Text>
          </View>
        </View>
        <View style={styles.tripHistoryWrapItem}>
          <View>
            <Text style={styles.streetName}>From Betsal’el St</Text>
            <Text style={styles.streetName}>To King George St</Text>
          </View>
          <View>
            <View style={styles.lineNameWrap}>
              <Text style={styles.lineName}>No.1 Line</Text>
              <View style={styles.greenDot}></View>
            </View>
            <Text style={styles.time}>08:00 8/1-08:50 8/1</Text>
          </View>
        </View>
        <View style={styles.tripHistoryWrapItem}>
          <View>
            <Text style={styles.streetName}>From Betsal’el St</Text>
            <Text style={styles.streetName}>To King George St</Text>
          </View>
          <View>
            <View style={styles.lineNameWrap}>
              <Text style={styles.lineName}>No.1 Line</Text>
              <View style={styles.greenDot}></View>
            </View>
            <Text style={styles.time}>08:00 8/1-08:50 8/1</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topTab: {
    backgroundColor: 'white',
    paddingVertical:14,
    marginBottom:2,
  },
  tabBarWrap: {
    flexDirection: 'row',
    marginHorizontal: 12,
    // flex:1,
    // borderWidth:1,
  },
  tabBarWrapItem: {
    flex: 1,
    height: 44,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: STColor.MAIN_GREEN
  },
  tabBarItemFirst: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  tabBarWrapItemNow: {
    backgroundColor: STColor.MAIN_GREEN
  },
  tabBarItemLast: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  tabBarText: {
    fontSize: 16,
    fontWeight: "200",
    color: STColor.MAIN_GREEN
  },
  tabBarTextNow: {
    color: "white"
  },
  tripHistoryWrap: {
    flex: 1,
  },
  tripHistoryWrapItem: {
    backgroundColor: 'white',
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: SMALLEST_BORDER_WIDTH,
    borderBottomColor: STColor.LINE_COLOR,
    paddingVertical: 21,
  },
  streetName: {
    fontSize: 14,
    color: STColor.PHONE_UNDERLINE_COLOR,

  },
  lineNameWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  lineName: {
    fontSize: 16,
    color: STColor.FONT_TITLE_COLOR,
    fontWeight: '600',
  },
  greenDot: {
    width: 4,
    height: 4,
    backgroundColor: STColor.DOT_GREEN_COLOR,
    borderRadius: 2,
    marginLeft: 8,
  },
  time: {
    color: STColor.FONT_LABEL_COLOR,
    fontSize: 13
  }
});

function mapStateTopProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateTopProps, mapDispatchToProps)(TripHistoryView);
