import React, { FC, useContext, useRef, useState } from 'react';
import { Keyboard, RefreshControl, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Navigation } from '../../types';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import useGetIngridientsGroupsQuery, { IngridientItem, IngridientsGroups } from '../../hooks/api/useGetIngridientsGroupsQuery';
import FilterItem from '../../components/FilterItem/FilterItem';

import Header from './Header';
import useSaveFiltersQuery from '../../hooks/api/useSaveFiltersQuery';
import Arrow from '../../assets/icons/Arrow';
import SaveKeyboard from '../../components/SaveKeyboard/SaveKeyboard';
import { UserContext } from '../../../App';

type CocktailsScreenProps = {
  navigation: Navigation,
  route: RouteProp<ParamListBase>,
  headerName?: string,
  data?: IngridientItem[]
};

const IngridientFilters: FC<CocktailsScreenProps> = ({ route, navigation }) => {
  const { isLoading, refetch } = useGetIngridientsGroupsQuery()
  const { name, items } = route.params as IngridientsGroups

  const [inputText, setInputText ] = useState('');
  const { filters, addFilters } = useContext(UserContext);
  const { saveFilter } = useSaveFiltersQuery(inputText)
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef<any>(null);

  const handleButtonPress = () => {
      setShowInput(true)
      inputRef.current.focus();
  };

  const handleKeyboardHide = () => {
      setShowInput(false);
      Keyboard.dismiss();
  };

  const onSave = () => {
      saveFilter()
      handleKeyboardHide()
  }

  const onText = (value: string) => {
    setInputText(value)
  }


  return (
    <View style={styles.screen} >
      <Header {...{ route, navigation, handleButtonPress }} headerName={name} />
      <ScrollView showsVerticalScrollIndicator={false} refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={() => {
          refetch()
        }} />
      }>
        {items?.map((ingridient) => {
          return <FilterItem key={ingridient._id} showChecked onPress={() => { addFilters({...filters, ingridients: [...filters.ingridients, ...new Set([ingridient.name])]})}} data={ingridient} {...{ route, navigation }} />
        })}
      </ScrollView>

      <SaveKeyboard {...{showInput, onSave, onText, inputRef, handleKeyboardHide}}/>
    </View>
  );
};

export default IngridientFilters;