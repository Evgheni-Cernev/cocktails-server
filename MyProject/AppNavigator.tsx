import React, {useMemo} from 'react';
import CocktailsScreen from './App/Screens/CoctailsScreen/CocktailsScreen';
import AccountScreen from './App/Screens/AccountScreen/AccountScreen';
import MyCoctailsScreen from './App/Screens/MyCoctailsScreen/MyCoctailsScreen';
import RecipScreen from './App/Screens/RecipScreen/RecipScreen';
import LoginScreen from './App/Screens/LoginScreen/LoginScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TransitionSpecs, createStackNavigator} from '@react-navigation/stack';

import BottomTabs from './App/components/BottomTabs/BottomTabs';
import Filters from './App/Screens/Filters/Filters';
import useGetUserDataQuery from './App/hooks/api/useGetUserQuery';
import IngridientFilters from './App/Screens/IngridientFilters/IngridientFilters';
import UserScreen from './App/Screens/UserScreen/UserScreen';
import FriendsScreen from './App/Screens/Friends/FriendsScreen';
import ChatScreen from './App/Screens/ChatScreen/ChatScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TransitionScreen = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  cardStyleInterpolator: ({current, next, layouts}: any) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
          {
            translateX: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, -layouts.screen.width],
                })
              : 1,
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};

const AppNavigator = () => {
  useGetUserDataQuery();
  const CardOptions = {
    cardOverlayEnabled: false,
    animationTypeForReplace: 'pop',
    transparentModal: 'modal',
    ...(TransitionScreen as any),
  };
  const Cocktails = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardOverlayEnabled: false,
          animationTypeForReplace: 'pop',
        }}>
        <Stack.Screen
          name="CocktailsScreen"
          component={CocktailsScreen}
          options={CardOptions}
        />
        <Stack.Screen
          name="Filters"
          component={Filters}
          options={CardOptions}
        />
        <Stack.Screen
          name="IngridientFilters"
          component={IngridientFilters}
          options={CardOptions}
        />

        <Stack.Screen
          name="RecipScreen"
          component={RecipScreen}
          options={CardOptions}
        />
        <Stack.Screen
          name="UserScreen"
          component={UserScreen}
          options={CardOptions}
        />
        <Stack.Screen
          name="FriendsScreen"
          component={FriendsScreen}
          options={CardOptions}
        />
        <Stack.Screen
          name="ChatScreenScreen"
          component={ChatScreen}
          options={CardOptions}
        />
          <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={CardOptions}
        />
      </Stack.Navigator>
    );
  };
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomTabs {...props} />}>
      <Tab.Screen name="Cocktails" component={Cocktails} />
      <Tab.Screen name="MyCocktails" component={MyCoctailsScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
