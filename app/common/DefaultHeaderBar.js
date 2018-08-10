import React, { Component } from 'react';
import { Image, View, Text, ImageBackground, StyleSheet } from 'react-native';
import image from './../assests/images';

export default class DefaultHeaderBar extends React.Component {
  renderChild(child) {
    if (typeof child === 'function') {
      return child()
    } else {
      return child
    }
  }
  render() {
    return (
      <ImageBackground source={image.topImage} style={[styles.topImage, this.props.bg ? {} : { zIndex: 1000 }]}>
        <View style={styles.navWrap}>
          {this.props.left && <View style={styles.left}>{this.renderChild(this.props.left)}</View>}
          {this.props.center && <View style={styles.center}>{this.renderChild(this.props.center)}</View>}
          {!!this.props.title && <Text style={styles.title}>{this.props.title}</Text>}
          {this.props.right && <View style={styles.right}>{this.renderChild(this.props.right)}</View>}
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  topImage: {
    height: 64,
    flexDirection: 'row',
    // paddingTop:25,
  },
  navWrap: {
    flex: 1,
    position: 'relative',
    flexDirection: 'row',
    height: 64,
    paddingTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 100,
  },
  center: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth:1,
  },
  right: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    // borderWidth:1,
  },
  title: {
    flex: 1,
    // borderWidth:1,
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});
