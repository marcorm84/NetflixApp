import React, {Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image
} from 'react-native';

import {getTwoItems} from '../api/api'

class List extends Component {

	_renderItem(item) {
		const {navigate} = this.props.navigation
		return (
			<Image style={{width: 120, height:180}} source={{uri: item.image}}/>
		)
	}

	render() {
		console.log(this.props)
		return (
			<View style={{flex: 1}}>
				<View>
					<Text style={styles.text}>My List</Text>
					<FlatList
						horizontal
						SeparatorComponent={() => <View style={{width: 5}} />}
						renderItem={({item}) => this._renderItem(item)}
						data={getTwoItems[0]}
					/>
				</View>
				<View>
					<Text style={styles.text}>Top Picks For You</Text>
					<FlatList
						horizontal
						SeparatorComponent={() => <View style={{width: 5}} />}
						renderItem={({item}) => this._renderItem(item)}
						data={getTwoItems[1]}
					/>
				</View>
			</View>

		)
	}
}

const styles = StyleSheet.create({
	text: {
		color: 'white'
	}
})

export default List