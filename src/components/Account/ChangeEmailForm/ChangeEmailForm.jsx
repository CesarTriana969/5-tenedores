import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button, Icon } from '@rneui/themed';
import { useFormik } from 'formik';
import {
  getAuth,
  updateEmail,
  EmailAuthProvider,
  reauthenticateWithCredential,
} from 'firebase/auth';
import { initialValues, validationSchema } from './ChangeEmailForm.data';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { layout } from '../../../components/StyledText';


export function ChangeEmailForm({ onClose, onReload }) {

  const [showPassword, setShowPassword] = useState(false);

  const showHidenPassword = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const currentUser = getAuth().currentUser;

        const credentials = EmailAuthProvider.credential(
          currentUser.email,
          formValue.password
        );
        reauthenticateWithCredential(currentUser, credentials);

        await updateEmail(currentUser, formValue.email);
        
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
  });

  return (
    <View style={layout.contentFormEdit}>

      <Input
        placeholder='nuevo email'
        containerStyle={layout.inputFormEdit}
        onChangeText={(text) => formik.setFieldValue('email', text)}
        errorMessage={formik.errors.email}
      />

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