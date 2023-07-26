import React from 'react'
import { View } from 'react-native'
import StyledText, { layout } from '../../../components/StyledText'
import { Image } from '@rneui/themed'
import { RegisterForm } from '../../../components/Auth'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export function RegisterScreen() {

  return (
    <KeyboardAwareScrollView>

      <Image
        source={require('../../../../assets/img/img-default.png')}
        style={layout.imgLogin}
      />

      <View style={layout.content}>
        <RegisterForm />
      </View>

    </KeyboardAwareScrollView>
  )
}
