'use strict';
import React, {
	Component,
	StyleSheet,
	View,
	Text,
	PropTypes,
	TouchableHighlight,
} from 'react-native';

export default class NavButton extends React.Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#B5B5B5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
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
})