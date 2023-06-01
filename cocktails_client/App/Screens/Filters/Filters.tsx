import React, { FC } from 'react';
import { RefreshControl, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Navigation } from '../../types';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import useGetIngridientsGroupsQuery from '../../hooks/api/useGetIngridientsGroupsQuery';
import FilterItem from '../../components/FilterItem/FilterItem';
import Bg from '../../assets/icons/Bg';
import Arrow from '../../assets/icons/Arrow';
import { Dropdown } from 'react-native-element-dropdown';
import HeaderTabs from '../../components/HeadresTabs/HeadresTabs';

type CocktailsScreenProps = {
  navigation: Navigation,
  route: RouteProp<ParamListBase>
};

const Filters: FC<CocktailsScreenProps> = ({ route, navigation }) => {
  const { ingridientsGroups, isLoading, refetch } = useGetIngridientsGroupsQuery()
  return (
    <View style={styles.screen} >
   
       

      <ScrollView showsVerticalScrollIndicator={false} refreshControl={
                <RefreshControl refreshing={isLoading} onRefresh={() => {
                    refetch()
                }} />
            }>
        {ingridientsGroups?.map((ingridient) => {
          return <FilterItem key={ingridient._id} {...ingridient}/>
        })}
      </ScrollView>

      {/* {!isKeyboardOpen && (
          <View style={styles.buttonsContainer}>
            <Button
              text="Apply"
              onPress={() => {
                navigation.navigate('Home');
              }}
            />
            <Button
              text="Clear"
              onPress={() => {
                setFilter([]);
              }}
            />
          </View>
        )} */}
    </View>
  );
};

export default Filters;