import React, { Component } from 'react';

import { View, StyleSheet, Text, Modal, TouchableHighlight, Image } from 'react-native';

import { connect } from 'react-redux';
import { SCREEN_WIDTH, SCREEN_HEIGHT, SMALLEST_BORDER_WIDTH } from '../../lib/platform';
import images from '../../assests/images';
import TModalView from '../TModal/TModalView';
import { TaekwondoColor } from '../../share/styles';
import { Button } from '../TButton/Button';
import SwitchButton from '../SwitchButton/SwitchButtonView'

class ProfileView extends Component {
    
    static navigationOptions = () => (
        {
            header: null
        })

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
                <View style={styles.avatarBigWrap}>
                    <Image style={styles.avatarBig} source={images.avatar3} />
                    <View style={[styles.flexRow, styles.infoWrap]}>
                        <View>
                            <Text style={styles.name}>Vinson La</Text>
                            <View style={[styles.flexRow, styles.medalWrap]}>
                                <Image style={styles.medal} source={images.medal} />
                                <Text style={styles.name}>Black Belt</Text>
                            </View>
                        </View>

                        <Button color={TaekwondoColor.MAIN_GREEN} full wrap={styles.btnWrap} title={'Change'} />
                    </View>
                </View>
                <View>
                    <View style={[styles.flexRow, styles.itemWrap]}>
                        <Text>Class History</Text>
                        <View style={styles.flexRow}>
                            <Text>Value</Text>
                            <Image style={styles.arrowLeftGrey} source={images.arrowLeftGrey} />
                        </View>
                    </View>
                    <View style={[styles.flexRow, styles.itemWrap]}>
                        <Text>Class History</Text>
                        <View style={{ height: 23, }}>
                            <SwitchButton></SwitchButton>
                        </View>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    name: {
        color: 'white',
        fontSize: 14,
        marginBottom: 8,
    },
    medal: {
        width: 10,
        height: 13,
        marginRight: 6,
        marginBottom: 7,
    },
    avatarBig: {
        width: 76,
        height: 76,
        borderRadius: 38,
        marginBottom: 9,
        borderWidth: 4,
        borderColor: "#5E619A",
    },
    avatarBigWrap: {
        height: 215,
        backgroundColor: TaekwondoColor.TITLE_BG_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnWrap: {
        width: 80,
        maxWidth: 80,
        position: 'absolute',
        right: 13,
    },
    infoWrap: {
        width: '100%',
        justifyContent: 'center',
        position: 'relative',
    },
    itemWrap: {
        height: 54,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 13,
        paddingRight: 13,
        borderBottomColor: TaekwondoColor.INPUT_BORDER_GREY,
        borderBottomWidth: SMALLEST_BORDER_WIDTH,
    },
    arrowLeftGrey: {
        width: 9,
        height: 16,
        marginLeft: 12,
    },


});

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
