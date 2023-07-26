import React from 'react'
import { View, Text, Button } from 'react-native'
import { screen } from '../../utils'
// import { useNavigation } from '@react-navigation/native' 

const RestaurantsScreen = (props) => {

  const { navigation } = props;

  const goToAddRestaurant = () => {
    navigation.navigate(screen.restaurant.addRestaurant)

    // navigation.navigate(screen.account.tab, { screen: screen.account.account })
  }


  return (
    <View>
      <Text>RestaurantsScreen</Text>

      <Button
        title="add restaurant"
        onPress={goToAddRestaurant}
      />
    </View>
  )
}

export default RestaurantsScreen