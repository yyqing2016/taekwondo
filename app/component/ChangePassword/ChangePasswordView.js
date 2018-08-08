import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {SCREEN_WIDTH} from '../../lib/platform';
import LineShowInfo from '../LineShowInfo/LineShowInfo';
import CardWrap from '../CardWrap/CardWrap';
import {Button} from '../Button/Button';

class ChangePasswordView extends Component {
  constructor (props) {
    super (props);
  }

  renderFooter () {
    return (
      <View style={styles.buttonView}>
        <Button wrap={styles.buttonLeft} title="CONFIRM" full size={14} />
        <Button title="CANCEL" full size={14} />
      </View>
    );
  }

  render () {
    return (
      <View style={styles.changePasswordWrap}>
        <CardWrap footer={this.renderFooter.bind (this)}>
          <View style={styles.changePassworList}>
            <LineShowInfo
              type="input"
              iconStyle={styles.iconStyle}
              canEdit={true}
              label="Old Password"
            />
            <LineShowInfo
              type="input"
              iconStyle={styles.iconStyle}
              canEdit={true}
              label="New Password"
            />
            <LineShowInfo
              type="input"
              iconStyle={styles.iconStyle}
              canEdit={true}
              label="Confirm Password"
            />
          </View>
        </CardWrap>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  changePasswordWrap: {
    flex: 1,
  },
  changePassworList: {
    flex: 1,
    backgroundColor: 'white',
    height: 200,
  },
  iconStyle: {
    width: 10,
    height: 16,
  },
  buttonView: {
    width: SCREEN_WIDTH - 48 - 48,
    flex: 1,
    flexDirection: 'row',
    marginTop: 64,
    marginHorizontal: 12,
  },
  buttonLeft: {
    marginRight: 35,
  },
  buttonWrap: {
    height: 48,
    marginHorizontal: 36,
    marginTop: 42,
  },
});

function mapStateTopProps (state) {
  return {};
}

function mapDispatchToProps (dispatch) {
  return {};
}

export default connect (mapStateTopProps, mapDispatchToProps) (
  ChangePasswordView
);
