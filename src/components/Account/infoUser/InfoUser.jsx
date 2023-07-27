import React from 'react'
import { View } from 'react-native'
import { Avatar } from '@rneui/themed'
import { getAuth } from 'firebase/auth'
import StyledText, { layout } from '../../../components/StyledText'

export function InfoUser() {

  const { uid, photoUrl, displayName, email } = getAuth().currentUser;

  const changeAvatar = () => {
    console.log('cambiar avatar')
  }

  return (
    <View style={layout.contentInfoUser}>
      <Avatar
        size='large'
        rounded
        containerStyle={layout.avatar}
        icon={{ type: 'material', name: 'person' }}
        source={{ uri: photoUrl }}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />
      </Avatar>

      <View>

        <StyledText display='name' >
          {displayName || 'Anonimo'}
        </StyledText>

        <StyledText>
          {email}
        </StyledText>

      </View>

    </View>
  )
}