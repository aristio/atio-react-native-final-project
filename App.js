import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import routes from './src/config/Routes';
import {createAppContainer} from 'react-navigation';

const AppNavigator = createAppContainer(routes);

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}