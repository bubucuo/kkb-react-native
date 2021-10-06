import React from 'react';
import {Button} from 'react-native';

export default function CustomButton({title, onPress}) {
  return (
    <Button
      title={title}
      accessibilityLabel={title}
      color={Platform.OS === 'ios' ? 'white' : '#f03d37'}
      onPress={onPress}
    />
  );
}
