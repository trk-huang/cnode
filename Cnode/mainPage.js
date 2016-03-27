'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  DrawerLayoutAndroid,
  Text,
  Navigator,
  ToolbarAndroid,
  ListView,
  View
} from 'react-native';
import NavMenu from './LeftSide';

import  api from './api';
import RefreshableListView from 'react-native-refreshable-listview';

import TopicCell from './TopicCell';
import TopicView from './Topic';


export default class MainPageComponent extends React.Component {

  constructor(props) {
        super(props);
        this.state = {
          dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
          loaded: false,
          tab: null,
        };
        this.renderTopicCell = this.renderTopicCell.bind(this);
        this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount(){
    this.fetchData();
  }

  renderLeftSideView(){
     const { navigator } = this.props;
      return(
          <NavMenu navigator={navigator}></NavMenu>
        );
    
  }


  fetchData(){
    var tab  = '';
    if(this.props.tab){
      tab = this.props.tab;
    }
    fetch(api.topics + tab)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData.data),
          loaded: true
        });
      }).done();
  }

  selectTopic(topic) {
    this.props.navigator.push({
      title: topic.title,
      component: TopicView,
      params: {
        topicId: topic.id
      }
    });
  }

  renderListView(){
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
        <RefreshableListView
          dataSource={this.state.dataSource}
          renderRow={this.renderTopicCell}
          style={styles.topicListView}
          loadData={this.fetchData}
          renderDescription="数据加载中..." />
      </DrawerLayoutAndroid>
    );
  }


 renderTopicCell(topic){
      return(
        <TopicCell
          onSelect={() => this.selectTopic(topic)} topic={topic} />
        );
  }

  render() {
    if(!this.state.loaded){
      return (
              <Text style={styles.loadingText}>
                          数据加载中...
              </Text>
       );
      }
      return this.renderListView();
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
  loadingText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 10,
    marginRight: 10,
    color: '#999'
  },
  topicListView: {
    backgroundColor: '#F0F0F0',
    marginTop: 10
  }
})