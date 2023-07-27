import React from 'react';
import { View } from 'react-native';
import { Avatar } from '@rneui/themed';
import * as ImagePicker from 'expo-image-picker';
import { getAuth, updateProfile } from 'firebase/auth';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import StyledText, { layout } from '../../../components/StyledText';
import { useState } from 'react';

export function InfoUser({ setLoading, setLoadingText }) {

  const { uid, photoUrl, displayName, email } = getAuth().currentUser;
  const [avatar, setAvatar] = useState(photoUrl)



  const changeAvatar = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });
    if (!result.canceled) uploadImage(result.uri);
  };


  const uploadImage = async (uri) => {

    setLoadingText('Actualizando Avatar');
    setLoading(true);

    const response = await fetch(uri);
    const blob = await response.blob();

    const storage = getStorage();
    const storageRef = ref(storage, `avatar/${uid}`);

    uploadBytes(storageRef, blob).then((snapshot) => {
      updatePhotoUrl(snapshot.metadata.fullPath);
    })
  };


  const updatePhotoUrl = async (imagePath) => {
    const storage = getStorage();
    const imageRef = ref(storage, imagePath);

    const imageUrl = await getDownloadURL(imageRef);

    const auth = getAuth();
    updateProfile(auth.currentUser, { photoURL: imageUrl });

    setAvatar(imageUrl);
    setLoading(false);
  };


  return (
    <View style={layout.contentInfoUser}>
      <Avatar
        size='large'
        rounded
        containerStyle={layout.avatar}
        icon={{ type: 'material', name: 'person' }}
        source={{ uri: avatar }}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />
      </Avatar>

      <View>

        <StyledText display='name' >
          {displayName || 'Anonimo'}
        </StyledText>

        <StyledText>
          {email}
        </StyledText>

      </View>

    </View>
  )
}