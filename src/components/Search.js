import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    TextInput,
    Dimensions,
    Image,
    FlatList,
    ScrollView
} from 'react-native';
import {connect} from 'react-redux'
import {fetchData} from '../actions'

import {getAll} from '../api/api'

const {width, height} = Dimensions.get('window')

class Search extends Component {
	constructor(props) {
		super(props)
		this.state = {
			text: '',
			data: ''
		} 
	}


	static navigationOptions = {
        header: null
 	}

	filter(text) {
		const {dataTvMaze} = this.props
		const newData = dataTvMaze.data.filter(function(item) {
			const itemData = item.show.name.toUpperCase()
			const textData = text.toUpperCase()

			return itemData.indexOf(textData) > -1
		})
		this.setState({
			data: newData,
			text: text
		})
	}
	deleteData() {
		this.setState({text: '', data: ''})
	}
	_renderItem(item) {
		return (
			<Image style={{width: 120, height:180}} source={{uri: item.show.image.medium}}/>
		)
	}
	render() {
		const {navigate} = this.props.navigation
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Image
						style={styles.searchIcon}
						source = {require('../images/search-grey.png')}
					/>
					<TextInput
					value={this.state.text}
					onChangeText={(text) => this.filter(text)}
					style={styles.input}
					placeholder="Search"
					placeholderTextColor="grey"
					/>
					{this.state.text ?
					<TouchableWithoutFeedback onPress={() => this.deleteData()}>
						<Image
							style={styles.closeIcon}
							source = {require('../images/close.png')}
						/>
					</TouchableWithoutFeedback>
					: null }
					<TouchableWithoutFeedback style={styles.cancerButton} onPress={() => navigate('Home')}>
						<View style={styles.containerButton}>
							<Text style={styles.cancerButtonText}>Cancelar</Text>
						</View>
					</TouchableWithoutFeedback>
				</View>
				<ScrollView>
					<FlatList
						style={{marginHorizontal: 5}}
						data={this.state.data}
						numColumns={3}
						columnWrapperStyle={{marginTop: 5, marginLeft: 5}}
						renderItem={({item}) => this._renderItem(item)}
					/>
				</ScrollView>
			</View>
		)
	}
}

const mapStateToProps = state => {
	return {dataTvMaze: state.dataTvMaze}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchData: () => dispatch(fetchData())
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#181818'
	},
	header: {
		height: 40,
		backgroundColor: '#181818',
		borderColor: '#3a3a3a',
		paddingBottom: 5,
		marginTop: 20,
		flexDirection: 'row',
		alignItems: 'center' ,
		position: 'relative' 
	},
	input: {
		height: 35,
		backgroundColor: '#323232',
		width: width - (width / 4),
		marginHorizontal: 10,
		paddingLeft: 30,
		borderRadius: 3
	},
	cancerButtonText: {
		color: 'white'
	},
	searchIcon: {
		height: 18,
		width: 18,
		position: 'absolute',
		top: 5,
		left: 15,
		zIndex: 1
	},
	closeIcon: {
		height: 25,
		width: 25,
		position: 'absolute',
		top: 1,
		right: 85,
		zIndex: 1
	},
	image: {
		marginRight: 5,
		width: 115,
		height: 170
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
