import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import HomeScene from './home-scene';
import {LoginManager, GraphRequestManager, GraphRequest} from 'react-native-fbsdk';

class LoginScene extends Component {
  render() {
    return (
      <View>


        <TouchableOpacity
          style={{marginTop: 100}}
          onPress={ this.onLoginPress.bind(this) }
        >
          <Text>
            This is login LoginScene
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={{marginTop: 100}}
          onPress={ this.onConnectFacebook.bind(this) }
        >
          <Text>
            LOGIN FB
          </Text>
        </TouchableOpacity>

      </View>
    );
  }



  onConnectFacebook() {
    LoginManager.logInWithReadPermissions(['public_profile']).then((result) => {
        if (result.isCancelled) {
          alert('Login cancelled');
        } else {
          //alert('Login success with permissions: '
          //  +result.grantedPermissions.toString());
          this.getGraph();
        }
      },
      (error) => {
        alert('Login fail with error: ' + error);
      }
    );
  }

  getGraph() {
    // Create a graph request asking for user information with a callback to handle the response.
    const infoRequest = new GraphRequest(
      '/me',
      null,
      this._responseInfoCallback,
    );
    // Start the graph request.
    new GraphRequestManager().addRequest(infoRequest).start();
  }

  _responseInfoCallback(error, result) {
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      alert('Success fetching data: ' + JSON.stringify(result.toString()));
    }
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