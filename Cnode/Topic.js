'use strict';
import React,{
	View,
	Text,
	WebView,
	StyleSheet,
	ListView,
	Component,
	TouchableHighlight
} from 'react-native';

import ReplyCell from './ReplyCell';
import api from './api';

export default class Topic extends Component{

	constructor(props){
		super(props);
		this.state = {
			loaded:false,
			topicId:null,
		}
	}

	componentDidMount(){
		this.setState({
            topicId: this.props.topicId
        });
		this.fetchData();
	}

	fetchData(){
		fetch(api.topic + '/' + this.props.topicId)
			.then((response) => response.json())
			.then((responseData) => {
				var data = responseData.data;

			this.setState({
				loaded: true,
				topicTitle: data.title,
				topicContent: data.content,
				date: data.create_at,
				author: data.author,
				tag: data.tab
			});
		}).done();
	}

	renderTopic(){
		return(
			<View style={styles.container}>
		        <Text style={styles.title}>{this.state.topicTitle}</Text>
		        <Text style={styles.tag}>{this.state.tag} | {this.state.author.loginname} | {this.state.date}</Text>
		        <WebView
			        style={styles.webView}
			        ref={'webview'}
			        source={{html:this.state.topicContent}}
			        />
			</View>
			);
	}

	render(){
		if(!this.state.loaded){
			return(
				<View style={styles.container}>
					<Text>数据加载中...</Text>
				</View>
			);
		}
		return this.renderTopic();
	}
}


const styles = StyleSheet.create({
 container: {

  },
  loadingText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#000000',
    marginTop: 75
  },
  webView: {
    height: 500,
    backgroundColor: 'white',
  },
  title: {
    marginTop: 75,
    color: '#333',
    fontSize: 18,
    marginLeft: 20
  },
  tag: {
    marginTop: 5,
    marginBottom: 10,
    color: '#666',
    fontSize: 14,
    marginLeft: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  }
});