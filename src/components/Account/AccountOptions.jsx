import React from 'react'
import { View } from 'react-native'
import { ListItem, Icon } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { map } from 'lodash';

export function AccountOptions() {

  const menuOptions = getMenuOptions();

  return (
    <View>
      {map(menuOptions, (menu, index) => (

        <ListItem
          key={index}
          bottomDivider
          onPress={menu.onPress}
        >

          <Icon
            type={menu.icontType}
            name={menu.iconNameLeft}
            color={menu.iconColorLeft}
          />


          <ListItem.Content>
            <ListItem.Title>{menu.title}</ListItem.Title>
          </ListItem.Content>

          <Icon
            type={menu.icontType}
            name={menu.iconNameRight}
            color={menu.iconColorRight}
          />

        </ListItem>
      ))}
    </View>
  );
}

function getMenuOptions() {
  return [
    {
      title: 'cambiar nombre y apellidos',
      icontType: 'material-community',
      iconNameLeft: 'account-circle',
      iconColorLeft: '#ccc',
      iconNameRight: 'chevron-right',
      iconColorRight: '#ccc',
      onPress: () => console.log('cambiar nombre y apellidos')
    },
    {
      title: 'cambiar email',
      icontType: 'material-community',
      iconNameLeft: 'at',
      iconColorLeft: '#ccc',
      iconNameRight: 'chevron-right',
      iconColorRight: '#ccc',
      onPress: () => console.log('cambiar email')
    },
    {
      title: 'cambiar contraseña',
      icontType: 'material-community',
      iconNameLeft: 'lock-reset',
      iconColorLeft: '#ccc',
      iconNameRight: 'chevron-right',
      iconColorRight: '#ccc',
      onPress: () => console.log('cambiar contraseña')
    }
  ]
}