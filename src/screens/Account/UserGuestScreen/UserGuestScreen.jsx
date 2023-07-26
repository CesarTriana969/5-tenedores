import React from 'react'
import { ScrollView } from 'react-native'
import { Button, Image } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import { screen } from "../../../utils"
import StyledText, { layout } from '../../../components/StyledText'

export function UserGuestScreen() {

  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.account.login);
  }


  return (
    <ScrollView centerContent={true} style={layout.contentUserGuest}>

      <Image source={require('../../../../assets/img/user-guest.png')}
        style={layout.image}
      />

      <StyledText
        title='titlePrimary'>
        Consultar tu perfil de 5 tenedores
      </StyledText>

      <StyledText
        text='description'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolore, excepturi laborum similique ullam, quas recusandae veritatis dolorum beatae voluptatem illum! Unde fuga, dolorem aliquam debitis numquam fugiat alias. Dolor.
      </StyledText>


      <Button
        title='ver tu perfil'
        onPress={goToLogin}
        buttonStyle={layout.btn}
      />


    </ScrollView>
  )
}