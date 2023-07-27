import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Input, Button } from '@rneui/themed'
import Ionicons from 'react-native-vector-icons/Ionicons';
// import { useFormik } from 'formik'
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
// import { useNavigation } from '@react-navigation/native'
// import { screen } from '../../../utils'
// import { initialValues, validationSchema } from './RegisterForm.data';
import StyledText, { layout } from '../../../components/StyledText'
// import { Toast } from 'react-native-toast-message/lib/src/Toast';


export function LoginForm() {

  const [showPassword, setShowPassword] = useState(false);

  const showHidenPassword = () => setShowPassword((prevState) => !prevState);


  return (
    <View style={layout.contentForm}>

      <Input
        placeholder='email'
        containerStyle={layout.input}
        rightIcon={
          <Ionicons
            type='material-community'
            name='at'
            iconStyle={layout.icon}
          />
        }
      // onChangeText={(text) => formik.setFieldValue('email', text)}
      // errorMessage={formik.errors.email}
      />

      <Input
        placeholder='password'
        containerStyle={layout.input}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Ionicons
            type='material-community'
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            iconStyle={layout.icon}
            onPress={showHidenPassword}
          />
        }
      // onChangeText={(text) => formik.setFieldValue('password', text)}
      // errorMessage={formik.errors.password}
      />

      <Button
        title="Iniciar seccion"
        containerStyle={layout.btnForm}
        buttonStyle={layout.btn}
      // onPress={formik.handleSubmit}
      // loading={formik.isSubmitting}
      />
    </View>
  )
}