import React, { Component } from 'react';

import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { TaekwondoColor, STColor } from '../../share/styles'

import { connect } from 'react-redux';

export class TabBarItemView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { ...others } = this.props
        return (
            <Image style={this.props.iconStyle} source={this.props.focused ? this.props.selectedImage : this.props.normalImage} />
        );
    }
}

const styles = StyleSheet.create({

});

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(TabBarItemView);
