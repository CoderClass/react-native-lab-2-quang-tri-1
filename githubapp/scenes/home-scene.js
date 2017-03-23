import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity
} from 'react-native';
import SettingScene from './setting-scene';

class HomeScene extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <TouchableOpacity
          onPress={this.onGoToSettingBtnPress.bind(this)}
        >
          <Text>
            Go to setting
          </Text>
        </TouchableOpacity>

        <Text>
          This is HomeScene
        </Text>
      </View>
    );
  }

  onGoToSettingBtnPress(event) {
    this._goToSettingScene();
  }

  _goToSettingScene() {
    this.props.navigator.push({
      title: 'SEtting scene',
      component: SettingScene
    });
  }
}

export default HomeScene;