import React from 'react'
import { View } from 'react-native'
import { InfoUser } from '../../../components/Account'
import { layout } from '../../../components/StyledText'
import { Button } from '@rneui/themed'
import { getAuth, signOut } from 'firebase/auth'

export function UserLoggedScreen() {

  const logOut = async () => {
    const auth = getAuth();
    await signOut(auth);
  }

  return (
    <View>
      <InfoUser />

      <Button
        title='cerrar sesión'
        buttonStyle={layout.btnLogout}
        titleStyle={layout.btnLogoutText}
        onPress={logOut}
      />
    </View>
  );
}