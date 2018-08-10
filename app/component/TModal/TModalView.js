import React, { Component } from 'react';

import { View, StyleSheet, Text, Modal, TouchableHighlight, Image } from 'react-native';

import { connect } from 'react-redux';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../../../lib/platform';
import images from '../../../assests/images';

class TModalView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true
        }
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={styles.wrap}>
                <Modal
                    animationType={"slide"}
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { alert("Modal has been closed.") }}
                >
                    <View style={styles.mask}>
                        <View style={styles.contentIconWrap}>
                            <TouchableHighlight onPress={() => {
                                this.setModalVisible(false)
                            }}>
                                <Image style={styles.modalClose} source={images.modalClose} />
                            </TouchableHighlight>
                            <View style={styles.contentWrap}>
                                {this.props.children}
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        position: 'absolute',
        zIndex: 9999,
    },
    mask: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.65)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 64,
    },
    modalClose: {
        width: 27,
        height: 64
    },
    contentIconWrap: {
        width: SCREEN_WIDTH - 14 - 14,
    },
    contentWrap: {
        width:'100%',
        backgroundColor: 'white',
        borderRadius: 3,
    },

});

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(TModalView);
