import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';
import HomeScene from './home-scene';

class LoginScene extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{marginTop: 100}}
        onPress={ this.onLoginPress.bind(this) }
      >
        <Text>
          This is login LoginScene
        </Text>
      </TouchableOpacity>
    );
  }

  onLoginPress(event) {
    this._goToHomeScence();
  }

  _goToHomeScence() {
    this.props.navigator.push({
      title: 'Home scene',
      component: HomeScene
    });
  }
}

export default LoginScene;