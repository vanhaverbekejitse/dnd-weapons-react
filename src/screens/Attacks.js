import React from 'react';
import { Text, FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useState, useEffect } from 'react';
import { getDamageText, getRangeText } from '../utils/TextUtils';
import { roll } from '../utils/RollUtils';
import { getAttacks } from '../utils/ApiUtils';
import { useAppContext } from '../context/AppContext';
import { createBottomStyles } from '../styles/style';
import ThemedText from '../components/ThemedText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useWindowDimensions } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

const Attacks = ({ navigation }) => {
  const {
    result,
    container,
    pressable,
    nameText,
    statText,
    list,
    infoContainer,
    editButton,
  } = createStyles();
  const { theme, getExtraDamage } = useAppContext();
  const { bottom } = createBottomStyles();

  const isFocused = useIsFocused();

  const [attacks, setAttacks] = useState([]);
  const [rollResult, setRollResult] = useState(
    'Press an attack to roll for damage!'
  );

  useEffect(() => {
    if (isFocused) {
      getAttacks()
        .then((data) => setAttacks(data))
        .catch((error) => console.error(error));
    }
  }, [isFocused]);

  return (
    <View style={container}>
      <FlatList
        contentContainerStyle={list}
        data={attacks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({
          item,
          item: { damageRolls, damageModifier, abilityType, name, range },
        }) => (
          <Pressable
            style={pressable}
            onPress={() => {
              setRollResult(
                roll(
                  damageRolls,
                  damageModifier + getExtraDamage(abilityType),
                  name
                )
              );
            }}
          >
            <View style={infoContainer}>
              <Text selectable={false} style={nameText}>
                {name}
              </Text>
              <Text selectable={false} style={statText}>
                {getDamageText(
                  damageRolls,
                  damageModifier + getExtraDamage(abilityType)
                )}
              </Text>
              <Text selectable={false} style={statText}>
                {getRangeText(range)}
              </Text>
            </View>
            <Pressable
              style={editButton}
              onPress={() => navigation.navigate('Edit', { attack: item })}
            >
              <Ionicons name='hammer' color={theme.TEXT_COLOR} size={40} />
            </Pressable>
          </Pressable>
        )}
      />
      <ThemedText style={[bottom, result]}>{rollResult}</ThemedText>
    </View>
  );
};

const createStyles = () => {
  const { theme } = useAppContext();
  const { width } = useWindowDimensions();
  return StyleSheet.create({
    result: {
      backgroundColor: theme.SECONDARY_COLOR,
      fontWeight: '600',
    },
    container: {
      marginHorizontal: 10,
      flex: 1,
    },
    pressable: {
      flexDirection: 'row',
      backgroundColor: theme.TERTIARY_COLOR,
      borderRadius: 10,
      borderColor: theme.TERTIARY_COLOR,
      borderWidth: 2,
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      marginTop: 10,
    },
    nameText: {
      fontWeight: '600',
      fontSize: 20,
      color: theme.TEXT_COLOR,
    },
    statText: {
      fontSize: 16,
      color: theme.TEXT_COLOR,
    },
    list: {
      paddingBottom: 80,
    },
    infoContainer: {
      width: width - 100,
    },
    editButton: {
      marginBottom: 5,
    },
  });
};

export default Attacks;
