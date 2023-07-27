import React from 'react'
import { View } from 'react-native'
import { InfoUser, AccountOptions } from '../../../components/Account'
import { Button } from '@rneui/themed'
import { getAuth, signOut } from 'firebase/auth'
import { LoadingModal } from '../../../components/'
import { useState } from 'react'
import { layout } from '../../../components/StyledText'

export function UserLoggedScreen() {

  const [loading, setLoading] = useState(false)
  const [loadingText, setLoadingText] = useState('')

  const logOut = async () => {
    const auth = getAuth();
    await signOut(auth);
  }

  return (
    <View>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />

      <AccountOptions />

      <Button
        title='cerrar sesión'
        buttonStyle={layout.btnLogout}
        titleStyle={layout.btnLogoutText}
        onPress={logOut}
      />

      <LoadingModal show={loading} text={loadingText} />
    </View>
  );
}