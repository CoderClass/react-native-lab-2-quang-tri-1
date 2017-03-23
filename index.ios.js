/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './githubapp/reducers/reducer';

import LoginScene from './githubapp/scenes/login-scene';
import HomeScene from './githubapp/scenes/home-scene';

const store = createStore(reducer);

const defaultRoute = {
  title: 'Sence 1',
  component: LoginScene
}

export default class githubrepo extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={ defaultRoute }
          renderScene={ this._renderScene }
        />
      </Provider>
    );
  }

  _renderScene(route, navigator) {
    return <route.component route={ route } navigator={ navigator } facebookResult={ route.facebookResult } />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('githubrepo', () => githubrepo);
