import React, { useState } from 'react'
import { View } from 'react-native'
import { ListItem, Icon } from '@rneui/themed';
import { map } from 'lodash';
import { Modal } from '../../components'
import { ChangeDisplayNameForm } from './ChangeDisplayNameForm';
import { ChangeEmailForm } from './ChangeEmailForm';
import { ChangePasswordForm } from './ChangePasswordForm'
import StyledText from '../StyledText';


export function AccountOptions({ onReload }) {

  const [showModal, setShowModal] = useState(false);
  const [renderModal, setRenderModal] = useState(null);



  const onCloseOpenModal = () => setShowModal((prevState) => !prevState);

  const selectComponent = (key) => {
    if (key === 'displayName') {
      setRenderModal(<ChangeDisplayNameForm onClose={onCloseOpenModal} onReload={onReload} />);
    }
    if (key === 'email') {
      setRenderModal(<ChangeEmailForm onClose={onCloseOpenModal} onReload={onReload} />);
    }
    if (key === 'password') {
      setRenderModal(<ChangePasswordForm onClose={onCloseOpenModal} onReload={onReload} />);
    }

    onCloseOpenModal();
  }

  const menuOptions = getMenuOptions(selectComponent);


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

      <Modal
        show={showModal}
        close={onCloseOpenModal}
      >

        {renderModal}

      </Modal>
    </View>
  );
}

function getMenuOptions(selectComponent) {
  return [
    {
      title: 'cambiar nombre y apellidos',
      icontType: 'material-community',
      iconNameLeft: 'account-circle',
      iconColorLeft: '#ccc',
      iconNameRight: 'chevron-right',
      iconColorRight: '#ccc',
      onPress: () => selectComponent('displayName'),
    },
    {
      title: 'cambiar email',
      icontType: 'material-community',
      iconNameLeft: 'at',
      iconColorLeft: '#ccc',
      iconNameRight: 'chevron-right',
      iconColorRight: '#ccc',
      onPress: () => selectComponent('email'),
    },
    {
      title: 'cambiar contraseña',
      icontType: 'material-community',
      iconNameLeft: 'lock-reset',
      iconColorLeft: '#ccc',
      iconNameRight: 'chevron-right',
      iconColorRight: '#ccc',
      onPress: () => selectComponent('password'),
    }
  ]
}