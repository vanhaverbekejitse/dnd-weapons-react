import React from 'react';
import { View, Text } from 'react-native';
import { createStatCardStyles } from '../styles/style';
import ThemedText from './ThemedText';
import PropTypes from 'prop-types';

const StatCard = ({ name, value }) => {
  const { container, nameContainer, valueContainer, valueText, nameText } =
    createStatCardStyles();

  return (
    <View style={container}>
      <View style={nameContainer}>
        <ThemedText style={nameText}>{name}</ThemedText>
      </View>
      <View style={valueContainer}>
        <Text style={valueText}>{value}</Text>
      </View>
    </View>
  );
};

StatCard.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default StatCard;
