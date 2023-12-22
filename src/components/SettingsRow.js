import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import ThemedText from './ThemedText';
import { addPlusSign } from '../utils/TextUtils';
import { createInputStyles } from '../styles/style';
import PropTypes from 'prop-types';

export const SettingsRow = ({ label, value, setValue }) => {
  const { labelText, row, pressableText } = createStyles();
  const { inputGroup, valueText, inputButton } = createInputStyles();

  return (
    <View style={inputGroup}>
      <ThemedText style={labelText}>{label}</ThemedText>
      <View style={row}>
        <Text style={valueText}>{addPlusSign(value)}</Text>
        <Pressable style={inputButton} onPress={() => setValue(value - 1)}>
          <Text selectable={false} style={pressableText}>
            -
          </Text>
        </Pressable>
        <Pressable style={inputButton} onPress={() => setValue(value + 1)}>
          <Text selectable={false} style={pressableText}>
            +
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const createStyles = () => {
  return StyleSheet.create({
    labelText: {
      paddingBottom: 5,
      fontWeight: '600',
    },
    row: {
      gap: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    pressableText: {
      alignSelf: 'center',
      fontWeight: 'bold',
      fontSize: 26,
    },
  });
};

SettingsRow.proptypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};
