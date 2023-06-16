import React, { FC } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { styles } from './styles';
import { Navigation } from '../../types';
import { ParamListBase, RouteProp } from '@react-navigation/native';
import useGetIngridientsGroupsQuery, { IngridientItem } from '../../hooks/api/useGetIngridientsGroupsQuery';
import FilterItem from '../../components/FilterItem/FilterItem';

import Header from './Header';

type CocktailsScreenProps = {
  navigation: Navigation,
  route: RouteProp<ParamListBase>,
  headerName?: string,
  data?: IngridientItem[]
};

const Filters: FC<CocktailsScreenProps> = ({ route, navigation }) => {

  const { ingridientsGroups, isLoading, refetch } = useGetIngridientsGroupsQuery()
  return (
    <View style={styles.screen} >
      <Header {...{ route, navigation }} />
      <ScrollView showsVerticalScrollIndicator={false} refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={() => {
          refetch()
        }} />
      }>
        {ingridientsGroups?.map((ingridient) => {
          return <FilterItem
            key={ingridient._id}
            data={ingridient}
            onPress={() => navigation.navigate('IngridientFilters', ingridient)}
            {...{ route, navigation }}
          />
        })}
      </ScrollView>
    </View>
  );
};

export default Filters;