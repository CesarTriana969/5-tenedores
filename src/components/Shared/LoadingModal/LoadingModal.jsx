import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

import StyledText, {layout} from '../../StyledText'
import { Overlay } from '@rneui/themed'

export function LoadingModal(props) {
  const { show, text } = props;

  return (
    <Overlay isVisible={show} 
    overlayStyle={layout.overlay}
    
    >
      <View style={layout.view}>
        <ActivityIndicator
          size="large"
          color="#00a680"
        />
        {text && 

        <StyledText loader='loader'>
          {text}
        </StyledText>}

      </View>
    </Overlay>
  )
}

LoadingModal.defaultProps = {
  show: false,
}
