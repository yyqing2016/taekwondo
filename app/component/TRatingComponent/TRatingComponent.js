import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import images from '../../../assests/images';

export class TRatingComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canEdit: true,
            value: 3,
            totalScore: 5,
        }
    }

    doClick(value) {
        this.setState({ value: [value] })
    }

    renderLightStar(current) {
        if (this.state.canEdit && current <= this.state.value) {
            if (current % 2 === 0) {
                return <Image style={styles.image} source={images.starRed} />
            } else {
                return <Image style={styles.image} source={images.starGreen} />
            }

        } else {
            return <Image style={styles.image} source={images.starGrey} />
        }

    }


    renderStars() {
        let starts = [];
        for (var i = 1; i <= this.state.totalScore; i++) {
            let currentCount = i;
            starts.push(
                <View style={styles.startsView} key={"i" + i}>
                    <TouchableOpacity onPress={(i) => { this.doClick(currentCount) }}>
                        {this.renderLightStar(i)}
                    </TouchableOpacity>
                </View>
            );
        }
        return starts;
    }




    render() {
        return (
            <View style={styles.startsWrap}>
                {this.renderStars()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    startsWrap: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 70,
        paddingBottom: 24,
    },
    image: {
        width: 20,
        height: 20,
    },
    startsView: {
        flex: 1,
        flexDirection: 'row',
        height: 30,
        justifyContent: 'space-around',
        alignItems: 'center',
    }
});

function mapStateTopProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateTopProps, mapDispatchToProps)(TRatingComponent);
