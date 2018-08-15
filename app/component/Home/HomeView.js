import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    ImageBackground,
    ScrollView,
    PixelRatio
} from 'react-native';
import { connect } from 'react-redux';
import { TaekwondoColor } from '../../share/styles';
import images from '../../assests/images';
import { SCREEN_WIDTH, SCREEN_HEIGHT, SMALLEST_BORDER_WIDTH, SCALE } from '../../lib/platform';
import OngoingClassComponentView from '../OngoingClassComponent/OngoingClassComponentView';
import UpcomingClassesComponetView from '../UpcomingClassesComponet/UpcomingClassesComponetView';
import EventsComponentView from '../EventsComponent/EventsComponentView';
import NFCComponent from '../../common/NFCComponent';

class THomeView extends Component {

    static navigationOptions = () => (
        {
            header: null
        })
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.checkIn()
    }

    async doCheckIn(id) {
        if (!!id) {
            await this.props.updateProps({ currentStudentCheckInId: id })
            this.props.checkIn()
        }

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {/* <StudentCheckInDetailView/> */}
                <NFCComponent doSuccess={(id) => this.doCheckIn(id)} />
                <ImageBackground style={styles.bg} source={images.homeBgImage}>
                    <View>
                        <View style={styles.tipFontView}>
                            <Image style={styles.topAddress} source={images.address} />
                            <Text style={styles.topFont}>3/F, Concord Commercial Building, 155-157 King’s Road, North Point</Text>
                        </View>
                        <View style={styles.tipFontView}>
                            <Image style={styles.topPhone} source={images.phone} />
                            <Text style={styles.topFont}>+852   8888 8888</Text>
                        </View>
                    </View>
                    <Text style={styles.tipDate}>Monday ,  Jan 1, 2018</Text>
                </ImageBackground>
                <ScrollView style={{ flex: 1 }}>
                    <View>
                        <Text style={styles.bigTitle}>Events</Text>
                        <EventsComponentView events={this.props.events} />
                        <View style={styles.bigTitleView}>
                            <View style={styles.arrowWrap}>
                                <Image style={styles.arrow} source={images.arrowLeft} />
                            </View>
                            <View>
                                <Text style={styles.bigTitleFont}>Ongoing Class</Text>
                                <Text style={styles.bigTitleViewSmallText}>Room 1</Text>
                            </View>
                            <View style={styles.arrowWrap}>
                                <Image style={styles.arrow} source={images.arrowRight} />
                            </View>
                        </View>
                        <OngoingClassComponentView />
                        <Text style={styles.bigTitle}>Upcoming Classes</Text>
                        <UpcomingClassesComponetView />
                    </View>
                </ScrollView>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    bg: {
        width: SCREEN_WIDTH,
        // height: 308,
        justifyContent: 'space-between',

    },
    tipFontView: {
        width: "50%",
        alignSelf: 'flex-end',
        marginTop: 24 / SCALE,
        flexDirection: 'row',
        alignItems: 'center',
    },
    topFont: {
        fontSize: 28 / SCALE,
        color: 'white',
    },
    tipDate: {
        textAlign: 'center',
        color: TaekwondoColor.MAIN_BLUE,
        fontSize: 36 / SCALE,
        paddingBottom: 22 / SCALE,
    },
    bigTitle: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: TaekwondoColor.TITLE_BG_COLOR,
        padding: 15 / SCALE,
        fontSize: 36 / SCALE,
    },
    bigTitleView: {
        backgroundColor: TaekwondoColor.TITLE_BG_COLOR,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigTitleFont: {
        textAlign: 'center',
        color: 'white',
        fontSize: 36 / SCALE,
        paddingHorizontal: 90 / SCALE,
    },
    bigTitleViewSmallText: {
        fontSize: 30 / SCALE,
        textAlign: 'center',
        color: 'white',
    },
    topAddress: {
        width: 26 / SCALE,
        height: 34 / SCALE,
        marginRight: 28 / SCALE,
    },
    topPhone: {
        width: 34 / SCALE,
        height: 33 / SCALE,
        marginRight: 28 / SCALE,
    },
    arrowWrap: {
        padding: 10 / SCALE,
    },
    arrow: {
        width: 12 / SCALE,
        height: 24 / SCALE,
    },



});

function mapStateTopProps(state) {
    const { events, ongoingClasses, upComingClasses } = state.home
    return { events, ongoingClasses, upComingClasses }
}

function mapDispatchToProps(dispatch) {
    return {
        checkIn(params) {
            dispatch({
                type: 'home/checkIn',
                payload: params
            })
        },
        updateProps(params) {
            dispatch({
                type: 'home/updateProps',
                payload: params
            })
        }
    }
}

export default connect(mapStateTopProps, mapDispatchToProps)(THomeView);
