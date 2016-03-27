'use strict';
import React,{
	Component,
	StyleSheet,
	Text,
	View,
	TouchableHighlight,
} from 'react-native'

export default class TopicCell extends Component{

	constructor(props){
		super(props);
		//this.onSelect = this.onSelect.bind(this);
	}

	render(){
		return (
	      <TouchableHighlight onPress={this.props.onSelect}>
	        <View style={styles.container}>
	          <Text style={styles.topicTitle}>{this.props.topic.title}</Text>
	          <View style={styles.topicDetailRow}>
	            <Text style={styles.topicTab}>{this.props.topic.tab}</Text>
	            <Text style={styles.topicInfo}>{this.props.topic.author.loginname} | {this.props.topic.reply_count}回复 | {this.props.topic.visit_count}阅读</Text>
	          </View>
	          <View/>
	        </View>
	      </TouchableHighlight>
	    );
	}
}

const styles =StyleSheet.create({
		container: {
		    borderTopWidth: 1,
		    borderTopColor: '#CCCCCC',
		    borderBottomWidth: 1,
		    borderBottomColor: '#CCCCCC',
		    padding: 10,
		    backgroundColor: '#FFFFFF',
		    marginBottom: 10
		},
		topicTitle: {
		    color: '#666666',
		    fontSize: 16
		},
		topicDetailRow: {
		    flexDirection: 'row',
		    marginTop: 5
		},
		topicTab: {
		    color: '#80BD01',
		    marginRight: 10
		},
		topicInfo: {
		    color: '#999999',
		    fontSize: 12
		}
		})