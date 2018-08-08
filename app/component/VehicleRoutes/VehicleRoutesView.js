import React, { Component } from 'react';

import { View, StyleSheet, Image, Text } from 'react-native';

import { connect } from 'react-redux';
import { SCREEN_WIDTH } from '../../lib/platform';
import LineShowInfo from '../LineShowInfo/LineShowInfo';
import { Button } from '../Button/Button';
import { STColor } from '../../share/styles';
import images from '../../assests/images';
import { SMALLEST_BORDER_WIDTH } from '../../lib/platform';

class VehicleRoutesView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canEdit: false,
        };
    }

    render() {
        return (
            <View style={styles.routesWrap}>
                <View style={styles.routesItem}>
                    <View>
                        <View style={styles.routesInfo}>
                            <View style={styles.greenDot} />
                            <View>
                                <Text style={styles.title}>From</Text>
                            </View>
                            <Text style={styles.routeDetail}>Betsal’el St</Text>
                        </View>
                        <View style={styles.routesInfo}>
                            <View style={styles.greenDot} />
                            <View>
                                <Text style={styles.title}>To</Text>
                            </View>
                            <Text style={styles.routeDetail}>Betsal’el St</Text>
                        </View>
                    </View>
                    <View style={styles.routeEditWrap}>
                        <Text style={styles.routeName}>Route 1</Text>
                        {false && <Image style={styles.yes} source={images.yes} />}
                        <View style={styles.yesWrap}>
                            <Image style={styles.yesChoosed} source={images.yes} />
                        </View>
                    </View>
                </View>
                <View style={styles.routesItem}>
                    <View>
                        <View style={styles.routesInfo}>
                            <View style={styles.greenDot} />
                            <View>
                                <Text style={styles.title}>From</Text>
                            </View>
                            <Text style={styles.routeDetail}>Betsal’el St</Text>
                        </View>
                        <View style={styles.routesInfo}>
                            <View style={styles.greenDot} />
                            <View>
                                <Text style={styles.title}>To</Text>
                            </View>
                            <Text style={styles.routeDetail}>Betsal’el St</Text>
                        </View>
                    </View>
                    <View style={styles.routeEditWrap}>
                        <Text style={styles.routeName}>Route 1</Text>
                        {false && <Image style={styles.yes} source={images.yes} />}
                        <View style={styles.yesWrap}>
                            <Image style={styles.yesChoosed} source={images.yes} />
                        </View>
                    </View>
                </View>
                <View style={styles.routesItem}>
                    <View>
                        <View style={styles.routesInfo}>
                            <View style={styles.greenDot} />
                            <View>
                                <Text style={styles.title}>From</Text>
                            </View>
                            <Text style={styles.routeDetail}>Betsal’el St</Text>
                        </View>
                        <View style={styles.routesInfo}>
                            <View style={styles.greenDot} />
                            <View>
                                <Text style={styles.title}>To</Text>
                            </View>
                            <Text style={styles.routeDetail}>Betsal’el St</Text>
                        </View>
                    </View>
                    <View style={styles.routeEditWrap}>
                        <Text style={styles.routeName}>Route 1</Text>
                        {false && <Image style={styles.yes} source={images.yes} />}
                        <View style={styles.yesWrap}>
                            <Image style={styles.yesChoosed} source={images.yes} />
                        </View>
                    </View>
                </View>
                <View style={styles.routesItem}>
                    <View>
                        <View style={styles.routesInfo}>
                            <View style={styles.greenDot} />
                            <View>
                                <Text style={styles.title}>From</Text>
                            </View>
                            <Text style={styles.routeDetail}>Betsal’el St</Text>
                        </View>
                        <View style={styles.routesInfo}>
                            <View style={styles.greenDot} />
                            <View>
                                <Text style={styles.title}>To</Text>
                            </View>
                            <Text style={styles.routeDetail}>Betsal’el St</Text>
                        </View>
                    </View>
                    <View style={styles.routeEditWrap}>
                        <Text style={styles.routeName}>Route 1</Text>
                        {false && <Image style={styles.yes} source={images.yes} />}
                        <View style={styles.yesWrap}>
                            <Image style={styles.yesChoosed} source={images.yes} />
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    routesWrap: {
        flex: 1,
    },
    greenDot: {
        backgroundColor: STColor.MAIN_GREEN,
        width: 6,
        height: 6,
        borderRadius: 3,
        marginRight: 10,
    },
    routesInfo: {
        flexDirection: 'row',
        height: 22,
        alignItems: 'center',
    },
    title: {
        fontSize: 15,
        color: STColor.FONT_TITLE_COLOR,
        marginRight: 12,
    },
    routeDetail: {
        fontSize: 15,
        color: STColor.FONT_TITLE_COLOR
    },
    routesItem: {
        paddingLeft: 20,
        paddingRight: 24,
        flexDirection: 'row',
        height: 87,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: SMALLEST_BORDER_WIDTH,
        borderBottomColor: STColor.AVATAR_BODER_COLOR,
    },
    routeEditWrap: {
        flexDirection: 'row',
    },
    routeName: {
        color: STColor.FONT_GREEN_COLOR,
        fontSize: 18,
        marginRight: 16,
    },
    yes: {
        width: 18,
        height: 13,
    },
    yesWrap: {
        borderWidth: 20,
        height: 20,
        borderWidth: 1,
        borderColor: STColor.AVATAR_BODER_COLOR,
        backgroundColor: 'pink',
    },
    yesChoosed: {
        color: 'white',
        width: 18,
        height: 13,
    },
});

function mapStateTopProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateTopProps, mapDispatchToProps)(
    VehicleRoutesView
);
