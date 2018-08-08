import React, { Component } from 'react';

import { View, StyleSheet,Text } from 'react-native';

import { connect } from 'react-redux';
import { SCREEN_WIDTH } from '../../lib/platform';

class CardWrap extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.cardWrap}>
                <View style={styles.cardInner}>
                    {this.props.children}
                </View>
                {this.props&&this.props.footer&&<View style={styles.footer}>
                   {this.props.footer()}
                </View>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardWrap: {
        zIndex: 100,
        position: 'absolute',
        // top: 60,
        left: 12,
        flex: 1,
        borderRadius:6,
        // shadowColor: 'black',
        // shadowOffset: { h: 10, w: 0 },
        // shadowRadius: 3,
        // shadowOpacity: 0.8,
    },
    cardInner: {
        backgroundColor:'white',
        padding:10,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        borderWidth: 1,
        borderRadius:6,
        borderColor: '#ABBDA3',
        flex: 1,
        width: (SCREEN_WIDTH - 24),
        shadowColor: 'transparent',
        shadowOffset: { h: 0, w: 0 },
        shadowRadius: 0,
        shadowOpacity: 0,
        shadowColor: 'transparent'
    },
    footer:{
        position:'absolute',
        left:36,
        bottom:-22,
        flex:1,
    }
});

function mapStateTopProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateTopProps, mapDispatchToProps)(CardWrap);
