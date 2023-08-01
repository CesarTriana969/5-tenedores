import React, { useState } from 'react'
import { View } from 'react-native'
import { Input, Button, Icon } from '@rneui/themed';
import { useFormik } from 'formik';
import {
  getAuth,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential
} from 'firebase/auth';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { initialValues, validationSchema } from './ChangePasswordForm.data';
import { layout } from '../../../components/StyledText';


export function ChangePasswordForm({ onClose, onReload }) {

  const [showPassword, setShowPassword] = useState(false);
  const [showSecondPassword, setShowSecondPassword] = useState(false);

  const showHidenPassword = () => setShowPassword((prevState) => !prevState);
  const showHidenSecondPassword = () => setShowSecondPassword((prevState) => !prevState);


  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,

    onSubmit: async (formValue) => {
      try {
        const currentUser = getAuth().currentUser;

        const credentials = EmailAuthProvider.credential(
          currentUser.email,
          formValue.password,
        );

        reauthenticateWithCredential(currentUser, credentials);

        await updatePassword(currentUser, formValue.new_password)

        onReload();
        onClose();
      } catch (error) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'error al actualizar'
        })
      }
    }
  })


  return (
    <View style={layout.contentFormEdit}>

      <Input
        placeholder='password'
        containerStyle={layout.inputFormEdit}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type='material-community'
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            iconStyle={layout.icon}
            onPress={showHidenPassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue('password', text)}
        errorMessage={formik.errors.password}
      />

      <Input
        placeholder='new password'
        containerStyle={layout.inputFormEdit}
        secureTextEntry={showSecondPassword ? false : true}
        rightIcon={
          <Icon
            type='material-community'
            name={showSecondPassword ? 'eye-off-outline' : 'eye-outline'}
            iconStyle={layout.icon}
            onPress={showHidenSecondPassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue('new_password', text)}
        errorMessage={formik.errors.new_password}
      />

      <Input
        placeholder='new password confirm'
        containerStyle={layout.inputFormEdit}
        secureTextEntry={showSecondPassword ? false : true}
        rightIcon={
          <Icon
            type='material-community'
            name={showSecondPassword ? 'eye-off-outline' : 'eye-outline'}
            iconStyle={layout.icon}
            onPress={showHidenSecondPassword}
          />
        }
        onChangeText={(text) => formik.setFieldValue('new_password_confirm', text)}
        errorMessage={formik.errors.new_password_confirm}
      />

      <Button
        title='actualizar email'
        containerStyle={layout.btnFormEdit}
        buttonStyle={layout.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />

    </View>
  )
}