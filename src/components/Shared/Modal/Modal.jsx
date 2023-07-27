import React from 'react';
import { layout } from '../../../components/StyledText';
import { Overlay } from '@rneui/themed';


export function Modal({ show, close, children }) {
  return (
    <Overlay
      isVisible={show}
      overlayStyle={layout.overlayModal}
      onBackdropPress={close}
    >

      {children}

    </Overlay>
  )
}