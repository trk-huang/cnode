'use strict';
import React,{
	Component,
	StyleSheet,
	requireNativeComponent,
	Text,
	ToolbarAndroid,
	Navigator,
	Dimensions,
	TouchableHighlight,
	View,
} from 'react-native';
import NavButton from './NavButton';
import mainPage from './mainPage';




export default class LeftSideView extends Component {

	constructor(props){
		super(props);
	}

	onSelect(){

	}
	
	render(){
		var {height,width} = Dimensions.get('window');
		return(
			<View style={styles.container}>
			 <ToolbarAndroid
                    logo={require('./image/icon.png')}
                    title="AwesomeApp"
                    actions={[{title: 'Settings', showWithText: true}]}
                    onActionSelected={this.onActionSelected} style={{width:global.width,height:56}}>
                    </ToolbarAndroid>
				<Text style={styles.messageText}>{this.props.message}</Text>
				<NavButton
					onPress={() => {
						this.props.navigator.push({
							message:'向右拖拽关闭页面',
							sceneConfig:Navigator.SceneConfigs.FloatFromRight,
      						component: mainPage,
							params: {
						        tab: "?tab=ask"
						      }
						});
					}}
					text="登录"
				/>
				<Text>板块</Text>
				<NavButton
					onPress={()=>{
						this.props.navigator.push({
							message:'向右拖拽关闭页面',
							sceneConfig:Navigator.SceneConfigs.FloatFromRight,
      						component: mainPage,
							params: {
						        tab: "?tab=good"
						      }
						});
					}}
					text="精华"
				/>
				<NavButton
		          onPress={() => {
		            this.props.navigator.push({
							message:'向右拖拽关闭页面',
							sceneConfig:Navigator.SceneConfigs.FloatFromRight,
      						component: mainPage,
							params: {
						        tab: "?tab=share"
						      }
						});
		          }}
		          text="分享"
		        />
		        <NavButton
		          onPress={() => {
		            this.props.navigator.push({
							message:'向右拖拽关闭页面',
							sceneConfig:Navigator.SceneConfigs.FloatFromRight,

      						component: mainPage,
							params: {
						        tab: "?tab=ask"
						      }
						});
		          }}
		          text="问答"
		        />
		        <NavButton
		          onPress={() => {
		            this.props.navigator.push({
							message:'向右拖拽关闭页面',
							sceneConfig:Navigator.SceneConfigs.FloatFromRight,
      						component: mainPage,
							params: {
						        tab: "?tab=job"
						      }
						});
		          }}
		          text="招聘"
		        />
		        <Text>其他</Text>
		        <NavButton
		          onPress={() => {
		            this.props.navigator.popToTop();
		          }}
		          text="设置"
		        />
			</View>
		)
	}
}



const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor: '#fff',
	},
	button:{
		backgroundColor:'white',
		padding:15,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#CDCDCD',
	},
})