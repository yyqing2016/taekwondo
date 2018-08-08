import React, {Component} from 'react';

import {
  View,
  StyleSheet,
  Image,
} from 'react-native';

import {connect} from 'react-redux';
import images from '../../assests/images';

class BasisPageHeard extends Component {
  constructor (props) {
    super (props);
  }
  
  render () {
    return (
      <View style={styles.BasisPageHeardWrap}>
        <Image style={styles.BasisPageHeardLogo} source={images.loginLogo} />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
    BasisPageHeardWrap:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    BasisPageHeardLogo: {
        width: 213,
        height: 61,
    },
});

function mapStateTopProps (state) {
  return {};
}

function mapDispatchToProps (dispatch) {
  return {};
}

export default connect (mapStateTopProps, mapDispatchToProps) (BasisPageHeard);
