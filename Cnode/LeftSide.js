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




export default class LeftSideView extends Component {
	
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
						});
					}}
					text="登录"
				/>
				<Text>板块</Text>
				<NavButton
					onPress={()=>{
						this.props.navigator.push({
							message:'向下拖拽关闭页面',
							sceneConfig:Navigator.SceneConfigs.FloatFromBottom,
						});
					}}
					text="最新"
				/>
				<NavButton
		          onPress={() => {
		            this.props.navigator.pop();
		          }}
		          text="分享"
		        />
		        <NavButton
		          onPress={() => {
		            this.props.navigator.popToTop();
		          }}
		          text="问答"
		        />
		        <NavButton
		          onPress={() => {
		            this.props.navigator.popToTop();
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