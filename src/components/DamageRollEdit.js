import React from 'react';
import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useAppContext } from '../context/AppContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ThemedText from './ThemedText';
import PropTypes from 'prop-types';
import { damageTypes } from '../utils/RollUtils';

const DamageRollEdit = ({
  damageRoll: { amount, dieType, damageType },
  index,
  onChangeAmount,
  onChangeDieType,
  onChangeDamageType,
  onDeletePress,
}) => {
  const { rollField, inputGroup, valueText, textInput, dieText, pressable } =
    createStyles();
  const { theme } = useAppContext();

  return (
    <View style={rollField}>
      <View style={inputGroup}>
        <TextInput
          selectTextOnFocus={true}
          keyboardType='numeric'
          style={[valueText, textInput]}
          value={amount.toString()}
          onChangeText={(input) => onChangeAmount(index, input)}
        />
        <ThemedText style={dieText}>d</ThemedText>
        <TextInput
          selectTextOnFocus={true}
          keyboardType='numeric'
          style={[valueText, textInput]}
          value={dieType.toString()}
          onChangeText={(input) => onChangeDieType(index, input)}
        />
        <Picker
          style={valueText}
          selectedValue={damageType}
          onValueChange={(input) => onChangeDamageType(index, input)}
        >
          {damageTypes.map((damageType) => (
            <Picker.Item
              key={damageType}
              label={damageType}
              value={damageType}
            />
          ))}
        </Picker>
      </View>
      <View>
        <Pressable style={pressable} onPress={() => onDeletePress(index)}>
          <Ionicons name='close' color={theme.ACCENT_COLOR} size={40} />
        </Pressable>
      </View>
    </View>
  );
};

const createStyles = () => {
  const { theme } = useAppContext();
  return StyleSheet.create({
    rollField: {
      backgroundColor: theme.TERTIARY_COLOR,
      borderRadius: 5,
      paddingBottom: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    inputGroup: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    valueText: {
      padding: 5,
      paddingLeft: 10,
      borderWidth: 5,
      borderRadius: 5,
      borderColor: theme.ACCENT_COLOR,
      backgroundColor: theme.INPUT_COLOR,
      flex: 1,
      textAlignVertical: 'center',
      includeFontPadding: false,
      marginLeft: 3,
      marginRight: 3,
    },
    textInput: {
      maxWidth: 50,
    },
    dieText: {
      fontSize: 20,
    },
    pressable: {
      marginBottom: 5,
    },
  });
};

DamageRollEdit.propTypes = {
  damageRoll: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    dieType: PropTypes.number.isRequired,
    damageType: PropTypes.oneOf(damageTypes).isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onChangeAmount: PropTypes.func.isRequired,
  onChangeDieType: PropTypes.func.isRequired,
  onChangeDamageType: PropTypes.func.isRequired,
  onDeletePress: PropTypes.func.isRequired,
};

export default DamageRollEdit;
