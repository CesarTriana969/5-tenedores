import React from 'react'
import { View, ScrollView } from 'react-native'
import { Image } from '@rneui/themed'
import StyledText, { layout } from '../../../components/StyledText'
import { useNavigation } from '@react-navigation/native'
import { screen } from '../../../utils'


export function LoginScreen() {

  const navigation = useNavigation();

  const goToRegister = () => {
    navigation.navigate(screen.account.register)
  }

  return (
    <ScrollView>

      <Image
        source={require('../../../../assets/img/img-default.png')}
        style={layout.imgLogin}
      />

      <View style={layout.content}>
        <StyledText>
          Estamos en el login
        </StyledText>

        <StyledText onPress={goToRegister}>
          Registrarse
        </StyledText>
      </View>


    </ScrollView>
  )
}

