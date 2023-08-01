import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { screen } from '../../utils'
import { Icon } from '@rneui/themed'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { layout } from '../../components/StyledText'
// import { useNavigation } from '@react-navigation/native' 
const RestaurantsScreen = ({ navigation }) => {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    })
  }, []);



  const goToAddRestaurant = () => {
    navigation.navigate(screen.restaurant.tab, { screen: screen.restaurant.addRestaurant });
  }


  return (
    <View style={layout.contentAdd}>
      <Text>RestaurantsScreen</Text>

      {currentUser && (
        <Icon
          reverse
          type='material-community'
          name='plus'
          color='#00a680'
          containerStyle={layout.btnAdd}
          onPress={goToAddRestaurant}
        />
      )}

    </View>
  )
}

export default RestaurantsScreen