import React, { PureComponent } from 'react'
import {
    StackNavigator,
    TabNavigator,
    TabBarBottom,
    addNavigationHelpers,
    NavigationActions,
} from 'react-navigation'
import { connect } from 'react-redux'
import {View} from 'react-native'

import TLoginView from './component/Login/LoginView'
import THomeView from './component/Home/HomeView'
// import LoginByUserNameView from './component/LoginByUserName/LoginByUserNameView'
// import ProfileView from './component/Profile/ProfileView'
import Test from './component/Test'
import NFCComponent from './common/NFCComponent'
import ProfileView from './component/Profile/ProfileView';
import TabBarItem from './component/TabBarItem/TabBarItemView'
import { TaekwondoColor } from './share/styles';
import images from './assests/images';
import StudentCheckInDetailView from './component/StudentCheckInDetail/StudentCheckInDetailView';
import TodoListView from './component/TodoList/TodoListView';
import TeacherHomeView from './component/TeacherHome/TeacherHomeView'

const MainTabNavigator = TabNavigator({
    home: {
        screen: TeacherHomeView,
        navigationOptions: ({ navigation, pthis }) => (
            // console.log(navigation),
            {
                tabBarLabel: "Home",
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        iconStyle={{ width: 22, height: 22 }}
                        normalImage={images.homeIconBlue}
                        selectedImage={images.homeIconRed}
                    />
                )
            })
    },
    profile: {
        screen: TodoListView,
        navigationOptions: ({ navigation, pthis }) => (
            {
                tabBarLabel: "Profile",
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        iconStyle={{ width: 17, height: 22 }}
                        normalImage={images.profileIconBlue}
                        selectedImage={images.profileIconRed}
                    />
                )
            })
    },
},
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: "bottom",
        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
        tabBarOptions: {
            activeTintColor: TaekwondoColor.LIGHR_RED,
            inactiveTintColor: TaekwondoColor.DARK_BLUE,
        }
    }
)

const MainNavigator = StackNavigator({
    // TeacherHomeView:{screen:TeacherHomeView},
    TLoginView: { screen: TLoginView },
    THomeView: { screen: THomeView },
    Home: { screen: MainTabNavigator },
    NFCComponent: { screen: NFCComponent },
    Test: { screen: Test },

    // LoginByUserNameView:{screen:LoginByUserNameView},
    // THomeView: { screen: THomeView },
    // ProfileView:{screen:ProfileView},
    // TodoListView:{screen:TodoListView},
},
    {
        headerMode: "float",
    }, {
        navigationOptions: {
            header: null,
        }
    }
)

@connect(({ router }) => ({ router }))
class RootScene extends PureComponent {
    constructor() {
        super();
    }

    render() {
        const { dispatch, router } = this.props;
        const navigation = addNavigationHelpers({ dispatch, state: router })
        return (
            <View style={{flex:1}}>
                <MainNavigator />
            </View>

        )
    }
}


export function routerReducer(state, action = {}) {
    return MainNavigator.router.getStateForAction(action, state)
}


export default RootScene