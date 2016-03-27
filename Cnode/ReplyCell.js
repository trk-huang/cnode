'use strict';
import React,{
	Text,
	TouchableHighlight,
	View,
	Component,
} from 'react-native';

export default class ReplayCell extends Component{

		render(){
			return(
				<View>
					<Text>{this.props.reply.content}</Text>
				</View>
				);
		}
}
