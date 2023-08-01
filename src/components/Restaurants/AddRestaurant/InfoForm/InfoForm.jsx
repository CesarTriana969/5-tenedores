import React, { useState } from 'react';
import { View } from 'react-native';
import { Input } from '@rneui/themed';
import { MapForm } from '../MapForm';
import { layout } from '../../../../components/StyledText';

export function InfoForm({ formik }) {

  const [showMap, setShowMap] = useState(false);

  const onOpenCloseMap = () => setShowMap((prevState) => !prevState)


  return (
    <>
      <View style={layout.contentInfoForm}>

        <Input
          placeholder='Restaurant name'
          onChangeText={(text) => formik.setFieldValue('name', text)}
          errorMessage={formik.errors.name}
        />

        <Input
          placeholder='Address'
          rightIcon={{
            type: 'material-community',
            name: 'map-marker-radius',
            color: getColorIconMap(formik),
            onPress: onOpenCloseMap,
          }}
          onChangeText={(text) => formik.setFieldValue('address', text)}
          errorMessage={formik.errors.address}
        />

        <Input
          placeholder='Telephone'
          onChangeText={(text) => formik.setFieldValue('phone', text)}
          errorMessage={formik.errors.phone}
        />

        <Input
          placeholder='Email'
          onChangeText={(text) => formik.setFieldValue('email', text)}
          errorMessage={formik.errors.email}
        />

        <Input
          placeholder='Restaurant description'
          multiline={true}
          inputContainerStyle={layout.textArea}
          onChangeText={(text) => formik.setFieldValue('description', text)}
          errorMessage={formik.errors.description}
        />

      </View>

      <MapForm show={showMap} close={onOpenCloseMap} formik={formik} />
    </>
  )
}

const getColorIconMap = (formik) => {
  
  if (formik.errors.location) return "#ff0000";
  if (formik.values.location) return "#00a680";

  return '#c2c2c2';
}