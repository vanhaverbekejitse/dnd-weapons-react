import { StyleSheet } from 'react-native';
import { useAppContext } from '../context/AppContext';

export const createStatCardStyles = () => {
  const { theme } = useAppContext();
  return StyleSheet.create({
    container: {
      borderRadius: 10,
      borderWidth: 2,
      borderColor: theme.TERTIARY_COLOR,
      overflow: 'hidden',
      marginBottom: 10,
      flexGrow: 1,
    },
    nameContainer: {
      backgroundColor: theme.TERTIARY_COLOR,
      alignItems: 'center',
      padding: 5,
    },
    valueContainer: {
      backgroundColor: theme.PRIMARY_COLOR,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 5,
      borderTopColor: theme.TERTIARY_COLOR,
      borderTopWidth: 2,
      flex: 1,
    },
    nameText: {
      fontWeight: '600',
    },
    valueText: {
      alignSelf: 'center',
      textAlign: 'center',
      paddingHorizontal: 5,
    },
  });
};

export const createBottomStyles = () => {
  const { theme } = useAppContext();
  return StyleSheet.create({
    bottom: {
      alignSelf: 'center',
      margin: 10,
      padding: 10,
      borderRadius: 10,
      position: 'absolute',
      bottom: 0,
      backgroundColor: theme.BUTTON_COLOR,
      textAlign: 'center',
    },
  });
};

export const createInputStyles = () => {
  const { theme } = useAppContext();
  return StyleSheet.create({
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
    },
    inputButton: {
      paddingHorizontal: 5,
      paddingBottom: 4,
      borderWidth: 1,
      borderColor: theme.ACCENT_COLOR,
      borderRadius: 5,
      backgroundColor: theme.ACCENT_COLOR,
      width: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputGroup: {
      padding: 5,
      borderWidth: 1,
      borderColor: theme.TERTIARY_COLOR,
      borderRadius: 5,
      backgroundColor: theme.TERTIARY_COLOR,
      marginTop: 10,
    },
  });
};
