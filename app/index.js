import React, { PureComponent } from 'react';
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  addNavigationHelpers,
  NavigationActions,
} from 'react-navigation';
import { connect } from 'react-redux';

import HomeView from './component/Home/HomeView';
import LoginView from './component/Login/LoginView'
import RegisterView from './component/Register/RegisterView'
import FindPasswordView from './component/FindPassword/FindPasswordView'
import PassengersDetailListView from './component/PassagersDetailList/PassagersDetailListView'
import TripHistoryView from './component/TripHistory/TripHistoryView'
import Login from './component/login'
import QRCodeView  from './component/QRCode/QRCode'
import UserInfoView from './component/UserInfo/UserInfoView'
import SettingView from './component/Setting/SettingView'
import ChangePasswordView from './component/ChangePassword/ChangePasswordView'
import VehicleRoutesView from './component/VehicleRoutes/VehicleRoutesView'
import NotificationView from './component/Notification/NotificationView'
import SuggestionView from './component/Suggestion/SuggestionView'
import About from './component/About/AboutView'
import HelpView from './component/Help/HelpView'
import ImprovePersonalDataView from './component/ImprovePersonalData/ImprovePersonalDataView'
import PassengersHomePageView from './component/PassengersHomePage/PassengersHomePageView'
import PassengerTripHistoryView from './component/PassengerTripHistory/PassengerTripHistoryView'
import PassengerTripHistoryDetailView from './component/PassengerTripHistory/PassengerTripHistoryDetail/PassengerTripHistoryDetailView'


const MainNavigator = StackNavigator({
    // HomeView : {screen : HomeView },
    LoginView : {screen : LoginView },
    // RegisterView : {screen : RegisterView },
    // FindPasswordView : {screen : FindPasswordView },
    // PassengersDetailListView:{screen:PassengersDetailListView},
    // TripHistoryView: {screen:TripHistoryView},
    // Login: {screen:Login},
    // QRCodeView: {screen:QRCodeView},
    // UserInfoView:{screen:UserInfoView},
    // SettingView:{screen:SettingView},
    // ChangePasswordView:{screen:ChangePasswordView},
    // VehicleRoutesView:{screen:VehicleRoutesView},
    // NotificationView:{screen:NotificationView},
    // SuggestionView:{screen:SuggestionView},
    // About:{screen:About},
    // HelpView:{screen:HelpView},
    // ImprovePersonalDataView:{screen:ImprovePersonalDataView},
    // PassengersHomePageView:{screen:PassengersHomePageView},
    // PassengerTripHistoryDetailView:{screen:PassengerTripHistoryDetailView},
    // PassengerTripHistoryView:{screen:PassengerTripHistoryView}
},{
    initialRouteName: 'LoginView', 
    // navigationOptions: {  
    //     header: {  
    //         backTitle: '返回', 
    //         style: {
    //             backgroundColor: '#fff'
    //         },
    //         titleStyle: {
    //             color: 'green'
    //         }
    //     },
    //     cardStack: {
    //         gesturesEnabled: true
    //     }
    // }, 
    // mode: 'modal',  
    // headerMode: 'screen', 
    // onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
    // onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }  // 回调
})

@connect(({ router }) => ({ router }))
class RootScene extends PureComponent{
    constructor(){
        super();
    }

    render(){
        const { dispatch , router } = this.props;
        const navigation = addNavigationHelpers({ dispatch , state: router})
        return (
                <MainNavigator 
                    navigation = { navigation }
                />
        )
    }
}


export function routerReducer(state , action = {}){
  return MainNavigator.router.getStateForAction(action, state)
}


export default RootScene