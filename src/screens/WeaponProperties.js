import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { getWeaponWithProperties } from '../utils/ApiUtils';
import { useState, useEffect } from 'react';
import StatCard from '../components/StatCard';
import PropTypes from 'prop-types';

const WeaponProperties = ({ route }) => {
  const { loadFailed, container, list } = styles;

  const [weapon, setWeapon] = useState();

  useEffect(() => {
    getWeaponWithProperties(route.params.listWeapon.id)
      .then((data) => {
        setWeapon(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!weapon) {
    return <Text style={loadFailed}>Unable to load weapon properties.</Text>;
  }

  const { properties } = weapon;

  return (
    <View style={container}>
      <FlatList
        contentContainerStyle={list}
        data={properties}
        renderItem={({ item: { name, description } }) => (
          <StatCard name={name} value={description} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    flex: 1,
  },
  list: {
    paddingTop: 10,
  },
  loadFailed: {
    alignSelf: 'center',
    marginTop: 20,
  },
});

WeaponProperties.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      listWeapon: PropTypes.shape({
        id: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default WeaponProperties;
