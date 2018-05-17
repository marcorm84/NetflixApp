import {combineReducers} from 'redux'
import tvShowsReducer from './tvShowsReducer'

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        dataTvMaze: tvShowsReducer
    })
} 