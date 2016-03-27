'use strict';

import React from 'react-native';

const {
	Component,
	StyleSheet,
	requireNativeCompoent,
	PropTypes,
	View,
	Text,
	TouchableOpacity,
	Image,
	Dimensions,
}= React;

import MainPageComponent from './mainPage';


export default class LoadingView extends React.Component{

	jumpToMainPage(){
		const {navigator} = this.props;
		if(navigator){
			navigator.replace({
				name:'MainPageComponent',
				component: MainPageComponent,
			})
		}
	}

	 _pressButton() {
        const { navigator } = this.props;
        //或者写成 const navigator = this.props.navigator;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'MainPageComponent',
                component: MainPageComponent,
            })
        }
    }

	render() {
		var {height,width} = Dimensions.get('window');
		global.width = width;
		global.height = height;
		return (
			<View style={styles.container}>
				<Image style={styles.container,{left:0,right:0,width:width,height:height}} source={require("image!screen")} resizeMode="cover"/>
			</View>	
		);
	}

	componentDidMount(){
		this.timer = setTimeout(()=>{
			this.jumpToMainPage();
		},2000);
	}

	componentWillUnmount(){
		this.timer && clearTimeout(this.timer);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
	}
});