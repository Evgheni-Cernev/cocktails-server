import React from 'react';
import CocktailsScreen from './App/Screens/CoctailsScreen/CocktailsScreen';
import AccountScreen from './App/Screens/AccountScreen/AccountScreen';
import MyCoctailsScreen from './App/Screens/MyCoctailsScreen/MyCoctailsScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabs from './App/components/BottomTabs/BottomTabs';
import Filters from './App/Screens/Filters/Filters';
import { Options } from './App/utils/Options';
import useGetUserDataQuery from './App/hooks/api/useGetUserQuery';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigator = () => {
  useGetUserDataQuery()
  
  const Cocktails = () => (
    <Stack.Navigator screenOptions={Options().screenNavigatorOptions}  >
      <Stack.Screen name="CocktailsScreen" component={CocktailsScreen} />
      <Stack.Screen name="Filters" component={Filters} />
    </Stack.Navigator>
  );

  return (
    <Tab.Navigator screenOptions={Options().screenOptions} tabBar={props => <BottomTabs {...props} />}>
      <Tab.Screen name="Cocktails" component={Cocktails} />
      <Tab.Screen name="MyCocktails" component={MyCoctailsScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;



