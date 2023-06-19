import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import DrinksIcon from '../../assets/icons/DrinksIcon';
import CocktailIcon from '../../assets/icons/CoctailIcon';
import UserIcon from '../../assets/icons/UserIcon';
import {styles} from './styles';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useKeyboardListner} from '../../hooks/useKeyboardListner';

const BottomTabs = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const {isKeyboardActive} = useKeyboardListner();
  if (isKeyboardActive) {
    return null;
  }
  return (
    <View style={styles.tabsContainer}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(
                route.name,
                state.routes.find(e => e.name === 'Cocktails')?.params,
              );
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              onLongPress={onLongPress}>
              {label === 'Cocktails' ? (
                <DrinksIcon />
              ) : label === 'MyCocktails' ? (
                <CocktailIcon />
              ) : label === 'Account' ? (
                <UserIcon />
              ) : null}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BottomTabs;
