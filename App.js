/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './src/store';
import TodoList from './src/components/todoList';
import TodoNewItem from './src/components/todoList/newItem';
import Home from './src/components/home';
import Scroll from './src/components/scroll';
import Buttons from './src/components/buttons';
import FlatList from './src/components/flatList';
import SectionList from './src/components/sectionList';

const navigationConfig = {
  initialRouteName: 'TodoList',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
};
const MainNavigator = createStackNavigator(
  {
    TodoList: { screen: TodoList },
    TodoNewItem: { screen: TodoNewItem },
    Scroll: { screen: Scroll },
    Home: { screen: Home },
    Buttons: { screen: Buttons },
    FlatList: { screen: FlatList },
    SectionList: { screen: SectionList },
  },
  navigationConfig
);

const AppNavigator = createAppContainer(MainNavigator);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}

export default App;
