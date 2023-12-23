import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { putAttack } from '../utils/ApiUtils';
import DamageRollEdit from '../components/DamageRollEdit';
import { useAppContext } from '../context/AppContext';
import { createBottomStyles, createInputStyles } from '../styles/style';
import ThemedText from '../components/ThemedText';
import { SettingsRow } from '../components/SettingsRow';
import {
  abilityTypes,
  damageTypes,
  hasRange,
  parseIntInput,
  rangeTypes,
} from '../utils/RollUtils';
import PropTypes from 'prop-types';

const AttackEdit = ({ route, navigation }) => {
  const {
    container,
    addButton,
    buttonText,
    label,
    smallLabel,
    scrollView,
    listSeperator,
  } = createStyles();
  const { bottom } = createBottomStyles();
  const { inputGroup, valueText } = createInputStyles();

  const {
    id,
    name,
    damageModifier,
    abilityType,
    damageRolls,
    range: { rangeType, normalRange, longRange },
  } = route.params.attack;

  const [editName, setName] = useState(name);
  const [editDamageModifier, setDamageModifier] = useState(damageModifier);
  const [editAbilityType, setAbilityType] = useState(abilityType);
  const [editDamageRolls, setDamageRolls] = useState(damageRolls);
  const [editRange, setRange] = useState({
    rangeType: rangeType,
    normalRange: normalRange == null ? 0 : normalRange,
    longRange: longRange == null ? 0 : longRange,
  });

  const changeDamageRoll = (index, field, value) => {
    const updatedRolls = [...editDamageRolls];
    updatedRolls[index][field] = value;
    setDamageRolls(updatedRolls);
  };

  const changeRange = (field, value) => {
    const updatedRange = { ...editRange };
    updatedRange[field] = value;
    setRange(updatedRange);
  };

  const addDamageRoll = () => {
    const newEditRolls = [...editDamageRolls];
    newEditRolls.push({
      amount: 1,
      dieType: 6,
      damageType: 'Slashing',
    });
    setDamageRolls(newEditRolls);
  };

  const deleteDamageRoll = (index) => {
    if (editDamageRolls.length > 1) {
      const newEditRolls = [...editDamageRolls];
      newEditRolls.splice(index, 1);
      setDamageRolls(newEditRolls);
    }
  };

  const saveChanges = async () => {
    const editAttack = {
      id: id,
      name: editName,
      damageModifier: editDamageModifier,
      abilityType: editAbilityType,
      damageRolls: editDamageRolls,
      range: editRange,
    };
    await putAttack(editAttack);
    navigation.goBack();
  };

  return (
    <View style={container}>
      <ScrollView contentContainerStyle={scrollView}>
        <View style={inputGroup}>
          <ThemedText style={label}>Name</ThemedText>
          <TextInput
            style={valueText}
            value={editName}
            onChangeText={(input) => setName(input)}
          ></TextInput>
        </View>
        <SettingsRow
          label='Damage Modifier'
          value={editDamageModifier}
          setValue={(input) => setDamageModifier(input)}
        />
        <View style={inputGroup}>
          <ThemedText style={label}>Ability type</ThemedText>
          <Picker
            style={valueText}
            selectedValue={editAbilityType}
            onValueChange={(input) => setAbilityType(input)}
          >
            {abilityTypes.map((abilityType) => (
              <Picker.Item
                key={abilityType}
                label={abilityType}
                value={abilityType}
              />
            ))}
          </Picker>
        </View>
        <View style={inputGroup}>
          <ThemedText style={label}>Damage rolls</ThemedText>
          {editDamageRolls.map((item, index) => (
            <View key={index}>
              <DamageRollEdit
                damageRoll={item}
                index={index}
                onChangeAmount={(index, input) => {
                  changeDamageRoll(index, 'amount', parseIntInput(input, 1));
                }}
                onChangeDieType={(index, input) => {
                  changeDamageRoll(index, 'dieType', parseIntInput(input, 1));
                }}
                onChangeDamageType={(index, input) =>
                  changeDamageRoll(index, 'damageType', input)
                }
                onDeletePress={() => deleteDamageRoll(index)}
              />
              {index < editDamageRolls.length - 1 && (
                <View style={listSeperator} />
              )}
            </View>
          ))}
          <Pressable style={addButton} onPress={() => addDamageRoll()}>
            <Text style={buttonText}>Add roll</Text>
          </Pressable>
        </View>
        <View style={inputGroup}>
          <ThemedText style={label}>Range</ThemedText>
          <ThemedText style={smallLabel}>Range type</ThemedText>
          <Picker
            style={valueText}
            selectedValue={editRange.rangeType}
            onValueChange={(input) => changeRange('rangeType', input)}
          >
            {rangeTypes.map((rangeType) => (
              <Picker.Item
                key={rangeType}
                label={rangeType}
                value={rangeType}
              />
            ))}
          </Picker>
          {hasRange(editRange.rangeType) && (
            <View>
              <ThemedText style={smallLabel}>Normal range</ThemedText>
              <TextInput
                selectTextOnFocus={true}
                keyboardType='numeric'
                style={valueText}
                value={editRange.normalRange.toString()}
                onChangeText={(input) => {
                  changeRange('normalRange', parseIntInput(input, 0));
                }}
              />
              <ThemedText style={smallLabel}>Long range</ThemedText>
              <TextInput
                selectTextOnFocus={true}
                keyboardType='numeric'
                style={valueText}
                value={editRange.longRange.toString()}
                onChangeText={(input) => {
                  changeRange('longRange', parseIntInput(input, 0));
                }}
              />
            </View>
          )}
        </View>
      </ScrollView>
      <Pressable style={bottom} onPress={() => saveChanges()}>
        <Text style={buttonText}>Save Changes</Text>
      </Pressable>
    </View>
  );
};

const createStyles = () => {
  const { theme } = useAppContext();
  return StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 10,
    },
    addButton: {
      width: '100%',
      padding: 5,
      borderRadius: 5,
      backgroundColor: theme.ACCENT_COLOR,
    },
    buttonText: {
      alignSelf: 'center',
      fontWeight: '600',
    },
    label: {
      paddingBottom: 5,
      fontWeight: '600',
    },
    smallLabel: {
      paddingBottom: 5,
    },
    scrollView: {
      paddingBottom: 60,
    },
    listSeperator: {
      backgroundColor: theme.PRIMARY_COLOR,
      height: 2,
      marginBottom: 5,
    },
  });
};

AttackEdit.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      attack: PropTypes.shape({
        id: PropTypes.number.isRequired,
        damageModifier: PropTypes.number.isRequired,
        abilityType: PropTypes.oneOf(abilityTypes).isRequired,
        damageRolls: PropTypes.arrayOf(
          PropTypes.shape({
            amount: PropTypes.number.isRequired,
            dieType: PropTypes.number.isRequired,
            damageType: PropTypes.oneOf(damageTypes).isRequired,
          })
        ).isRequired,
        range: PropTypes.shape({
          rangeType: PropTypes.oneOf(rangeTypes),
          normalRange: PropTypes.number,
          longRange: PropTypes.number,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default AttackEdit;
