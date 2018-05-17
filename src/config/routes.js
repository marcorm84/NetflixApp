import App from '../App'
import Search from '../components/Search'

const Routes = {
    Home: {
        screen: App, 
        navigationOptions: ({navigation}) => ({
            header: false
          })
    },
    Search: {
        screen: Search,
        navigationOptions: ({navigation}) => ({
            header: false
        })
    }
}

export default Routes