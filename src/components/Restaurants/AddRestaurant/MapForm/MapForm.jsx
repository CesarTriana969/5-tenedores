import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import * as Location from 'expo-location';
import { Modal } from '../../../Shared';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import { layout } from '../../../StyledText';


export function MapForm({ show, close }) {

  const [location, setLocation] = useState({
    latitude: 0.001,
    longitude: 0.001,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        Toast.show({
          type: 'info',
          position: 'bottom',
          text1: 'para usar el servicio de localizacion, ve a los ajustes de la app y activa la lozalizacion'
        });
        return;
      }

      const locationTemp = await Location.getCurrentPositionAsync({});

      setLocation({
        latitude: locationTemp.coords.latitude,
        longitude: locationTemp.coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      });
    })();
  }, []);


  return (
    <Modal show={show} close={close}>
      <View>
        <MapView
          initialRegion={location}
          showsUserLocation={true}
          style={layout.map}
          onRegionChange={(locationTemp) => setLocation(locationTemp)}
        >
          <Marker draggable coordinate={location} />

        </MapView>
      </View>
    </Modal>
  )
}