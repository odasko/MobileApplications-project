import React, { Component } from "react";
import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Login from '../screens/Login';
import Register from '../screens/Register';
import HeaderApp from '../HeaderApp';

type Props = {
    navigation: createSwitchNavigator<any>; 
}

const SwitchNavigator = createSwitchNavigator(
    {
        Login: {screen: Login},
        Register: {screen: Register},
        HeaderApp: {screen: HeaderApp}
    },
    {
        initialRouteName: 'Login'
    }
)

export default createAppContainer(SwitchNavigator);