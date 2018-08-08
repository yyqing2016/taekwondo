import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
} from 'react-native';

import { connect } from 'react-redux';
import { STColor } from '../../share/styles';
import images from '../../assests/images';
import { SCREEN_WIDTH } from '../../lib/platform';

class NotificationView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.notificationWrap}>
                <ScrollView horizontal style={styles.notificationItem}>
                    <View style={styles.deleteWrap}>
                        <Image style={styles.delete} source={images.delete} />
                    </View>
                    <View style={styles.mainContent}>
                        <View style={[styles.flexRow, styles.notificationInfo]}>
                            <View style={styles.flexRow}>
                                <Image style={styles.left} source={images.left} />
                                <Text>09:36</Text>
                            </View>
                            <View style={styles.flexRow}>
                                <Text>A New Order</Text>
                                <View style={styles.greenDot}></View>
                            </View>
                        </View>
                        <Text style={styles.content}>Your reservation to work on Jan 13, 2018 has rec, it is waiting for confirmation.</Text>
                    </View>

                </ScrollView>
                <ScrollView horizontal style={styles.notificationItem}>
                    <View style={styles.deleteWrap}>
                        <Image style={styles.delete} source={images.delete} />
                    </View>
                    <View style={styles.mainContent}>
                        <View style={[styles.flexRow, styles.notificationInfo]}>
                            <View style={styles.flexRow}>
                                <Image style={styles.left} source={images.left} />
                                <Text>09:36</Text>
                            </View>
                            <View style={styles.flexRow}>
                                <Text>A New Order</Text>
                                <View style={styles.greenDot}></View>
                            </View>
                        </View>
                        <Text style={styles.content}>Your reservation to work on Jan 13, 2018 has rec, it is waiting for confirmation.</Text>
                    </View>

                </ScrollView>
                <ScrollView horizontal style={styles.notificationItem}>
                    <View style={styles.deleteWrap}>
                        <Image style={styles.delete} source={images.delete} />
                    </View>
                    <View style={styles.mainContent}>
                        <View style={[styles.flexRow, styles.notificationInfo]}>
                            <View style={styles.flexRow}>
                                <Image style={styles.left} source={images.left} />
                                <Text>09:36</Text>
                            </View>
                            <View style={styles.flexRow}>
                                <Text>A New Order</Text>
                                <View style={styles.greenDot}></View>
                            </View>
                        </View>
                        <Text style={styles.content}>Your reservation to work on Jan 13, 2018 has rec, it is waiting for confirmation.</Text>
                    </View>

                </ScrollView>
                {/* <View style={styles.notificationItem}>
                    <View style={[styles.flexRow, styles.notificationInfo]}>
                        <View style={styles.flexRow}>
                            <Image style={styles.left} source={images.left} />
                            <Text>09:36</Text>
                        </View>
                        <View style={styles.flexRow}>
                            <Text>A New Order</Text>
                            <View style={styles.greenDot}></View>
                        </View>
                    </View>
                    <Text style={styles.content}>Your reservation to work on Jan 13, 2018 has rec, it is waiting for confirmation.</Text>
                </View>
                <View style={styles.notificationItem}>
                    <View style={[styles.flexRow, styles.notificationInfo]}>
                        <View style={styles.flexRow}>
                            <Image style={styles.left} source={images.left} />
                            <Text>09:36</Text>
                        </View>
                        <View style={styles.flexRow}>
                            <Text>A New Order</Text>
                            <View style={styles.greenDot}></View>
                        </View>
                    </View>
                    <Text style={styles.content}>Your reservation to work on Jan 13, 2018 has rec, it is waiting for confirmation.</Text>
                </View> */}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    notificationWrap: {
        // flex: 1,
    },
    notificationItem: {
        backgroundColor: 'white',
        marginBottom: 2,
        marginLeft:-96,
        // borderWidth:1,
    },
    content: {
        marginTop: 8,
        color: STColor.FONT_LABEL_COLOR
    },

    greenDot: {
        backgroundColor: STColor.MAIN_GREEN,
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 12,
    },
    left: {
        width: 8,
        height: 12,
        marginRight: 12,
    },
    flexRow: {
        flexDirection: 'row',
        height: 25,
        alignItems: 'center'
    },
    notificationInfo: {
        height: 25,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    mainContent: {
        width: SCREEN_WIDTH,
        paddingHorizontal: 16,
        paddingVertical: 16,
        height:100,
    },
    deleteWrap: {
        height:109,
        width: 96,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: STColor.MAIN_GREEN
    },
    delete: {
        width: 32,
        height: 32
    }
});

function mapStateTopProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateTopProps, mapDispatchToProps)(NotificationView);
