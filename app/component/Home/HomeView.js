import React, { Component } from 'react'

import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
    Modal
} from 'react-native'

import { connect } from 'react-redux'
import images from '../../assests/images';
import { LS } from '../../locales/localized-strings';
import { STColor } from '../../share/styles';
import { SCREEN_WIDTH } from '../../lib/platform';
import CardWrap from '../CardWrap/CardWrap'
import { Button } from '../Button/Button';
import TodoListPanel from './TodoListPanel/TodoListPanel';
import PassengersList from './PassengersList/PassengersList';

class HomeView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            topTableOnline: false
        }
    }

    toggleTopTableStatus() {
        this.setState({
            topTableOnline: !this.state.topTableOnline
        })
    }

    showOrderRequest(){
        return <TodoListPanel></TodoListPanel>
    //    return <PassengersList></PassengersList>
    }

    showTopTable() {
        return <View style={styles.topTableWrap}>
            <View style={[styles.topTableItemOn, styles.topTableItem, this.state.topTableOnline ? styles.topTableItemWrapFocus : '']}>
                <Text onPress={() => this.toggleTopTableStatus()} style={[this.state.topTableOnline ? styles.topTableItemFocus : styles.topTableItemBlur]}>
                    fds
            </Text>
            </View>
            <View style={[styles.topTableItemOff, styles.topTableItem, this.state.topTableOnline ? '' : styles.topTableItemWrapFocus]}>
                <Text onPress={() => this.toggleTopTableStatus()} style={[this.state.topTableOnline ? styles.topTableItemBlur : styles.topTableItemFocus]}>
                    fgsdf</Text>
            </View>
        </View>
    }


    showWaiting() {
        return <CardWrap>
            <Image style={styles.waitImage} source={images.clockGreen} />
            <Text style={styles.waitText}>{LS.t.home.label.waitingTip}</Text>
        </CardWrap>
    }

    render() {
        return (
            <View style={styles.homeWrap}>
                {this.state.topTableOnline && this.showWaiting()}
                {!this.state.topTableOnline && this.showOrderRequest()}
                <ImageBackground style={styles.topImage} source={images.topImage}>
                    {this.showTopTable()}
                </ImageBackground>
                <View style={styles.bottomImage}>
                    <Image style={styles.imageLocation} source={images.location} />
                    <Image style={styles.imagecustomService} source={images.customService} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    homeWrap: {
        backgroundColor: "white",
        flex: 1,
    },
    topTableWrap: {
        color: STColor.MAIN_GREEN,
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    topTableItemWrapFocus: {
        backgroundColor: 'white',
    },
    topTableItemFocus: {
        color: STColor.MAIN_GREEN,
        borderRadius: 4,

    },
    topTableItemBlur: {
        color: "white",
        borderRadius: 4,
    },
    topTableItemOn: {
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
    },
    topTableItemOff: {
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
    },
    topTableItem: {
        fontSize: 14,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: 'white',
    },
    topImage: {
        width: SCREEN_WIDTH
    },
    imageLocation: {
        width: 60,
        height: 60,
        marginLeft: 6,
    },
    waitImage: {
        width: 20,
        height: 20,
        marginRight: 8,
    },
    waitText:{
      color:STColor.MAIN_GREEN
    },
    imagecustomService: {
        width: 48,
        height: 48,
        marginRight: 12,
        marginTop: 8,
    },
    bottomImage: {
        height: 60,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        left: 0,
        right: 0,
        marginBottom: 8,
        bottom: 8,
    },
    waitingTipWrap: {
        zIndex: 100,
        position: 'absolute',
        top: 40,
        left: 12,
        flexDirection: 'row',
        height: 62,
        justifyContent: "center",
        alignItems: 'center',
        borderWidth: 1,
        flex: 1,
        width: (SCREEN_WIDTH - 24),
        shadowColor: 'black',
        shadowOffset: { h: 10, w: 0 },
        shadowRadius: 3,
        shadowOpacity: 0.8,
    }
})

function mapStateTopProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return {}
}





export default connect(mapStateTopProps, mapDispatchToProps)(HomeView);
