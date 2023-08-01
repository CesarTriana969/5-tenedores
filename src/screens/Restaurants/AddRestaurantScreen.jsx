import React from 'react';
import { View } from 'react-native';
import { Button } from '@rneui/themed';
import { useFormik } from 'formik';
import { InfoForm } from '../../components/Restaurants';
import { initialValues, validationSchema } from './AddRestaurantScreen.data';
import { layout } from '../../components/StyledText';


const AddRestaurantScreen = () => {

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue)
    }
  });

  return (
    <View>
      <InfoForm formik={formik} />

      <Button
        title='Add new restaurant'
        buttonStyle={layout.btnAddRestaurant}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  )
}

export default AddRestaurantScreen