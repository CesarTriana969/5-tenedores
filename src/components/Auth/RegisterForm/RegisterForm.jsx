import React from 'react'
import { View, Text } from 'react-native'
import { Input, Button } from '@rneui/themed'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFormik } from 'formik'
import { initialValues, validationSchema } from './RegisterForm.data';
import StyledText, { layout } from '../../../components/StyledText'
import { useState } from 'react';


export function RegisterForm() {


  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordTwo, setShowPasswordTwo] = useState(false)


  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: (formValue) => {
      console.log('formulario')
      console.log(formValue)
    }
  });

  const showHidenPassword = () => setShowPassword((prevState) => !prevState);
  const showHidenPasswordTwo = () => setShowPasswordTwo((prevState) => !prevState);

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
        onChangeText={(text) => formik.setFieldValue('email', text)}
        errorMessage={formik.errors.email}
      />

      <Input
        placeholder='contraseña'
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
        onChangeText={(text) => formik.setFieldValue('password', text)}
        errorMessage={formik.errors.password}
      />

      <Input
        placeholder='repetir contraseña'
        containerStyle={layout.input}
        secureTextEntry={showPasswordTwo ? false : true}
        rightIcon={
          <Ionicons
            type='material-community'
            name={showPasswordTwo ? 'eye-off-outline' : 'eye-outline'}
            iconStyle={layout.icon}
            onPress={showHidenPasswordTwo}
          />
        }
        onChangeText={(text) => formik.setFieldValue('repeatPassword', text)}
        errorMessage={formik.errors.repeatPassword}
      />

      <Button
        title="Unirse"
        containerStyle={layout.btnForm}
        buttonStyle={layout.btn}
        onPress={formik.handleSubmit}
      />

    </View>
  )
}