import React, { Component } from 'react';

import {
    View,
    StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';
import { SCREEN_WIDTH, } from '../../lib/platform';
import LineShowInfo from '../LineShowInfo/LineShowInfo';
import { Button } from '../Button/Button';

class SettingView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canEdit: false,
        };
    }

    goToSomePage(page) {
        this.props.navigation.navigate(`${page}`)
    }

    render() {
        return (
            <View style={styles.settingWrap}>
                <View style={styles.settingList}>
                    <LineShowInfo
                        iconStyle={styles.iconStyle}
                        hasIcon={true}
                        canEdit={true}
                        click={this.goToSomePage.bind(this, 'LoginView')}
                        label="About"
                    />
                    <LineShowInfo
                        iconStyle={styles.iconStyle}
                        hasIcon={true}
                        canEdit={true}
                        click={this.goToSomePage.bind(this, 'LoginView')}
                        label="Help"
                    />
                    <LineShowInfo
                        iconStyle={styles.iconStyle}
                        hasIcon={true}
                        canEdit={true}
                        click={this.goToSomePage.bind(this, 'FindPasswordView')}
                        label="Version"
                    />
                    <View style={styles.buttonWrap}>
                        <Button full size={16} title="LOG OUT" />
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    settingWrap: {
        flex: 1,
    },
    settingList: {
        flex: 1,
        backgroundColor: 'white',
        height: 300
    },
    iconStyle: {
        width: 10,
        height: 16,
    },
    buttonView: {
        width: SCREEN_WIDTH - 48 - 48,
        flex: 1,
        flexDirection: 'row',
        marginTop: 64,
        marginHorizontal: 12
    },
    buttonLeft: {
        marginRight: 35,
    },
    buttonWrap: {
        height: 48,
        marginHorizontal: 36,
        marginTop: 42,
    }
});

function mapStateTopProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateTopProps, mapDispatchToProps)(SettingView);
