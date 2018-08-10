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
} from 'react-native';
import { connect } from 'react-redux';
import { TaekwondoColor } from '../../../share/styles';
import images from '../../../assests/images';
import {
    SCREEN_WIDTH,
    SCREEN_HEIGHT,
    SMALLEST_BORDER_WIDTH,
} from '../../../lib/platform';
import { Button } from '../../TButton/Button';
import { TRatingComponent } from '../TRatingComponent/TRatingComponent';

class RatingView extends Component {
    static navigationOptions = () => ({
        header: null,
    });
    constructor(props) {
        super(props);
    }

    renderTitle(title) {
        return (
            <View style={styles.titleWrap}>
                <View style={styles.line} />
                <Text style={styles.titleLabel}>{title}</Text>
                <View style={styles.line} />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.ratingWrap}>
                <View style={[styles.timeWrap]}>
                    <Text style={styles.title}>One Island South</Text>
                    <Text style={styles.secondTitle}>Sparring</Text>
                    <Text style={styles.secondTitle}>4:30 - 5:30</Text>
                </View>
                <View style={styles.blueParentWrap}>
                    <View style={styles.whiteWrap}>
                        <View style={styles.peopleWrap}>
                            <Image style={styles.avatar} source={images.avatar2} />
                            <Text style={styles.name}>Kylie Wong</Text>
                        </View>
                        {this.renderTitle('Rating')}
                        <TRatingComponent />
                        {this.renderTitle('Advice')}
                        <Text style={[styles.detail, styles.name]}>Mirabel is not ready for test. She forgot pattern if she is hurry for June test please come extra classes and
                            practice more at home. Otherwise she can take Aug </Text>
                    </View>
                    <ImageBackground style={styles.bg} source={images.ratingBg} />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    ratingWrap: {
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        backgroundColor: 'white',
        maxHeight: SCREEN_HEIGHT,
    },
    bg: {
        width: SCREEN_WIDTH,
        height: 277,
        position: 'absolute',
        bottom: 10,
        left: 0,
        // zIndex:55,
    },
    timeWrap: {
        height: 124,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        color: TaekwondoColor.FONT_COLOR,
        fontWeight: '800',
    },
    secondTitle: {
        fontSize: 16,
        color: TaekwondoColor.FONT_COLOR,
    },

    whiteWrap: {
        width: SCREEN_WIDTH - 26 - 26,
        marginHorizontal: 30,
        backgroundColor: 'white',
        borderRadius: 3,
        borderColor: 'white',
        marginHorizontal: 26,
        zIndex: 100,
        position: 'absolute',
        top: 25,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginBottom: 7,
    },
    name: {
        fontSize: 12,
        color: TaekwondoColor.FONT_COLOR,
    },
    peopleWrap: {
        alignItems: 'center',
        paddingTop: 23,
        paddingBottom: 26,
    },
    titleWrap: {
        minHeight: 16,
        height: 16,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 8,
        // borderWidth: 1,
        marginHorizontal: 26,
    },
    line: {
        flex: 1,
        height: 1,
        borderBottomColor: TaekwondoColor.LINE_COLOR,
        borderBottomWidth: SMALLEST_BORDER_WIDTH,
    },
    titleLabel: {
        height: 16,
        color: TaekwondoColor.FONT_LABEL,
        fontSize: 12,
        paddingHorizontal: 4,
    },
    blueParentWrap: {
        flex: 1,
        backgroundColor: TaekwondoColor.TITLE_BG_COLOR,
        position: 'relative',
    },
    detail: {
        paddingHorizontal: 26,
        paddingBottom: 30,
    },
});

function mapStateTopProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateTopProps, mapDispatchToProps)(RatingView);
