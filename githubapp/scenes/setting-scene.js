import React, { Component } from 'react';
import {
  Text, TextInput, View, Switch
} from 'react-native';

class SettingScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setting1: false
    }
  }

  render() {
    return (
      <View>
        <Text>
          Setting 1
        </Text>
        <Switch
          onValueChange={(value) => this.setState({setting1: value})}
          value={this.state.setting1}
        />
      </View>
    );
  }
}

export default SettingScene;