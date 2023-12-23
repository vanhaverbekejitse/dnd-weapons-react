import React from 'react';
import { View, StyleSheet, Image, useWindowDimensions } from 'react-native';
import { getWeaponTitle } from '../utils/TextUtils';
import { getImagePath } from '../utils/ImageUtils';
import { createStatCardStyles } from '../styles/style';
import ThemedText from './ThemedText';
import PropTypes from 'prop-types';

const TitleCard = ({ weapon }) => {
  const { container, nameContainer, valueContainer } = createStatCardStyles();
  const { subTitle, image } = createStyles();
  const imageSize = useWindowDimensions().width > 600 ? 180 : 100;

  const { weaponType } = weapon;

  return (
    <View style={container}>
      <View style={nameContainer}>
        <ThemedText style={subTitle}>{getWeaponTitle(weapon)}</ThemedText>
      </View>
      <View style={valueContainer}>
        <Image
          style={[image, { width: imageSize, height: imageSize }]}
          source={getImagePath(weaponType)}
        />
      </View>
    </View>
  );
};

const createStyles = () => {
  return StyleSheet.create({
    subTitle: {
      textTransform: 'capitalize',
      fontSize: 24,
      fontWeight: 'bold',
    },
    image: {
      alignSelf: 'center',
      paddingHorizontal: 5,
    },
  });
};

TitleCard.propTypes = {
  weapon: PropTypes.shape({
    isMartial: PropTypes.bool.isRequired,
    weaponType: PropTypes.string.isRequired,
  }).isRequired,
};

export default TitleCard;
