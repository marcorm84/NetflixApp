import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';

const {width, height} = Dimensions.get('window')

class Menu extends Component {
	render() {
		return (
			<View style={styles.menu}>
				<View style={styles.avatarContainer}>
					<View style={styles.avatarImage}>
						<Image
							style = {styles.avatar}
							source = {require('../images/user.png')}
						/>
						<Text style = {styles.text}>MARIO</Text>
					</View>
					<Image />
				</View>
				<ScrollView style={styles.scrollContainer}>
					<View style={styles.textWithIcon}>
						<View style={styles.withIcon}>
							<Image
								style={styles.iconWhiteText}
								source={require('../images/down.png')}
							/>
							<Text style = {styles.text}>My Downloads</Text>
						</View>
						<Image
							style={styles.rightIcon}
							source={require('../images/arrow.png')}
						/>
					</View>
					<View style={styles.textWithIcon}>
						<View style={styles.withIcon}>
							<Image
								style={styles.iconWhiteText}
								source={require('../images/check.png')}
							/>
							<Text style = {styles.text}>My List</Text>
						</View>
						<Image
							style={styles.rightIcon}
							source={require('../images/arrow.png')}
						/>
					</View>
					<View style={[styles.items, styles.itemSelected]}>
						<Text style={styles.text}>Home</Text>
					</View>
					<View style={[styles.items, styles.noSelectedItem]}>
						<Text style={styles.text}>Available for Download</Text>
					</View>
					<View style={[styles.items, styles.noSelectedItem]}>
						<Text style={styles.text}>Netflix Original</Text>
					</View>
					<View style={[styles.items, styles.noSelectedItem]}>
						<Text style={styles.text}>TV Shows</Text>
					</View>
					<View style={[styles.items, styles.noSelectedItem]}>
						<Text style={styles.text}>Children</Text>
					</View>
					<View style={[styles.items, styles.noSelectedItem]}>
						<Text style={styles.text}>Documentaries</Text>
					</View>
				</ScrollView>
			</View>
				
		)
	}
}

const styles = StyleSheet.create({
	menu: {
		flex: 1,
		width: width,
		height: height,
		backgroundColor: "#191919"

	},
	avatarContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: width / 2 + 50,
		borderColor: '#000',
		borderBottomWidth: 3,
		paddingHorizontal: 20,
		paddingVertical: 20 
	},
	avatar: {
		width: 60,
		height: 60,
		marginRight: 20
	},
	avatarImage : {
		flexDirection: 'row',
		alignItems: 'center'
	},
	text: {
		color: '#b3b3b3',
		fontSize: 15
	},
	textWithIcon: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 20,
		borderColor: '#000',
		borderBottomWidth: 3
	},
	withIcon: {
		flexDirection: 'row',
		alignItems: 'center'  
	},
	scrollContainer: {
		width: width / 2 + 60
	},
	rightIcon: {
		paddingRight: 30,
		height: 20,
		width: 20
	},
	iconWhiteText: {
		marginRight: 10,
		marginLeft: 20,
		height: 20,
		width: 20
	},
	items: {
		paddingVertical: 15,
		paddingLeft: 20,
		marginTop: 5
	},
	itemSelected: {
		borderLeftWidth: 5,
		borderColor: 'red'
	},
	noSelectedItem: {
		paddingVertical: 15,
		paddingLeft: 25,
		marginTop: 5
	}
})

export default Menu