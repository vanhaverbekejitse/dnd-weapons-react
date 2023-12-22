import React from 'react';
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import StatCard from '../components/StatCard';
import { useState, useEffect } from 'react';
import { getWeapon, postAttacks } from '../utils/ApiUtils';
import { addPlusSign, getDamageText, getRangeText } from '../utils/TextUtils';
import ListStatCard from '../components/ListStatCard';
import TitleCard from '../components/TitleCard';
import { createBottomStyles } from '../styles/style';
import PropTypes from 'prop-types';

const WeaponDetail = ({ route, navigation }) => {
  const {
    button,
    statCardContainer,
    statCardContainerVertical,
    container,
    loadFailed,
    scrollView,
    propertyCard,
  } = styles;
  const { bottom } = createBottomStyles();
  const { width } = useWindowDimensions();

  const [weapon, setWeapon] = useState();
  const [buttonText, setButtonText] = useState('Add to your attacks');

  useEffect(() => {
    getWeapon(route.params.listWeapon.id)
      .then((data) => {
        setWeapon(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!weapon) {
    return <Text style={loadFailed}>Unable to load weapon details.</Text>;
  }

  const {
    cost: { amount, coinType },
    damageModifier,
    attacks,
    weight,
    properties,
    rarity,
  } = weapon;

  // Om later in 1 of 2 rijen op te delen
  const stats = [
    <StatCard key='cost' name='Cost' value={`${amount} ${coinType}`} />,
    <StatCard key='weigth' name='Weight' value={`${weight} lbs`} />,
    <StatCard
      key='modifier'
      name='Damage Modifier'
      value={addPlusSign(damageModifier)}
    />,
    <StatCard key='rarity' name='Rarity' value={rarity} />,
    <Pressable
      key='properties'
      style={propertyCard}
      onPress={() => navigation.navigate('Properties', { listWeapon: weapon })}
    >
      <ListStatCard name='Properties' values={properties} />
    </Pressable>,
    <ListStatCard
      key='attacks'
      name='Attacks'
      values={attacks.map(
        ({ name, damageRolls, damageModifier, range }) =>
          `${name}\n${getDamageText(
            damageRolls,
            damageModifier
          )} ${getRangeText(range)}`
      )}
    />,
  ];

  return (
    <View style={container}>
      <ScrollView contentContainerStyle={scrollView}>
        {width > 600 ? (
          <View>
            <View style={statCardContainer}>
              <TitleCard weapon={weapon} />
              <View style={statCardContainerVertical}>{stats.slice(0, 4)}</View>
            </View>
            <View style={statCardContainer}>{stats.slice(4)}</View>
          </View>
        ) : (
          <View>
            <TitleCard weapon={weapon} />
            <View style={statCardContainer}>{stats.slice(0, 2)}</View>
            <View style={statCardContainer}>{stats.slice(2, 4)}</View>
            {stats.slice(4)}
          </View>
        )}
      </ScrollView>
      <Pressable
        style={bottom}
        onPress={() => {
          setButtonText('Attacks added!');
          postAttacks(weapon);
        }}
      >
        <Text selectable={false} style={button}>
          {buttonText}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    fontWeight: '600',
    alignSelf: 'center',
  },
  statCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  statCardContainerVertical: {
    justifyContent: 'space-between',
    flex: 1,
  },
  container: {
    marginHorizontal: 10,
    flex: 1,
  },
  loadFailed: {
    alignSelf: 'center',
    marginTop: 20,
  },
  scrollView: {
    paddingBottom: 50,
    paddingTop: 10,
  },
  propertyCard: {
    flexGrow: 1,
  },
});

WeaponDetail.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      listWeapon: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default WeaponDetail;
