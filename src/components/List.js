import React, {Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image
} from 'react-native';
import {connect} from 'react-redux'
import {fetchData} from '../actions'

class List extends Component {
	componentWillMount() {
		this.props.fetchData()
	}

	_renderItem(item) {
		const {navigate} = this.props.navigation
		return (
			<Image style={{width: 120, height:180}} source={{uri: item.show.image.medium}}/>
		)
	}

	getTvShows() {
		const {dataTvMaze} = this.props
		return (
			<FlatList
				horizontal
				SeparatorComponent={() => <View style={{width: 5}} />}
				renderItem={({item}) => this._renderItem(item)}
				data={dataTvMaze.data}
			/>
		)
	}

	render() {
		const {dataTvMaze} = this.props
		console.log(this.props)
		return (
			<View style={{flex: 1}}>
				<View>
					<Text style={styles.text}>My List</Text>
					{this.props.dataTvMaze.isFetching}
					{
						(this.props.dataTvMaze.data.length) ?
							this.getTvShows()
						: null
					}
				</View>
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
	text: {
		color: 'white'
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
