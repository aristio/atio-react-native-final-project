import React from 'react';
import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

import ChatListScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';

const AppStack = createMaterialBottomTabNavigator(
  {
    ChatList: {
      screen: ChatListScreen,
      navigationOptions: {
        tabBarLabel: 'Obrolan',
        tabBarIcon: ({tintColor}) => (
          <Icon style={[{color: tintColor}]} size={25} name={'comments-o'} />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profil',
        tabBarIcon: ({tintColor}) => (
          <Icon style={[{color: tintColor}]} size={25} name={'user'} />
        ),
        activeColor: 'white',
        inactiveColor: '#bbabf1',
        barStyle: {backgroundColor: '#722BC7'},
      },
    },
    Setting: {
      screen: SettingScreen,
      navigationOptions: {
        tabBarLabel: 'Setting',
        tabBarIcon: ({tintColor}) => (
          <Icon style={[{color: tintColor}]} size={25} name={'gear'} />
        ),
        activeColor: 'white',
        inactiveColor: '#bbabf1',
        barStyle: {backgroundColor: '#8F48E4'},
      },
    },
  },
  {
    initialRouteName: 'ChatList',
    activeColor: 'white',
    inactiveColor: '#bbabf1',
    barStyle: {backgroundColor: '#6151E7'},
  },
);
const AuthStack = createStackNavigator({
  Login: {screen: LoginScreen},
  SignUp: {screen: SignUpScreen},
});

export const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
);

export default AppNavigator;
