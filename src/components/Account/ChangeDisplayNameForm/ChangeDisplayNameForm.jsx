import React from 'react'
import { View } from 'react-native'
import { Input, Button } from '@rneui/themed';
import { useFormik } from 'formik';
import { getAuth, updateProfile } from 'firebase/auth'
import { initialValues, validationSchema } from './ChangeDisplayNameForm.data'
import StyledText, { layout } from '../../../components/StyledText';
import { Toast } from 'react-native-toast-message/lib/src/Toast';

export function ChangeDisplayNameForm({ onClose, onReload }) {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const { displayName } = formValue;
        const currentUser = getAuth().currentUser;
        await updateProfile(currentUser, { displayName });

        onReload();
        onClose();
      } catch (error) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'error al actualizar el nombre'
        })
      }
    }
  });

  return (
    <View style={layout.contentFormEdit}>

      <Input
        placeholder='Nombre y apellidos'
        rightIcon={{
          type: 'material-community', name: 'account-circle-outline',
          color: '#c2c2c2'
        }}
        onChangeText={(text) => formik.setFieldValue('displayName', text)}
        errorMessage={formik.errors.displayName}
      />

      <Button
        title='cambiar nombre y apellidos'
        containerStyle={layout.btnFormEdit}
        buttonStyle={layout.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />

    </View>
  )
}