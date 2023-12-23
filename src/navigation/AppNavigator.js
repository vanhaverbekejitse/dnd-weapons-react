import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WeaponList from '../screens/WeaponList';
import Attacks from '../screens/Attacks';
import AppSettings from '../screens/AppSettings';
import WeaponDetail from '../screens/WeaponDetail';
import WeaponProperties from '../screens/WeaponProperties';
import AttackEdit from '../screens/AttackEdit';
import { useAppContext } from '../context/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import { Pressable, View } from 'react-native';
import { deleteAttack } from '../utils/ApiUtils';

export const ThemedNavigation = () => {
  const { theme } = useAppContext();

  return (
    <View
      style={{ width: '100%', overflow: 'hidden', flex: 1 }} //nodig om overbodige scrollbar niet te tonen
    >
      <NavigationContainer
        theme={{
          colors: {
            background: theme.PRIMARY_COLOR,
          },
        }}
      >
        <BottomNavigator />
      </NavigationContainer>
    </View>
  );
};

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
  const headerOptions = createHeaderOptions();
  const { theme } = useAppContext();
  return (
    <Tab.Navigator
      screenOptions={{
        ...headerOptions,
        tabBarStyle: {
          backgroundColor: theme.SECONDARY_COLOR,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          color: theme.TEXT_COLOR,
        },
        keyboardHidesTabBar: true,
      }}
      initialRouteName='AttackNavigation'
    >
      <Tab.Screen
        name='WeaponNavigation'
        component={WeaponListNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <Ionicons name='menu' color={theme.TEXT_COLOR} size={size} />
          ),
          tabBarLabel: 'Weapons',
        }}
      />
      <Tab.Screen
        name='AttackNavigation'
        component={AttackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ size }) => (
            <Ionicons name='flash' color={theme.TEXT_COLOR} size={size} />
          ),
          tabBarLabel: 'Attacks',
        }}
      />
      <Tab.Screen
        name='Settings'
        component={AppSettings}
        options={{
          tabBarIcon: ({ size }) => (
            <Ionicons name='settings' color={theme.TEXT_COLOR} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const WeaponStack = createNativeStackNavigator();

export const WeaponListNavigator = () => {
  const headerOptions = createHeaderOptions();
  return (
    <WeaponStack.Navigator screenOptions={headerOptions}>
      <WeaponStack.Screen name='Weapons' component={WeaponList} />
      <WeaponStack.Screen
        name='Detail'
        component={WeaponDetail}
        options={({ route }) => ({
          title: route.params.listWeapon.name,
        })}
      />
      <WeaponStack.Screen name='Properties' component={WeaponProperties} />
    </WeaponStack.Navigator>
  );
};

const AttackStack = createNativeStackNavigator();

export const AttackNavigator = () => {
  const { theme } = useAppContext();
  const headerOptions = createHeaderOptions();
  return (
    <AttackStack.Navigator screenOptions={headerOptions}>
      <AttackStack.Screen name='Attacks' component={Attacks} />
      <AttackStack.Screen
        name='Edit'
        component={AttackEdit}
        options={({ route, navigation }) => ({
          title: 'Edit attack',
          headerRight: () => (
            <Pressable
              onPress={async () => {
                await deleteAttack(route.params.attack.id);
                navigation.goBack();
              }}
            >
              <Ionicons
                style={{ marginRight: 20 }}
                name='trash-bin'
                color={theme.TEXT_COLOR}
                size={30}
              />
            </Pressable>
          ),
        })}
      />
    </AttackStack.Navigator>
  );
};

const createHeaderOptions = () => {
  const { theme } = useAppContext();
  return {
    headerStyle: {
      backgroundColor: theme.SECONDARY_COLOR,
      borderBottomWidth: 0,
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: theme.TEXT_COLOR,
    },
    headerTintColor: theme.TEXT_COLOR,
  };
};
