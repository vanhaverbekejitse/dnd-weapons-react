import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStatCardStyles } from '../styles/style';
import ThemedText from './ThemedText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAppContext } from '../context/AppContext';
import PropTypes from 'prop-types';

const ListStatCard = ({ name, values }) => {
  const { container, nameContainer, nameText, valueContainer, valueText } =
    createStatCardStyles();
  const { icon, propertyHeader } = styles;
  const { theme } = useAppContext();

  return (
    <View style={container}>
      <View style={nameContainer}>
        {name === 'Properties' ? (
          <View style={propertyHeader}>
            <ThemedText style={nameText}>{name}</ThemedText>
            <Ionicons
              style={icon}
              name='eye'
              color={theme.TEXT_COLOR}
              size={18}
            ></Ionicons>
          </View>
        ) : (
          <ThemedText style={nameText}>{name}</ThemedText>
        )}
      </View>
      {!values.length && (
        <View style={valueContainer}>
          <Text style={valueText}>No properties</Text>
        </View>
      )}
      {values.map((value) => (
        <View key={value} style={valueContainer}>
          <Text style={valueText}>{value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginLeft: 5,
  },
  propertyHeader: {
    flexDirection: 'row',
    alignContent: 'center',
  },
});

ListStatCard.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ListStatCard;
