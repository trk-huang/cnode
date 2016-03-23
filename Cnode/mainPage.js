'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  DrawerLayoutAndroid,
  Text,
  Navigator,
  ToolbarAndroid,
  View
} from 'react-native';
import NavMenu from './LeftSide';


export default class MainPageComponent extends React.Component {

  renderLeftSideView(){
      return(
          <NavMenu/>
        )
  }

  onActionSelected(){

  }

  render() {
    return (
      <DrawerLayoutAndroid 
                drawerWidth={300} 
                drawerPosition={DrawerLayoutAndroid.positions.Left} 
                renderNavigationView={() => this.renderLeftSideView()}>
                  <ToolbarAndroid
                    logo={require('./image/icon.png')}
                    title="AwesomeApp"
                    actions={[{title: 'Settings', showWithText: true}]}
                    onActionSelected={this.onActionSelected} style={styles.toolbar,{width:global.width,height:56}}>
                    </ToolbarAndroid>
                    </DrawerLayoutAndroid>
             
    );
  }
}

const styles = StyleSheet.create({
	container:{
		flex:1,
	},
	button:{
		backgroundColor:'white',
		padding:15,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#CDCDCD',
	},
  toolbar: {
    backgroundColor: '#e9eaed',
  },
})