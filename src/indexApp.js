import React, { Component } from 'react'
import App from './App'
import Search from './components/Search'
import List from './components/List'
import {StackNavigator} from 'react-navigation'

const IndexApp = StackNavigator({
	Home: {screen: App},
	Search: {screen: Search},
}, {
	headerMode: 'screen'
})

export default IndexApp