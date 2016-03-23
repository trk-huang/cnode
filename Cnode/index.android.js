/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  DrawerLayoutAndroid,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';

import LoadingView from './Loading';


class Cnode extends Component {

  render() {
    var defaultName = 'LoadingView';
        var defaultComponent = LoadingView;
    return (
        
        <Navigator
          initialRoute={{ name: defaultName, component: defaultComponent }}
          configureScene={(route) => {
            return Navigator.SceneConfigs.VerticalDownSwipeJump;
          }}
          renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
          }} />
    );
  }
}
AppRegistry.registerComponent('Cnode', () => Cnode);
