import React, { PureComponent } from 'react'
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  addNavigationHelpers,
  NavigationActions,
} from 'react-navigation'
import { connect } from 'react-redux'

import TLoginView from './component/Login/LoginView'
// import THomeView from './component/Home/HomeView'
// import LoginByUserNameView from './component/LoginByUserName/LoginByUserNameView'
// import TodoListView from './component/TodoList/TodoListView'
// import ProfileView from './component/Profile/ProfileView'
import Test from './component/Test'



const MainNavigator = StackNavigator({
    Test:{screen:Test},
    TLoginView: { screen: TLoginView },
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
class RootScene extends PureComponent{
    constructor(){
        super();
    }

    render(){
        const { dispatch , router } = this.props;
        // const navigation = addNavigationHelpers({ dispatch , state: router})
        return (
                <MainNavigator />
        )
    }
}


export function routerReducer(state , action = {}){
  return MainNavigator.router.getStateForAction(action, state)
}


export default RootScene