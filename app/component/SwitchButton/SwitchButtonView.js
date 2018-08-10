import React, {Component} from  'react';
import {
    AppRegistry,
    Switch,
} from 'react-native';
export default class SwitchButton extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

            value: false

        };
    }

    render() {
        return (
            <Switch
                //动态改变value
                value={this.state.value}
                //当切换开关室回调此方法
                onValueChange={(value)=>{this.setState({value: value})}}
            />
        )
    }
}