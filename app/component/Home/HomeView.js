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
    ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { TaekwondoColor } from '../../share/styles';
import images from '../../assests/images';
import { SCREEN_WIDTH, SCREEN_HEIGHT, SMALLEST_BORDER_WIDTH } from '../../lib/platform';
import { Button } from '../TButton/Button';
import OngoingClassComponentView from '../OngoingClassComponent/OngoingClassComponentView';
import UpcomingClassesComponetView from '../UpcomingClassesComponet/UpcomingClassesComponetView';
import EventsComponentView from '../EventsComponent/EventsComponentView';
import { getCompletePictureAddress } from '../../lib/strs';
import StudentCheckInDetailView from '../StudentCheckInDetail/StudentCheckInDetailView';

class THomeView extends Component {

    static navigationOptions = () => (
        {
            header: null
        })
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
            <StudentCheckInDetailView/>
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
                        <EventsComponentView />
                        <EventsComponentView />
                        <EventsComponentView />
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
        // height: 95,
        justifyContent: 'space-between',

    },
    tipFontView: {
        width: "50%",
        alignSelf: 'flex-end',
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    topFont: {
        fontSize: 10,
        color: 'white',
    },
    tipDate: {
        textAlign: 'center',
        color: TaekwondoColor.MAIN_BLUE,
        fontSize: 12,
        paddingBottom: 6,
    },
    bigTitle: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: TaekwondoColor.TITLE_BG_COLOR,
        padding: 5,
        fontSize: 12,
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
        fontSize: 12,
        paddingHorizontal: 30,
    },
    bigTitleViewSmallText: {
        fontSize: 10,
        textAlign: 'center',
        color: 'white',
    },
    topAddress: {
        width: 9,
        height: 11,
        marginRight: 10,
    },
    topPhone: {
        width: 11,
        height: 11,
        marginRight: 10,
    },
    arrowWrap:{
        padding:10,
    },
    arrow: {
        width: 4,
        height: 8,
    },



});

function mapStateTopProps(state) {

    return {};
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateTopProps, mapDispatchToProps)(THomeView);
