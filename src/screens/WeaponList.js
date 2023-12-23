import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  View,
  Pressable,
  TextInput,
} from 'react-native';
import { useState, useEffect } from 'react';
import { getImagePath } from '../utils/ImageUtils';
import { getWeaponsByName } from '../utils/ApiUtils';
import { useAppContext } from '../context/AppContext';
import ThemedText from '../components/ThemedText';
import { useWindowDimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const WeaponList = ({ navigation }) => {
  const { theme } = useAppContext();
  const {
    container,
    searchBox,
    list,
    listItem,
    nameText,
    pressable,
    left,
    image,
  } = createStyles();

  const [weapons, setWeapons] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getWeaponsByName(search)
      .then((data) => setWeapons(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredWeapons = weapons.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'Uncommon':
        return theme.UNCOMMON_COLOR;
      case 'Rare':
        return theme.RARE_COLOR;
      case 'Very rare':
        return theme.VERY_RARE_COLOR;
      case 'Legendary':
        return theme.LEGENDARY_COLOR;
      default:
        return theme.TEXT_COLOR;
    }
  };

  return (
    <View style={container}>
      <TextInput
        selectTextOnFocus={true}
        style={searchBox}
        placeholder='Search for a weapon...'
        onChangeText={(text) => setSearch(text)}
        value={search}
      ></TextInput>
      <FlatList
        style={list}
        data={filteredWeapons}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, item: { name, weaponType, rarity } }) => (
          <Pressable
            style={pressable}
            onPress={() => navigation.navigate('Detail', { listWeapon: item })}
          >
            <View style={left}>
              <Image style={image} source={getImagePath(weaponType)} />
              <ThemedText
                style={[{ color: getRarityColor(rarity) }, listItem, nameText]}
              >
                {name}
              </ThemedText>
            </View>
            <Ionicons
              style={listItem}
              name='chevron-forward'
              color={theme.TEXT_COLOR}
              size={40}
            />
          </Pressable>
        )}
      />
    </View>
  );
};

const createStyles = () => {
  const { theme } = useAppContext();
  return StyleSheet.create({
    container: {
      marginHorizontal: 10,
      flex: 1,
    },
    pressable: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: theme.TERTIARY_COLOR,
      borderRadius: 10,
      borderColor: theme.TERTIARY_COLOR,
      borderWidth: 2,
      justifyContent: 'space-between',
      padding: 15,
      marginBottom: 10,
    },
    left: {
      flexDirection: 'row',
    },
    image: {
      width: 60,
      height: 60,
      marginRight: 10,
      alignSelf: 'center',
    },
    listItem: {
      alignSelf: 'center',
    },
    searchBox: {
      marginTop: 10,
      padding: 5,
      paddingLeft: 10,
      borderWidth: 5,
      borderColor: theme.ACCENT_COLOR,
      borderRadius: 5,
      backgroundColor: theme.INPUT_COLOR,
    },
    nameText: {
      width: useWindowDimensions().width - 150,
      fontSize: 24,
      fontWeight: 'bold',
    },
    list: {
      marginTop: 10,
    },
  });
};

export default WeaponList;
