import React from 'react';
import { StyleSheet, Switch, ScrollView, Pressable, Text } from 'react-native';
import { useAppContext } from '../context/AppContext';
import { dark, light } from '../styles/theme.style';
import { SettingsRow } from '../components/SettingsRow';
import { createInputStyles } from '../styles/style';

const AppSettings = () => {
  const { container, label, row } = createStyles();
  const { inputGroup } = createInputStyles();

  const {
    strength,
    setStrength,
    dexterity,
    setDexterity,
    spellCasting,
    setSpellCasting,
    theme,
    toggleDarkMode,
  } = useAppContext();

  return (
    <ScrollView contentContainerStyle={container}>
      <SettingsRow
        label='Strength Modifier'
        value={strength}
        setValue={setStrength}
      />
      <SettingsRow
        label='Dexterity Modifier'
        value={dexterity}
        setValue={setDexterity}
      />
      <SettingsRow
        label='Spellcasting Modifier'
        value={spellCasting}
        setValue={setSpellCasting}
      />
      <Pressable style={[inputGroup, row]} onPress={toggleDarkMode}>
        <Text selectable={false} style={label}>
          Darkmode
        </Text>
        <Switch
          style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
          value={theme == dark}
          trackColor={{
            true: dark.ACCENT_COLOR,
            false: light.PRIMARY_COLOR,
          }}
          onChange={toggleDarkMode}
          thumbColor={light.SECONDARY_COLOR}
          activeThumbColor={dark.PRIMARY_COLOR}
        />
      </Pressable>
    </ScrollView>
  );
};

const createStyles = () => {
  const { theme } = useAppContext();
  return StyleSheet.create({
    container: {
      marginHorizontal: 10,
      paddingBottom: 10,
    },
    label: {
      color: theme.TEXT_COLOR,
      fontWeight: '600',
    },
    row: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      paddingVertical: 15,
      paddingRight: 20,
      alignItems: 'center',
    },
  });
};

export default AppSettings;
