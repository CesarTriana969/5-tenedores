import React, { useState } from 'react'
import { View } from 'react-native'
import { Input, Button, Icon } from '@rneui/themed';
import { layout } from '../../../components/StyledText';


export function ChangePasswordForm() {

  const [showPassword, setShowPassword] = useState(false);
  const [showSecondPassword, setShowSecondPassword] = useState(false);

  const showHidenPassword = () => setShowPassword((prevState) => !prevState);
  const showHidenSecondPassword = () => setShowSecondPassword((prevState) => !prevState);


  return (
    <View style={layout.contentFormEdit}>

      <Input
        placeholder='your password'
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
      />

      <Input
        placeholder='new password again'
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
      />

      <Button
        title='actualizar email'
        containerStyle={layout.btnFormEdit}
        buttonStyle={layout.btn}
        // onPress={formik.handleSubmit}
        // loading={formik.isSubmitting}
      />

    </View>
  )
}