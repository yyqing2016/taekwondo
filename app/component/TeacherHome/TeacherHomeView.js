import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import { TaekwondoColor } from '../../share/styles';
import images from '../../assests/images';
import { SCREEN_WIDTH, SCREEN_HEIGHT, SMALLEST_BORDER_WIDTH } from '../../lib/platform';
import { Button } from '../TButton/Button';
import TModalView from '../TModal/TModalView';

class TeacherHomeView extends Component {

    static navigationOptions = () => (
        {
            header: null
        })
    constructor(props) {
        super(props);
    }

    render() {
        let Array = ['09:00-10:00', '11:00-12:00', '13:30-14:30']
        return (
            <View style={styles.teacherWrap}>
                <ImageBackground style={styles.teacherBg} source={images.teacherBg}>
                    <Text style={styles.topFont}>13 MAY 2018, SUNDAY</Text>
                    <View style={[styles.flexRow, styles.topWrap]}>
                        <TouchableOpacity style={styles.arrowWrap}>
                            <Image style={styles.arrow} source={images.arrowLeft} />
                        </TouchableOpacity>
                        <View style={[styles.flexRow, styles.BtnViewWrap]}>
                            <Button wrap={styles.btnWrap} full title='Today' focused />
                            <Button wrap={styles.btnWrap} full color='white' fontColor={TaekwondoColor.DARK_BLUE} title='Week' />
                            <Button wrap={styles.btnWrap} full color='white' fontColor={TaekwondoColor.DARK_BLUE} title='Month' />
                        </View>
                        <TouchableOpacity style={styles.arrowWrap}>
                            <Image style={styles.arrow} source={images.arrowRight} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <View style={styles.listWrap}>
                    <View style={[styles.flexRow, styles.listItemWrap]}>
                        <View style={styles.timeWrap}>
                            <Text style={styles.time}>09:00</Text>
                        </View>
                        <View style={[styles.flexRow, styles.listItemContent, styles.listItemWrapHasContnet]}>
                            <View>
                                <Text style={styles.type}>Private Class</Text>
                                <Text style={styles.name}>Shek Tong Tsui</Text>
                            </View>
                            <Button wrap={styles.listBtnWrap} full color={TaekwondoColor.DARK_BLUE} title='Detail' />
                        </View>
                    </View>
                    <View style={[styles.flexRow, styles.listItemWrap]}>
                        <View style={styles.timeWrap}>
                            <Text style={styles.time}>10:00</Text>
                        </View>
                        {/* <View style={[styles.flexRow, styles.listItemContent]}>
                            <View>
                                <Text style={styles.type}>Private Class</Text>
                                <Text style={styles.name}>Shek Tong Tsui</Text>
                            </View>
                            <Button wrap={styles.listBtnWrap} full color={TaekwondoColor.DARK_BLUE} title='Detail' />
                        </View> */}
                    </View>
                    <View style={[styles.flexRow, styles.listItemWrap]}>
                        <View style={styles.timeWrap}>
                            <Text style={styles.time}>11:00</Text>
                        </View>
                        <View style={[styles.flexRow, styles.listItemContent, styles.listItemWrapHasContnet]}>
                            <View>
                                <Text style={styles.type}>Private Class</Text>
                                <Text style={styles.name}>Shek Tong Tsui</Text>
                            </View>
                            <Button wrap={styles.listBtnWrap} full color={TaekwondoColor.DARK_BLUE} title='Ongoing' />
                        </View>
                    </View>
                    <View style={[styles.flexRow, styles.listItemWrap]}>
                        <View style={styles.timeWrap}>
                            <Text style={styles.time}>12:00</Text>
                        </View>
                    </View>
                    <View style={[styles.flexRow, styles.listItemWrap]}>
                        <View style={styles.timeWrap}>
                            <Text style={styles.time}>13:00</Text>
                        </View>
                    </View>
                    <View style={[styles.flexRow, styles.listItemWrap]}>
                        <View style={styles.timeWrap}>
                            <Text style={styles.time}>14:00</Text>
                        </View>
                        <View style={[styles.flexRow, styles.listItemContent, styles.listItemWrapHasContnet]}>
                            <View>
                                <Text style={styles.type}>Private Class</Text>
                                <Text style={styles.name}>Shek Tong Tsui</Text>
                            </View>
                            <Button wrap={styles.listBtnWrap} full title='Start Now' />
                        </View>
                    </View>
                    <View style={[styles.flexRow, styles.listItemWrap]}>
                        <View style={styles.timeWrap}>
                            <Text style={styles.time}>15:00</Text>
                        </View>
                    </View>
                    <View style={[styles.flexRow, styles.listItemWrap]}>
                        <View style={styles.timeWrap}>
                            <Text style={styles.time}>16:00</Text>
                        </View>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    teacherWrap: {
        flex: 1,
    },
    teacherBg: {
        width: '100%',
        height: 165,
        justifyContent: 'center',
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    BtnViewWrap: {
        flex: 1,
        height: 32,
        paddingHorizontal: 18,
    },
    topWrap: {
        marginHorizontal: 32,
    },
    arrow: {
        width: 8,
        height: 15,

    },
    arrowWrap: {
        padding: 10,
    },
    topFont: {
        color: 'white',
        fontSize: 16,
        marginBottom: 34,
        textAlign: 'center'
    },
    btnWrap: {
        marginHorizontal: 3,
    },
    listBtnWrap: {
        maxWidth: 78,
        height: 32,
    },
    listWrap: {
        backgroundColor:'white',
        flex: 1,
    },
    listItemWrap: {
        height: 58,
        borderBottomWidth: SMALLEST_BORDER_WIDTH,
        borderBottomColor: TaekwondoColor.LINE_COLOR,
    },
    listItemWrapHasContnet:{
        height: 58,
        backgroundColor:TaekwondoColor.BACKGROUND_COLOR_GREY,
        borderLeftColor: TaekwondoColor.DARK_BLUE,
        borderLeftWidth: 1,
    },
    timeWrap: {
        width: 73,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 58,
        borderRightWidth: SMALLEST_BORDER_WIDTH,
        borderRightColor: TaekwondoColor.LINE_COLOR,
    },
    time: {
        color: TaekwondoColor.FONT_LABEL,
        fontSize: 13,
    },
    listItemContent: {
        flex: 1,
        justifyContent: 'space-between',
        paddingLeft: 14,
        paddingRight: 22,
    },
    type: {
        color: TaekwondoColor.FONT_COLOR,
        fontSize: 13,
        fontWeight: '800',
    },
    name: {
        color: TaekwondoColor.FONT_LABEL,
        fontSize: 13,
    },

});

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeacherHomeView);
