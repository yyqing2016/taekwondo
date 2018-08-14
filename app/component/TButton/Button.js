import React, { Component } from 'react';

import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { TaekwondoColor } from '../../share/styles'

import { connect } from 'react-redux';

export class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { ...others } = this.props
        return (
            <TouchableOpacity  {...others} style={[styles.button, this.props.full ? styles.buttonFull : styles.buttonNotFull,
            this.props.wrap ? this.props.wrap : '', this.props.disabled ? styles.disabled : {},
            this.props.color ? { backgroundColor: this.props.color } : {},
            ]} >
                <Text style={[this.props.full ? styles.buttonFullText : styles.buttonNotFullText,
                { fontSize: this.props.size > 0 ? this.props.size : 14 },
                this.props.disabled ? styles.buttonFullText : {},
                this.props.fontColor ? { color: this.props.fontColor } : {},
                this.props.focused ? { fontWeight: '800' } : {}
                ]}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        height: 44,
        borderRadius: 2,
        maxHeight: 44,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonFull: {
        backgroundColor: TaekwondoColor.LIGHR_RED
    },
    buttonFullText: {
        color: 'white',
    },
    buttonNotFull: {
        borderWidth: 1,
        borderColor: TaekwondoColor.LIGHR_RED
    },
    disabled: {
        borderColor: TaekwondoColor.FONT_LABEL,
        borderWidth: 1,
        backgroundColor: TaekwondoColor.FONT_LABEL,
    },
    buttonNotFullText: {
        color: TaekwondoColor.MAIN_BLUE,
    }
});

function mapStateTopProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateTopProps, mapDispatchToProps)(Button);
