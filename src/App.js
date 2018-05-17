import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';
import SideMenu from 'react-native-side-menu'
import List from './components/List'
import Slide from './components/Slider'
import Header from './components/Header'
import Menu from './components/Menu'
import configureStore from './store'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isOpen: false
		}
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
	updateMenu(isOpen) {
		this.setState({isOpen})
	}
    render() {
	    return (
	    	<View style={{flex: 1}}>
	    		<SideMenu
	    			menu={<Menu />}
	    			isOpen={this.state.isOpen}
	    			onChange={(isOpen) => this.updateMenu(isOpen)}
	    		>
	    			<ScrollView style={[{flex: 1}, styles.container]}>
			    		<Header navigation={this.props.navigation} toggle={this.toggle.bind(this)}/>
			        	<Slide />
			       		<List navigation={this.props.navigation} />
	    			</ScrollView>
	    		</SideMenu>
	    	</View>
	    )
    }
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'black'
	}
})

export default App
