import {createStackNavigator} from 'react-navigation'
import PetListScreen from './Screens/PetListScreen'
import PetEditScreen from './Screens/PetEditScreen'

export default createStackNavigator({
  petListScreen: { screen: PetListScreen },
  petEditScreen: { screen: PetEditScreen }
}, {
  initialRouteName: 'petListScreen'
})
