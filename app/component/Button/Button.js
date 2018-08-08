import React, { Component } from 'react';

import { TouchableOpacity,StyleSheet,Text} from 'react-native';
import {STColor }from '../../share/styles'

import { connect } from 'react-redux';

export class Button extends Component {
    constructor(props) {
        super(props);
    }

    doClick(){
        if(this.props&&this.props.click){
            this.props.click()
        }
        // alert("sdfasd")
    }

    render() {
        return (
            <TouchableOpacity  style={[styles.button,this.props.full?styles.buttonFull:styles.buttonNotFull,this.props.wrap?this.props.wrap:'',]} onPress={()=>this.doClick()}>
        <Text style={[this.props.full?styles.buttonFullText:styles.buttonNotFullText,{fontSize:this.props.size>0?this.props.size:14}]}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        // flex:1,
        borderRadius: 4,
        height: 46,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonFull: {
        backgroundColor: STColor.MAIN_GREEN
    },
    buttonFullText: {
        color: 'white',
    },
    buttonNotFull: {
        borderWidth: 1,
        borderColor: STColor.MAIN_GREEN
    } , 
    buttonNotFullText: {
        color: STColor.MAIN_GREEN,
    }
});

function mapStateTopProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateTopProps, mapDispatchToProps)(Button);
