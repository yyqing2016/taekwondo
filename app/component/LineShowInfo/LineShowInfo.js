import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import { STColor } from '../../share/styles';
import images from '../../assests/images';
import Button from '../Button/Button'
import { SMALLEST_BORDER_WIDTH } from '../../lib/platform';

class LineShowInfo extends Component {
    constructor(props) {
        super(props);
    }

    doClick() {
        if (this.props && this.props.canEdit && this.props.click) {
            this.props.click()
        }
    }

    render() {
        return (
            <View style={styles.lineShowWrap}>
                <View style={styles.lineShowLeftWrap}>
                    {this.props.hasIcon && <Image style={[styles.icon, , this.props.iconStyle ? this.props.iconStyle : '']} source={images.left} />}
                    {this.props.type === "input"
                        ? <TextInput placeholderTextColor={STColor.FONT_LABEL_COLOR} placeholder={this.props.placeholder ? this.props.placeholder : ' '}
                            editable={this.props.canEdit} style={[styles.input,
                            { textAlign: this.props.textAlign ? this.props.textAlign : 'left' }]} value={this.props.title} />
                        : <TouchableOpacity style={styles.contentWrap} onPress={() => this.doClick()}>
                                {this.props.title&&<Text style={ [styles.content,this.props.blackTitle ? styles.blackTitle : '',
                                {textAlign: this.props.textAlign ? this.props.textAlign : 'left'} ]}>{this.props.title}</Text>}
                               {this.props.placeholder&&<Text style={[styles.textPlaceholder, {textAlign: this.props.textAlign ? this.props.textAlign : 'left'}]}>{this.props.placeholder}</Text>}
                        </TouchableOpacity>}
                </View>

                {!!this.props.label && <Text onPress={()=>this.doClick()} style={styles.label}>{this.props.label}</Text>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    lineShowWrap: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 38,
        alignItems: 'center',
        marginTop: 13,
        borderBottomWidth: SMALLEST_BORDER_WIDTH,
        borderBottomColor: STColor.LINE_ITEM_COLOR,
        marginHorizontal: 14,
    },
    label: {
        fontSize: 16,
        color: STColor.FONT_TITLE_COLOR,
        marginLeft: 14,
    },
    icon: {
        width: 8,
        height: 12,
        marginRight: 14,
    },
    input: {
        fontSize: 16,
        color: STColor.FONT_LABEL_COLOR,
        flex: 1,
        // borderWidth:1,
    },
    contentWrap: {
        flexDirection: 'row',
        flex: 1,
        // borderWidth:1,
        height:22,
    },
    content: {
        // flex: 1,
        // borderWidth:1,
        color: STColor.FONT_LABEL_COLOR,
        // height:22,
        // marginRight: 14,
    },
    lineShowLeftWrap: {
        height: 38,
        flexDirection: 'row',
        // borderWidth: 1,
        alignItems: 'center',
        flex: 1,
    },
    inputWrap: {
        flex: 1,
        // borderWidth: 1
    },
    textPlaceholder: {
        flex: 1,
        color: STColor.FONT_LABEL_COLOR,
        fontSize: 16,
    },
    blackTitle: {
        color: STColor.FONT_TITLE_COLOR,
        fontSize: 16,
        flex: 1,
    }


});

function mapStateTopProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateTopProps, mapDispatchToProps)(LineShowInfo);
