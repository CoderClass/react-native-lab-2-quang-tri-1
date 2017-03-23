import React, { Component } from 'react';
import {
  Text, View, TouchableOpacity,
  ListView,
  TextInput
} from 'react-native';
import SettingScene from './setting-scene';

class HomeScene extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: {},
      loading: true
    }
  }

  render() {
    if (this.state.loading === true) {
      return <Text>Loading...</Text>
    }

    let ds = new ListView.DataSource({rowHasChanged: ()=>{}});
    let dataSource = ds.cloneWithRows(this.state.dataSource);

    return (
      <View style={{marginTop: 100}}>
        <TextInput />

        <TouchableOpacity
          onPress={this.onGoToSettingBtnPress.bind(this)}
        >
          <Text>
            Go to setting
          </Text>
        </TouchableOpacity>

        <ListView
          dataSource={dataSource}
          renderRow={(rowData)=>{ return <Text>{ rowData.id }</Text> }}
        ></ListView>
      </View>
    );
  }

  componentWillMount() {
    fetch('https://api.github.com/search/repositories?q=topic:ruby+topic:rails')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          dataSource: responseJson.items,
          loading: false
        });
      })
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