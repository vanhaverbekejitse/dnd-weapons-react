import React from 'react';
import { useAppContext } from '../context/AppContext';
import { Text } from 'react-native-elements';

const ThemedText = ({ children, style }) => {
  const { theme } = useAppContext();

  return <Text style={[{ color: theme.TEXT_COLOR }, style]}>{children}</Text>;
};

export default ThemedText;
