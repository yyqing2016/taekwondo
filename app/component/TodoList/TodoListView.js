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

class TodoListView extends Component {

    static navigationOptions = () => (
        {
            header: null
        })
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                {/* <TModalView>
                    <View style={[styles.searchTopWrap, styles.flexRow]}>
                        <View style={[styles.searchTopInputWrap, styles.flexRow]}>
                            <TextInput placeholder='Keyword' underlineColorAndroid='transparent' style={styles.input} />
                            <Image style={styles.delete} source={images.delete} />
                        </View>
                        <Image style={styles.search} source={images.search} />
                    </View>
                    <View style={[styles.searchItem, styles.flexRow]}>
                        <View style={[styles.topAvatarWrap, styles.flexRow]}>
                            <Image style={styles.avatar} source={images.avatar2} />
                            <Text style={styles.name}>Kylie Wong</Text>
                        </View>
                        <View style={styles.topBtnWrap}>
                            <Button color={TaekwondoColor.MAIN_GREEN} full title='REVOKE' />
                        </View>
                    </View>
                    <View style={[styles.searchItem, styles.flexRow]}>
                        <View style={[styles.topAvatarWrap, styles.flexRow]}>
                            <Image style={styles.avatar} source={images.avatar2} />
                            <Text style={styles.name}>Kylie Wong</Text>
                        </View>
                        <View style={styles.topBtnWrap}>
                            <Button color={TaekwondoColor.MAIN_GREEN} full title='REVOKE' />
                        </View>
                    </View>
                </TModalView> */}
                <View style={[styles.timeWrap]}>
                    <Text style={styles.title}>One Island South</Text>
                    <Text style={styles.secondTitle}>Sparring</Text>
                    <View style={[styles.flexRow, styles.timeTextWrap]}>
                        <Text style={styles.time}>4:30 - 5:30</Text>
                        <View style={styles.topButtonWrap}>
                            <Button full title="END" />
                        </View>

                    </View>
                </View>
                <View style={[styles.todoListWrap]}>
                    <View style={[styles.bannerWrap, styles.flexRow]}>
                        <View style={[styles.bannerInnerWrap, styles.flexRow]}>
                            <View style={[styles.flexRow, styles.fontWhiteWrap]}>
                                <Image style={styles.peopleGroupWhite} source={images.peopleGroupWhite} />
                                <Text style={styles.fontWhite}>8</Text>
                            </View>
                            <View style={[styles.flexRow, styles.fontWhiteWrap]}>
                                <Image style={styles.yesWhite} source={images.yesWhite} />
                                <Text style={styles.fontWhite}>6</Text>
                            </View>
                            <View style={styles.flexRow}>
                                <Image style={styles.noWhite} source={images.noWhite} />
                                <Text style={styles.fontWhite}>2</Text>
                            </View>
                        </View>
                        <View style={styles.peopleMoreWrap}>
                            <Image style={styles.peopleMore} source={images.peopleMore} />
                        </View>
                        <View>
                            <Image />
                        </View>
                    </View>
                    <View style={styles.todoListItemWrap}>
                        <View style={[styles.todoListItem, styles.flexRow]}>
                            <Image style={styles.yesCircle} source={images.yesCircle} />
                            <View style={styles.avatarWrap}>
                                <Image style={styles.avatar} source={images.avatar2} />
                                <Text>Kylie Wong</Text>
                            </View>
                            <View style={styles.btnWrap}>
                                <Button wrap={{ marginRight: 10, }} color={TaekwondoColor.MAIN_GREEN} full title='COMMENT' />
                                <Button color={TaekwondoColor.MAIN_GREEN} full title='REVOKE' />
                            </View>
                        </View>
                        <View style={[styles.todoListItem, styles.flexRow]}>
                            <Image style={styles.yesCircle} source={images.yesCircle} />
                            <View style={styles.avatarWrap}>
                                <Image style={styles.avatar} source={images.avatar2} />
                                <Text>Kylie Wong</Text>
                            </View>
                            <View style={styles.btnWrap}>
                                <Button wrap={{ marginRight: 10, }} color={TaekwondoColor.MAIN_GREEN} full title='COMMENT' />
                                <Button color={TaekwondoColor.MAIN_GREEN} full title='REVOKE' />
                            </View>
                        </View>
                        <View style={[styles.todoListItem, styles.flexRow]}>
                            <Image style={styles.yesCircle} source={images.yesCircle} />
                            <View style={styles.avatarWrap}>
                                <Image style={styles.avatar} source={images.avatar2} />
                                <Text>Kylie Wong</Text>
                            </View>
                            <View style={styles.btnWrap}>
                                <Button wrap={{ marginRight: 10, }} color={TaekwondoColor.MAIN_GREEN} full title='COMMENT' />
                                <Button color={TaekwondoColor.MAIN_GREEN} full title='REVOKE' />
                            </View>

                        </View>
                    </View>

                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    timeWrap: {
        width: '100%',
        height: 130,
        justifyContent: 'center',
    },
    bannerWrap: {
        height: 49,
        backgroundColor: TaekwondoColor.TITLE_BG_COLOR,
        justifyContent: 'space-between',
        paddingLeft: 13,
        paddingRight: 35,
    },
    todoListItem: {
        height: 84,
        borderBottomColor: TaekwondoColor.LINE_COLOR,
        borderBottomWidth: SMALLEST_BORDER_WIDTH,
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    peopleGroupWhite: {
        width: 16,
        height: 16,
        marginRight: 7,
    },
    yesWhite: {
        width: 16,
        height: 12,
        marginRight: 7,
    },
    noWhite: {
        width: 16,
        height: 16,
        marginRight: 7,
    },
    peopleMore: {
        width: 20,
        height: 20,
        marginRight: 7,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    title: {
        width: '100%',
        textAlign: 'center',
        fontSize: 16,
        color: TaekwondoColor.FONT_COLOR,
        fontWeight: '800',
    },
    secondTitle: {
        width: '100%',
        textAlign: 'center',
        fontSize: 16,
        color: TaekwondoColor.FONT_COLOR,
    },
    time: {
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
        color: TaekwondoColor.FONT_COLOR,
        paddingLeft: 90,
    },
    topButtonWrap: {
        height: 32,
        minWidth: 78,
        marginRight: 13,
    },
    timeTextWrap: {
        height: 32,
        width: '100%',
        justifyContent: 'space-between',
    },
    fontWhite: {
        fontSize: 16,
        color: 'white',
    },
    bannerInnerWrap: {
        flex: 1,
    },
    fontWhiteWrap: {
        marginRight: 48,
    },
    peopleMoreWrap: {
        paddingLeft: 35,
        borderLeftColor: 'rgba(255,255,255,0.3)',
        borderLeftWidth: SMALLEST_BORDER_WIDTH,
    },
    yesCircle: {
        width: 20,
        height: 20,
    },
    todoListItemWrap: {
        paddingHorizontal: 13,
    },
    avatarWrap: {
        paddingLeft: 20,
        paddingRight: 40,
        alignItems: 'center',
    },
    btnWrap: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topBtnWrap:{
        flex: 1,
        maxWidth:78,
    },
    searchItem: {
        height: 68,
        borderBottomColor: TaekwondoColor.LINE_COLOR,
        borderBottomWidth: SMALLEST_BORDER_WIDTH,
        justifyContent: 'space-between',
        marginLeft: 19,
        marginRight: 13,
    },
    searchTopWrap: {
        height: 72,
        justifyContent: 'space-between',
        borderBottomColor: TaekwondoColor.LINE_COLOR,
        borderBottomWidth: SMALLEST_BORDER_WIDTH,
    },
    searchTopInputWrap: {
        flex: 1,
        height: 33,
        borderWidth: SMALLEST_BORDER_WIDTH,
        borderRadius: 30,
        borderColor: TaekwondoColor.INPUT_BORDER_GREY,
        justifyContent: 'space-between',
        marginLeft: 13,
        paddingLeft: 20,
    },
    input: {
        flex: 1,
        padding: 0,
    },
    delete: {
        width: 20,
        height: 20,
        marginHorizontal: 6,
    },
    search: {
        width: 20,
        height: 20,
        marginHorizontal: 20,
    },
    topAvatarWrap: {

    },
    name:{
        fontSize:12,
        color:TaekwondoColor.FONT_COLOR,
        marginLeft:14,
    },



});

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListView);
