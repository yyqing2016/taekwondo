import React, { Component } from 'react';

import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import { connect } from 'react-redux';
import { LS } from '../../locales/localized-strings';
import { STColor } from '../../share/styles';
import images from '../../assests/images';
import BasisPageHeard from '../BasisPageHeard/BasisPageHeard';
import Line from '../Home/Line';
import { SMALLEST_BORDER_WIDTH, SCREEN_WIDTH, SCREEN_HEIGHT } from '../../lib/platform';
import LineShowInfo from '../LineShowInfo/LineShowInfo';
import CardWrap from '../CardWrap/CardWrap';
import Button from '../Button/Button';
import IconDot from '../IconDot/IconDot'

class ImprovePersonalDataView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canEdit: false,
    };
  }

  goToSomePage(page) {
    this.props.navigation.navigate(`${page}`)
    // alert("dfasdf")
  }

  renderFooter() {
    return <View style={styles.buttonView}>
      <Button wrap={styles.buttonLeft} title='CONFIRM' full size={14}></Button>
      <Button title='CANCEL' full size={14}></Button>
    </View>
  }

  renderModuleTitle(title) {

    return <View style={styles.moduleTitle}>
      <IconDot color='orange' ></IconDot>
      <Text style={styles.moduleTitleText}>{title}</Text>
    </View>

  }

  render() {
    return (
      <View style={styles.improvePersonalDataWrap}>
        <CardWrap footer={this.renderFooter.bind(this)}>
          <View style={styles.cardInfoWrap}>
            <Text style={styles.contentTitle}>Complete information</Text>
            <LineShowInfo
              hasIcon={false}
              canEdit={true}
              type="text"
              // title="+972542033006"
              // label="Phone number"
              textAlign='right'
              type='input'
              placeholder='Please enter yuor full name'
            />
            <View style={styles.headWrap}>
              <Text style={styles.headLabel}>Add a picture</Text>
              <Image style={styles.headImage} source={images.addPicture} />
            </View>
            {this.renderModuleTitle('Home information')}
            <LineShowInfo
              hasIcon={true}
              canEdit={true}
              type="text"
              textAlign='right'
              click={this.goToSomePage.bind(this, 'LoginView')}
              // title='Please select yuor home address'
              // blackTitle
              placeholder='Please select yuor home address'
            />
            <LineShowInfo
              hasIcon={true}
              canEdit={true}
              type="text"
              // textAlign='right'
              click={this.goToSomePage.bind(this, 'LoginView')}
              placeholder='08:30'
              label="Departure time"
            />
            {this.renderModuleTitle('Home information')}
            <LineShowInfo
              hasIcon={true}
              canEdit={true}
              type='text'
              textAlign='right'
              blackTitle
              click={this.goToSomePage.bind(this, 'FindPasswordView')}
              title="Company default address display"
            />
            <LineShowInfo
              hasIcon={true}
              canEdit={true}
              type='text'
              textAlign='right'
              // blackTitle
              click={this.goToSomePage.bind(this, 'FindPasswordView')}
              label="Departure time"
            />

          </View>
        </CardWrap>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  improvePersonalDataWrap: {
    flex: 1,
  },
  cardInfoWrap: {
    flex: 1,
    backgroundColor: 'white',
    height: SCREEN_HEIGHT - 120
  },
  contentTitle: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: "600",
    paddingBottom: 13,
  },
  headWrap: {
    height: 58,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  headLabel: {
    fontSize: 16,
    color: STColor.MAIN_GREEN,
    marginRight: 16,
  },
  headImage: {
    width: 58,
    height: 58,
  },
  buttonView: {
    width: SCREEN_WIDTH - 48 - 48,
    flex: 1,
    flexDirection: 'row',
    marginTop: 64,
    marginHorizontal: 12
  },
  buttonLeft: {
    marginRight: 35,
  },
  moduleTitle: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 14,
    height: 25,
    alignItems: 'center',
    marginBottom: 9,
    marginTop: 30
  },
  moduleTitleText: {
    color: STColor.MAIN_GREEN,
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 10,
  }

});

function mapStateTopProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateTopProps, mapDispatchToProps)(ImprovePersonalDataView);
