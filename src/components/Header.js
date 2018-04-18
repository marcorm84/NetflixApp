import React, {Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableWithoutFeedback
} from 'react-native';


const Header = props => {
	const {navigate} = props.navigation
	return (
		<View style={styles.container}>
			<TouchableWithoutFeedback onPress={() => props.toggle()}>
				<Image
					style={{width: 50, height:50}}
					source={require('../images/menu.png')}
				/>
			</TouchableWithoutFeedback>
			<Image style={styles.logo} source={require('../images/logo.png')} />
			<TouchableWithoutFeedback onPress={() => navigate('Search')}>
				<Image
						style={{width: 25, height:25}}
						source={require('../images/search.png')}
				/>
			</TouchableWithoutFeedback>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: 60,
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: 'black',
		paddingHorizontal: 15
	},
	logo:{
		width: 120,
		height:40
	}
})

export default Header