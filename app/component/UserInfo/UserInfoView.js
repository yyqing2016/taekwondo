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
import Button from '../Button/Button'

class UserInfoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canEdit: false,
    };
  }

  goToSomePage(page) {
    this.props.navigation.navigate(`${page}`)
  }

  renderFooter(){
    return  <View style={styles.buttonView}>
    <Button wrap={styles.buttonLeft} title='CONFIRM' full size={14}></Button>
    <Button title='CANCEL' full size={14}></Button>
  </View>
  }

  render() {
    return (
      <View style={styles.userInfoWrap}>
        <Text onPress={() => this.setState({ canEdit: true })}>dfasd</Text>>
        <CardWrap footer={this.renderFooter.bind(this)}>
          <View style={styles.cardInfoWrap}>
            <View style={styles.headWrap}>
              <Text style={styles.headLabel}>Change</Text>
              <Image style={styles.headImage} source={images.head} />
            </View>
            <LineShowInfo
              hasIcon={this.state.canEdit}
              canEdit={this.state.canEdit}
              type="text"
              title="+972542033006"
              label="Phone number"
              type='input'
            />
            <LineShowInfo
              hasIcon={this.state.canEdit}
              canEdit={this.state.canEdit}
              type="text"
              click={this.goToSomePage.bind(this, 'LoginView')}
              title="*********"
              label="Password"
            />
            <LineShowInfo
              hasIcon={this.state.canEdit}
              canEdit={this.state.canEdit}
              title="Helinme"
              click={this.goToSomePage.bind(this, 'FindPasswordView')}
              titleHelinme
              label="Company"
            />
            <LineShowInfo
              hasIcon={this.state.canEdit}
              canEdit={this.state.canEdit}
              type="text"
              title="Oded Rabi"
              label="Name"
              type='input'
            />
          </View>
        </CardWrap>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userInfoWrap: {
    flex: 1,
  },
  cardInfoWrap: {
    flex: 1,
    backgroundColor: 'white',
    height:SCREEN_HEIGHT-184
  },
  headWrap: {
    height: 72,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 34,
  },
  headLabel: {
    fontSize: 16,
    color: STColor.MAIN_GREEN,
    marginRight: 24,
  },
  headImage: {
    width: 72,
    height: 72,
  },
  buttonView:{
    width:SCREEN_WIDTH-48-48,
    flex:1,
    flexDirection:'row',
    marginTop:64,
    marginHorizontal:12
  },
  buttonLeft:{
    marginRight:35,
  }

});

function mapStateTopProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateTopProps, mapDispatchToProps)(UserInfoView);
