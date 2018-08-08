import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import images from '../../assests/images';

export class GradingComponent extends Component {
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
            return <Image style={styles.image} source={images.selectedPinxing} />
        } else {
            return <Image style={styles.image} source={images.pingxing} />
        }

    }


    renderStars() {
        let starts = [];
        for (var i = 1; i <= this.state.totalScore; i++) {
            let currentCount = i;
            starts.unshift(
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
        paddingVertical: 10,
    },
    image: {
        width: 28,
        height: 28,
    },
    startsView: {
        flex: 1,
        flexDirection: 'row-reverse',
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

export default connect(mapStateTopProps, mapDispatchToProps)(GradingComponent);
